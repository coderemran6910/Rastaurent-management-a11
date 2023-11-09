import Title from "../../utility/Title";
// import dammyImg from "../../assets/istockphoto-1091047674-1024x1024.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
const PopularCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(()=>{
    axios.get('/category.json')
    .then(res=> {
      setCategories(res.data)
    })
  }, [])



  return (
    <div className="py-10 px-10 bg-[#719C76]  flex flex-col items-center justify-center m-5 rounded-xl">
      <Title >
        <span className="text-white">Popular Categories</span>
        <span className="text-res ml-10 text-sm text-black  uppercase font-semibold ">
          Customer Favorites
        </span>
      </Title>

      <div className="flex flex-col xl:flex-row justify-between items-center gap-10">


      {
         categories.map((category, index)=>{
           const { Image, Category} = category
            return (
              <div key={index} className="w-52 cursor-pointer  h-52 shadow-xl rounded-full bg-[#39DB4A] flex flex-col items-center justify-center text-white flex-wrap">
                <div className=" w-10 -10 rounded-full ">
                  <img  className="rounded-full w-full " src={Image} />
                </div>
                <span className="text-3xl font-bold dark:text-gray-900 text-blue-950 justify-center  flex-shrink">
                  {Category}
                </span>
              </div>
            )
         })
      }




        {/* <div className=" w-80 h-80 rounded-full bg-red-500 flex flex-col items-center text-white flex-wrap">
          <div className=" w-60 -60 rounded-full bg-red-500">
            <img  className="rounded-full w-full " src={dammyImg} alt="" />
          </div>
          <h2>Category name </h2>
          <span className="text-3xl font-bold dark:text-gray-900 text-white justify-center">
            Category
          </span>
        </div> */}
      </div>
    </div>
  );
};

export default PopularCategory;
