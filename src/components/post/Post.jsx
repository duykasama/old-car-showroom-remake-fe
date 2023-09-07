import formatUsDollar from "../../lib/formatUsDollar";
import formateDate from "../../lib/formateDate";
import "./post.scss";

function Post({ post }) {
  const carDescription = post.car.carDescription;

  return (
    <div className="shadow-gray-800 shadow-sm rounded-md cursor-pointer hover:scale-105 post">
      <img
        className="h-48 post--image"
        src={post.car?.carImages[0]?.content || "https://ford.prodealerwebsites.com.au/specials/default.png"}
        alt="Car image"
        width={300}
        height={200}
      />
      <div className="px-2 gap-2 my-2 info">
        {post.postDate && (
          <div className="py-1 px-3 border bg-gray-200 rounded max-w-fit">
            {formateDate(post.postDate)}
          </div>
        )}
        <h3 className="text-2xl font-bold">{post.car.name}</h3>
        <ul className="flex gap-3">
          {carDescription && carDescription.mileage && (
            <li>{carDescription.mileage} mi</li>
          )}
          {carDescription && carDescription.transmission && (
            <li>{carDescription.transmission}</li>
          )}
          {carDescription && carDescription.power && (
            <li>{carDescription.power} hp</li>
          )}
        </ul>
      </div>
      <div className="grid grid-cols-2 price">
        <div className="bg-red-500 p-2 text-center font-bold text-white border-bl">
          For sale
        </div>
        <div className="p-2 text-center italic">
          {formatUsDollar(post.car.price)}
        </div>
      </div>
    </div>
  );
}

export default Post;
