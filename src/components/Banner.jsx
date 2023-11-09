import { Link } from "react-router-dom";
import bannerImg from "../assets/banner2.jpg";
import bannerANimation from '../assets/banner.json'
import Lottie from "lottie-react";
const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bannerImg})`,
        backgroundSize: "cover",
      }}
      className="flex flex-col-reverse md:flex-row items-center justify-center  rounded-xl p-10 relative"
    >
         
     
      <div className="flex flex-1 flex-col justify-center  " style={{ zIndex: 2 }}>
        <div>
        <h1 className="text-3xl md:text-4xl mb-12 text-white">
          <span className="text-black font-extrabold text-5xl  ">
            Emran's Food:
          </span>
          <br />
          <br /> <span className="font-extrabold text-5xl  text-[#39DB4A]">Where Flavor Meets Tradition</span>
        </h1>
        <p className="mb-10 pr-5 text-white">
          At Emran's Food, we're passionate about preserving the rich tapestry
          of culinary traditions while infusing them with a modern twist. Our
          restaurant is a place where the authenticity of flavors meets
          innovation. With a diverse menu that pays homage to the finest
          ingredients and recipes from around the world, we invite you to join
          us for a remarkable dining experience. Whether you're a connoisseur of
          classic dishes or an adventurer seeking new taste sensations, Emran's
          Food has something to delight every palate. Come savor the essence of
          tradition with a touch of contemporary flair at Emran's Food.
        </p>

        <div className="flex justify-start items-center gap-10 mt-10">
          <Link to={"/allfoods"}>
            <button className="btn bg-[#39DB4A] w-40 text-white">
              All Products
            </button>
          </Link>
          <Link to={"/blog"}>
            <button className="btn btn-outline btn-success w-40"> Blogs </button>
          </Link>
        </div>
        </div>
      </div>

      <div
        style={{
          background: "#06540eb6",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex:1,
          
        }}
        className="rounded-xl "
      ></div>


      <div className="flex-1 flex justify-center" style={{ zIndex: 2 }}>
        <Lottie className="w-72 md:w-96" animationData={bannerANimation} loop={false}  />
      </div>
    </div>
  );
};

export default Banner;
