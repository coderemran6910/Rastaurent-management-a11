import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const UserProfileModal = () => {
  const { user , logOut } = useContext(AuthContext);

  const handleLogOut=()=>{
    logOut()
    .then(()=>{
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Logged Out Successfully',
            showConfirmButton: false,
            timer: 1500,
        })
    })
    .catch((err)=>{
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: err.message,  
      })
    })
  }

  return (
    <div className="relative">
    {/* Open the modal using document.getElementById('ID').showModal() method */}
    <button
      className=""
      onClick={() => document.getElementById("my_modal_1").showModal()}
    >
      <div className="avatar cursor-pointer">
        <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ">
          <img src={user?.photoURL} alt="User Avatar" />
        </div>
        
      </div>
    </button>
  
    <dialog
      id="my_modal_1"
      style={{ position: 'fixed', top: '0', right: '0' }}
      className="modal"
    >
      <div className="modal-box flex flex-col justify-center items-center">
        <div className="avatar cursor-pointer">
          <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ">
            <img src={user?.photoURL} alt="User Avatar" />
          </div>
        </div>
        <h3 className="text-lg font-bold mt-5">{user?.displayName}</h3>
        <strong className="mt-5">{user?.email}</strong>
        <Link to={"/profile"}><button className="btn btn-success mt-5">View Profile</button></Link>
        <button onClick={handleLogOut} className="btn btn-error mt-5 ">Log Out</button>
      </div>

      
  
      <form method="dialog" className="modal-backdrop">
        <button>Close</button>
      </form>
    </dialog>
  </div>
  
  
  );
};

export default UserProfileModal;
