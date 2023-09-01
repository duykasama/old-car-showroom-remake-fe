import formatUsDollar from "../../lib/formatUsDollar";
import formateDate from "../../lib/formateDate";
import "./post.scss";

function Post({ post }) {
  const carDescription = post.car.carDescription;

  return (
    <div className="shadow-gray-800 shadow-sm rounded-md cursor-pointer hover:scale-105 post">
      <img
        src="https://timelessride.s3.amazonaws.com/1690773310523_00-2.png"
        alt="Car image"
        width={300}
      />
      <div className="px-2 gap-2 my-1 info">
        {post.postDate && (
          <div className="py-1 px-3 border bg-gray-200 rounded max-w-fit">
            {formateDate(post.postDate)}
          </div>
        )}
        <h3 className="text-2xl font-bold">{post.car.name}</h3>
        <ul className="flex gap-3">
          {carDescription.mileage && <li>{carDescription.mileage} mi</li>}
          {carDescription.transmission && (
            <li>{carDescription.transmission}</li>
          )}
          {carDescription.power && <li>{carDescription.power} hp</li>}
        </ul>
      </div>
      <div className="grid grid-cols-2 price">
        <div className="bg-red-500 p-2 border-bl">For sale</div>
        <div className="p-2 text-center italic">{formatUsDollar(post.car.price)}</div>
      </div>
    </div>
  );
}

export default Post;
