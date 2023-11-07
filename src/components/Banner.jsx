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
      className="flex items-center h-[95vh] bg-[#F4F4F4]  rounded-xl p-10 relative"
    >
         <div
        style={{
          background: "rgba(0, 0, 0, 0.569)",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        className="rounded-xl"
      ></div>
     
      <div className="flex flex-1 flex-col justify-center z-10">
        <h1 className="text-3xl md:text-4xl mb-12 text-white">
          {" "}
          <span className="text-[#39DB4A] font-extrabold text-5xl ">
            Emran's Food:
          </span>{" "}
          <br /> Where Flavor Meets Tradition
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
            <button className="btn  btn-success w-40 text-white">
              All Products
            </button>
          </Link>
          <Link to={"/blog"}>
            <button className="btn btn-outline btn-success w-40"> Blog </button>
          </Link>
        </div>
      </div>
      <div className=" w-96">
        <Lottie animationData={bannerANimation} loop={false}  />
      </div>
    </div>
  );
};

export default Banner;
