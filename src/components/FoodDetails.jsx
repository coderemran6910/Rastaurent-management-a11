import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";

const FoodDetails = () => {
    const detailsFood = useLoaderData()
    const { _id, name, price, image, quantity, category, country, auth, description } =detailsFood;

    console.log(detailsFood);
    return (
        <div className="hero min-h-screen bg-base-200">
          <Helmet><title> Details-{name} </title></Helmet>
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <div className=" w-94 lg:w-1/2 rounded-lg shadow-2xl"><img src={image} className="rounded-lg" /></div>
          <div className="card flex-shrink-0 w-full max-w-2xl shadow-2xl bg-base-100  p-5 ">
            <h1 className="text-5xl font-bold">Food Name: <span className="text-[#67b76f]">{name}</span> </h1>
            <p className="py-6">{description}</p>
            <p className="py-6 text-xl font-bold">Price: ${price}</p>
            <p className="py-6 text-lg">Quantity: {quantity}</p>
            <p className="py-6">Origin: {country}</p>
            <p className="py-6">Category: <span className=" text-bold">{category}</span></p>
            <p className="py-6">Made By: <span className="text-red-400 text-xl">{auth}</span></p>
            <Link to={`/foodpurchase/${_id}`} className="btn bg-[#39DB4A]">Order</Link>
          </div>
        </div>
      </div>
    );
};

export default FoodDetails;