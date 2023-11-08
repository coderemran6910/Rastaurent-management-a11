import Swal from "sweetalert2";
import Title from "../../utility/Title";
import axios from "axios";
import { AuthContext } from "../../provider/AuthProvider";
import { useContext } from "react";
const AddFood = () => {
    const {user} = useContext(AuthContext)

    const handleAddFood = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = parseFloat(form.price.value);
        const image = form.image.value;
        const quantity = parseInt(form.quantity.value, 10);
        const category = form.category.value;
        const description = form.description.value;
        const country = form.country.value;
    
        if (isNaN(price) || isNaN(quantity)) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Input',
                text: 'Price and Quantity must be valid numbers.',
            });
        } else {
            const foodData = {
                name,
                price,
                image,
                quantity,
                category,
                description,
                country,
                auth: user.displayName,
                authEmail: user.email
            };
    
            axios.post("https://restaurent-server.vercel.app/api/v1/foods", foodData)
                .then((res) => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Food added successfully',
                            showConfirmButton: false,
                            timer: 1500,
                        });
                        form.reset(); // Clear the form after success
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: 'Failed to add the food.',
                        });
                    }
                })
                .catch((error) => {
                    console.log(error)
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'An error occurred while adding the food. Please try again later.',
                    });
                });
        }
    };
    

    return (
        <div className=" px-10">
        <div className="py-10">
        <Title>Add a Product</Title>
        <p className="text-center text-md md:text-xl  md:max-w-7xl mx-auto mt-5"> You can add a new product by filling the form below.  </p>
        </div>
        <form onSubmit={handleAddFood} className="max-w-7xl mx-auto  ">

            {/* Name and Price */}
          <div className="md:flex mb-8 gap-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <label className="input-group">
                <input
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
              <select name="category" type="text" className="select select-bordered w-full ">
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

export default AddFood;