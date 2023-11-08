import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Title from "../../utility/Title";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const UpdateFood = () => {
    const {user} = useContext(AuthContext)
    const foodData = useLoaderData()
    const { name, price, image, quantity, category, description, country } = foodData
    // console.log('update Data' , foodData);
const handleUpdateFood = (event) =>{
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const price = parseFloat(form.price.value);
    const image = form.image.value;
    const quantity = parseInt(form.quantity.value, 10);
    const category = form.category.value;
    const description = form.description.value;
    const country = form.country.value;

    const updatedData ={
        name,
        price,
        image,
        quantity,
        category,
        description,
        country
    }
    console.log(updatedData);

    fetch(`https://restaurent-server.vercel.app/api/v1/foods/${foodData._id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData)
    })
    .then(res => res.json())
    .then(data => {
        if(data.modifiedCount > 0){
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Food updated successfully',
                showConfirmButton: true,
            })
        }
    })
    .catch(err => console.log(err))






//     axios.patch(`https://restaurent-server.vercel.app/api/v1/foods/${foodData._id}`, updatedData, {
//   headers: {
//     'Content-Type': 'application/json',
//   },
// })
// .then(res => {
//   Swal.fire({
//     position: 'center',
//     icon: 'success',
//     title: 'Food updated successfully',
//     showConfirmButton: true,
//   })
// })
// .catch(err => console.log(err))

}

    return (
           <div className=" px-10">
                    <Helmet><title> Update Food  </title></Helmet>

        <div className="py-10">
        <Title>Add a Product</Title>
        <p className="text-center text-md md:text-xl  md:max-w-7xl mx-auto mt-5"> You can add a new product by filling the form below.  </p>
        </div>
        <form  onSubmit={handleUpdateFood} className="max-w-7xl mx-auto  ">

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


          {/* image , Quantity */}
          <div className="md:flex mb-8 gap-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Product Image</span>
              </label>
              <label className="input-group">
                <input
                defaultValue={image}
                  type="text"
                  name="image"
                  placeholder="Product Image"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
  
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
          </div>


        {/* Category, Desc */}
          <div className="md:flex mb-8 gap-3  ">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Choose a Type</span>
              </label>
              <select defaultValue={category} name="category" type="text" className="select select-bordered w-full ">
                <option value="pizza">pizza</option>
                <option value="meat">meat</option>
                <option value="salad">salad</option>
                <option value="rice">rice</option>
                <option value="sushi">sushi</option>
                <option value="burger ">burger</option>
                <option value="indian ">indian</option>
                <option value="sandwich ">sandwich</option>
                <option value="soup ">soup</option>
              </select>
            </div>
  
            <div className="form-control md:w-1/2 ">
              <label className="label">
                <span className="label-text w-full text-center">Food Description</span>
              </label>
              <textarea
              defaultValue={description}
                placeholder="Food Description"
                className="input input-bordered w-full"
                name="description"
              ></textarea>
            </div>

            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Food Origin(country)</span>
              </label>
              <label className="input-group">
                <input
                defaultValue={country}
                  type="text"
                  name="country"
                  placeholder="Food Origin"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          
          </div>

  
          <input
            type="submit"
            value="Add product"
            className="btn bg-[#39DB4A] hover:bg-[#8ee997] btn-block text-white "
          />
        </form>
      </div>
    );
};

export default UpdateFood;