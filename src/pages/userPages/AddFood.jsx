import Title from "../../utility/Title";

const AddFood = () => {
    return (
        <div className=" px-10">
        <div className="py-10">
        <Title>Add a Product</Title>
        <p className="text-center text-md md:text-xl  md:max-w-7xl mx-auto mt-5"> You can add a new product by filling the form below.  </p>
        </div>
        <form className="max-w-7xl mx-auto ">

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
              <select name="type" className="select select-bordered w-full ">
                <option value="Mobile">Mobile</option>
                <option value="Computer">Computer</option>
                <option value="Laptop">Laptop</option>
                <option value="Headphone">Headphone</option>
                <option value="Camra">Camra</option>
                <option value="Non Type ">Quick Sort</option>
              </select>
            </div>
  
            <div className="form-control md:w-1/2 ">
              <label className="label">
                <span className="label-text w-full text-center">Short Description</span>
              </label>
              <textarea
                placeholder="Short Description"
                className="input input-bordered w-full"
                name="shortDescription"
              ></textarea>
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