import axios from "axios";
import SearchInput from "../utility/SearchInput";
import {useState, useEffect} from "react";
import SingleFood from "../components/SingleFood";
import Title from "../utility/Title";
const AllFoods = () => {

    const [allFood, setAllFood] = useState([])

    useEffect(() => {
        axios.get('/allFoods.json')
        .then(res => {
            
            setAllFood(res.data)
        })
    }, [])


    return (
        <div className="container mx-auto max-w-7xl">
          <div className="py-10">
          <SearchInput></SearchInput>
          </div>

           <Title> All Foods: {allFood.length} </Title>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {
                allFood.map(food => <SingleFood key={food.foodname} food={food}></SingleFood>)
            }
           </div>
        </div>
    );
};

export default AllFoods;