import Title from "../../utility/Title";
import dammyImg from "../../assets/istockphoto-1091047674-1024x1024.jpg";
const PopularCategory = () => {
  return (
    <div className="py-10 px-10 bg-slate-50">
      <Title>
        Popular Categories
        <span className="text-res ml-10 text-sm text-red-500  uppercase font-semibold ">
          Customer Favorites
        </span>
      </Title>

      <div className="flex flex-col xl:flex-row justify-between items-center gap-10">


        <div className=" w-80 h-80 rounded-full bg-red-500 flex flex-col items-center text-white flex-wrap">
          <div className=" w-60 -60 rounded-full bg-red-500">
            <img  className="rounded-full w-full " src={dammyImg} alt="" />
          </div>
          <h2>Category name </h2>
          <span className="text-3xl font-bold dark:text-gray-900 text-white justify-center">
            Category
          </span>
        </div>

        
        <div className=" w-80 h-80 rounded-full bg-red-500 flex flex-col items-center text-white flex-wrap">
          <div className=" w-60 -60 rounded-full bg-red-500">
            <img  className="rounded-full w-full " src={dammyImg} alt="" />
          </div>
          <h2>Category name </h2>
          <span className="text-3xl font-bold dark:text-gray-900 text-white justify-center">
            Category
          </span>
        </div>

        
        <div className=" w-80 h-80 rounded-full bg-red-500 flex flex-col items-center text-white flex-wrap">
          <div className=" w-60 -60 rounded-full bg-red-500">
            <img  className="rounded-full w-full " src={dammyImg} alt="" />
          </div>
          <h2>Category name </h2>
          <span className="text-3xl font-bold dark:text-gray-900 text-white justify-center">
            Category
          </span>
        </div>

        
        <div className=" w-80 h-80 rounded-full bg-red-500 flex flex-col items-center text-white flex-wrap">
          <div className=" w-60 -60 rounded-full bg-red-500">
            <img  className="rounded-full w-full " src={dammyImg} alt="" />
          </div>
          <h2>Category name </h2>
          <span className="text-3xl font-bold dark:text-gray-900 text-white justify-center">
            Category
          </span>
        </div>

        
      </div>
    </div>
  );
};

export default PopularCategory;
