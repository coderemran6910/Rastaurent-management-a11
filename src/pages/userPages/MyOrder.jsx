import { useLoaderData } from "react-router-dom";
import Title from "../../utility/Title";

const MyOrder = () => {
  const myOrder = useLoaderData();

  return (
    <>
      <div className="overflow-x-auto">
        <Title>My {myOrder.length} Orders</Title>
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
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        myOrder?.map(order=>{
            const { _id, name, buyerName ,buyerEmail ,  image, } =order;
           console.log(order);
            {/* row 1 */}
     return(
        <>
         <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt="Avatar Tailwind CSS Component" />
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
      <td>{_id}</td>
      <th>
        <button className="btn btn-ghost btn-xs">Delete</button>
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

export default MyOrder;
