import { useRef, useState, useTransition } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function ImageUploader() {
  const [isPending, startTransition] = useTransition();
  const inputRef = useRef(null);
  const [files, setFiles] = useState();
  const [imageObjects, setImageObjects] = useState([]);

  const handleImageChange = (event) => {
    const temp = imageObjects;
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      temp.push(URL.createObjectURL(files[i]));
    }
    setImageObjects(temp);
    startTransition(() => {
      setFiles(event.target.files);
    });
  };

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const removeImage = (image) => {
    const temp = imageObjects;
    const index = temp.indexOf(image);
    temp.splice(index, 1);
    setImageObjects(temp);
    startTransition(() => {
      for (let i = 0; i < files.length; i++) {
        if (URL.createObjectURL(files[i]) === image) {
          const tempFiles = files;
          const fileIndex = files.indexOf(files[i]);
          tempFiles.splice(fileIndex, 1);
          setFiles(tempFiles);
        }
      }
    });
  };

  return (
    <>
      <div onClick={handleImageClick} className="cursor-pointer">
        <img src="/upload-image-icon.jpg" width={150} />
        <p>Upload your images</p>
        <input
          type="file"
          multiple
          ref={inputRef}
          onChange={handleImageChange}
          hidden
        />
      </div>
      {imageObjects.length > 0 && (
        <div className="grid grid-cols-4 gap-10">
          {imageObjects.map((image, idx) => (
            <div
              key={idx}
              className="flex items-center gap-10 border p-4 rounded"
            >
              <img src={image} width={100} />
              <FontAwesomeIcon
                icon={faTrash}
                onClick={() => removeImage(image)}
                className="text-red-500 text-3xl hover:scale-150 cursor-pointer transition"
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default ImageUploader;
