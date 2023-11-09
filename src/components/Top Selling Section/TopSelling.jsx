import { useEffect, useState } from "react";
import Title from "../../utility/Title";
import axios from "axios";
import TopSellingFoodSingle from "./TopSellingFoodSingle";
import { Link } from "react-router-dom";

const TopSelling = () => {
    const [topFood , setTopFood] = useState([])
    useEffect(()=>{
        axios.get('/topSelling.json')
        .then(res=> {
            setTopFood(res.data)
        })
    } ,[])
    return (
        <div>
            
            <Title> Our Top Selling Products  <span className="text-res ml-10 text-sm text-red-500  uppercase font-semibold ">Special Dishes</span></Title>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  justify-items-center items-center">
                {
                    topFood.map(food=> <TopSellingFoodSingle key={food.id} food={food}></TopSellingFoodSingle>)
                }
            </div>
            <div className=" max-w-7xl mx-auto">
            <Link className="btn btn-ghost mt-5 bg-success " s to={'/allfoods'}> See All </Link>
            </div>
        </div>
    );
};

export default TopSelling;