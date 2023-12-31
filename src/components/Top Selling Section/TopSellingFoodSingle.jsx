import dammyImg from '../../assets/cicrle lemon.jpg'

const TopSellingFoodSingle = ({food}) => {

 const {id, name, image, category, price,total_order} = food 

    return (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="p-8 rounded-t-lg"
            src={image}
            alt="product image"
          />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
          </a>
          <div>
            category: <span className='p-2 bg-slate-50 mt-2 rounded-md'>{category}</span>
          </div>
          <div>
            Total Order: <span className='p-2 bg-slate-50 mt-2 rounded-md'>{total_order}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
             $ {price}
            </span>
            <a
              href="#"
              className="text-white bg-[#39DB4A] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Details
            </a>
          </div>
        </div>
      </div>
      
    );
};

export default TopSellingFoodSingle;