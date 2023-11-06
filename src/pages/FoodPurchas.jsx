import { useLoaderData } from "react-router-dom";
import Title from "../utility/Title";
import { useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const FoodPurchas = () => {
    const {user} = useContext(AuthContext)
    const orderFood = useLoaderData()
    const { _id, name, price, image, quantity, category, country, auth, description } =orderFood;

    const handleOrder=(e)=>{
        e.preventDefault()
        const orderData = {
            foodId: _id,
            name,
            price,
            quantity,
            date : new Date(),
            buyerName: user.displayName,
            buyerEmail: user.email
        }

        axios.post("http://localhost:5000/api/v1/orders", orderData)
        .then(res=>{
            if(res.data.insertedId){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Food ordered successfully',
                    showConfirmButton: false
                });
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Failed to order the food.',
                });
            }
        })

    }
    return (
        <div className=" w-full max-w-7xl mx-auto">
        <div className="py-10">
        <Title> Purchase this product  </Title>
       
        </div>

        {/* <div>
            <p>Name: {user.displayName}</p>
            <p>Email: {user.email}</p>
            <p>Id: {_id}</p>
            <p>Order date: {new Date().toDateString()} </p>
        </div> */}
        <form onSubmit={handleOrder} className="max-w-7xl mx-auto  ">

            {/* Name and Price */}
          <div className="md:flex mb-8 gap-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <label className="input-group">
                <input
                defaultValue={name}
                  type="text"
                  name="name"
                  placeholder="Product Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
  
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <label className="input-group">
                <input
                  defaultValue={price}
                  type="text"
                  name="price"
                  placeholder="Price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>


          {/* Quantity */}
          <div className="md:flex mb-8 gap-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <label className="input-group">
                <input
                defaultValue={quantity}
                  type="text"
                  name="quantity"
                  placeholder="Quantity"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
{/* Buyer Name */}
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Buyer Name</span>
              </label>
              <label className="input-group">
                <input
                defaultValue={user.displayName}
                  type="text"
                  name="name"
                  placeholder="Product Name"
                  className="input input-bordered w-full"
                  readOnly
                />
              </label>
            </div>
          </div>


            {/* Buyer Email and Date of order */}
          <div className="md:flex mb-8 gap-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Buyer Email</span>
              </label>
              <label className="input-group">
                <input
                defaultValue={user.email}
                  type="text"
                  name="quantity"
                  placeholder="Quantity"
                  className="input input-bordered w-full"
                  readOnly
                />
              </label>
            </div>
        {/* Buying Date */}
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text" readOnly> Date of order</span>
              </label>
              <label className="input-group">
                <input
                defaultValue={new Date().toDateString()}
                  type="text"
                  name="name"
                  placeholder="Product Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
  
          <input
            type="submit"
            value="Purchase now"
            className="btn bg-[#39DB4A] hover:bg-[#8ee997] btn-block text-white "
          />
        </form>
      </div>
    );
};

export default FoodPurchas;