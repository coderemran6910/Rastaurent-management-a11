import { Link, useLoaderData } from "react-router-dom";
import Title from "../../utility/Title";
import AvaterDefault from "../../utility/AvaterDefault";
import { Helmet } from "react-helmet-async";

const MyFoods = () => {
    const myFood = useLoaderData()
    console.log(myFood);
    return (
        <>
        <div className="overflow-x-auto">
        <Helmet><title> My Foods </title></Helmet>

          <Title>My {myFood?.length} added foods</Title>
    <table className="table">
      {/* head */}
      <thead>
        <tr>
          <th>
            <label>
              <input type="checkbox" className="checkbox" />
            </label>
          </th>
          <th>Products</th>
          <th> Name</th>
          <th> Product id </th>
          <th> Price </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          myFood?.map(order=>{
              const { _id, name, buyerName ,buyerEmail ,  image, price,  } =order;
             console.log(order);
              {/* row 1 */}
       return(
          <>
           <tr key={_id}>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={image ? image : <AvaterDefault></AvaterDefault>} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-50">{buyerEmail}</div>
            </div>
          </div>
        </td>
        <td>
        {buyerName}
        </td>
        <td>
        {_id}
        </td>
        <td className="font-bold text-xl">${price}</td>
        <th>
          <Link to={`/profile/updatefood/${_id}`} className="btn btn-success btn-sm">Update</Link>
        </th>
      </tr>
          </>
       )
          })
        }
  
      </tbody> 
    </table>
  </div>
      </>
    );
};

export default MyFoods;