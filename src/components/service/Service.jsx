import Title from "../../utility/Title";
import { Link } from "react-router-dom";
import animation1 from '../../assets/ani1.json'
import Lottie from "lottie-react";
const Service = () => {
  return (
    <div className="flex flex-col xl:flex-row items-center  bg-[#CCE4CE] rounded-md p-10">
      <div className="flex-1 flex flex-col justify-center lg:justify-start p-5">
        <span className=" text-red-500 uppercase text-bold ">Our Story & Services</span>
        <Title>
          Our Culinary Journey And Services
        </Title>

        <p className="  text-sm md:text-xl pr-5 ">
            Rooted in passion, we curate unforgettable dining experiences and
            offer exceptional services, blending culinary artistry with warm
            hospitality.
          </p>

        <Link className="btn  btn-success mt-20" to={"/blog"}>Blogs</Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center gap-5 flex-1">

        <div className="w-52 h-52 rounded-xl  flex flex-col items-center justify-center bg-white  flex-wrap  ">
          <div className="text-5xl text-[#5FE26C]">
          <Lottie animationData={animation1} loop  />
          </div>
          <h2 className="text-xl font-bold text-[#5FE26C]">Catering</h2>
          <p className="text-sm text-center">Delight your guests with our flavors and  presentation</p>
        </div>


        
        <div className="w-52 h-52 rounded-xl  flex flex-col items-center justify-center bg-white  flex-wrap  ">
          <div className="text-5xl text-[#5FE26C]">
          <Lottie animationData={animation1} loop  />
          </div>
          <h2 className="text-xl font-bold text-[#5FE26C]">Catering</h2>
          <p className="text-sm text-center">Delight your guests with our flavors and  presentation</p>
        </div>


        
        <div className="w-52 h-52 rounded-xl  flex flex-col items-center justify-center bg-white  flex-wrap  ">
          <div className="text-5xl text-[#5FE26C]">
          <Lottie animationData={animation1} loop  />
          </div>
          <h2 className="text-xl font-bold text-[#5FE26C]">Catering</h2>
          <p className="text-sm text-center">Delight your guests with our flavors and  presentation</p>
        </div>


        
        <div className="w-52 h-52 rounded-xl  flex flex-col items-center justify-center bg-white  flex-wrap  ">
          <div className="text-5xl text-[#5FE26C]">
          <Lottie animationData={animation1} loop  />
          </div>
          <h2 className="text-xl font-bold text-[#5FE26C]">Catering</h2>
          <p className="text-sm text-center">Delight your guests with our flavors and  presentation</p>
        </div>

      </div>
    </div>
  );
};

export default Service;
