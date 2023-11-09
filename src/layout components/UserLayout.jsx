import { AuthContext } from "../provider/AuthProvider";
import MainLayout from "./mainLayout";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import React from 'react'; // Add this import

const UserLayout = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    // ...
  };

  return (
    <div>
      <MainLayout>
        <div className="grid grid-cols-12 w-full max-w-7xl mx-auto gap-10 mt-5">
          {/* Sidebar */}
          <div className="col-span-12 md:col-span-3 bg-green-100 md:h-screen rounded-xl px-5">
            <div className="md:sticky top-0 md:block">
              {/* Content */}
              <div className="flex flex-col items-center">
                <div className="modal-box flex flex-col justify-center items-center text-center">
                  <div className="avatar cursor-pointer">
                    <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={user?.photoURL} alt="User Avatar" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mt-5">{user?.displayName}</h3>
                  <strong className="mt-5 text-sm">{user?.email}</strong>
                  <button onClick={handleLogOut} className="btn btn-error mt-5">
                    Log Out
                  </button>
                </div>
              </div>

              <div className="flex flex-col items-center md:px-5">
                <Link
                  className="btn btn-success w-full mt-5 text-white font-bold"
                  to={`/profile/myfoods/${user.email}`}
                >
                  Uploaded Foods
                </Link>
                <Link className="btn btn-success w-full mt-5 text-white font-bold" to={'/profile'}>
                  Add Food
                </Link>
                <Link
                  className="btn btn-success w-full mt-5 text-white font-bold"
                  to={`/profile/orders/${user?.email}`}
                >
                  My Order
                </Link>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-span-12 md:col-span-9 bg-green-100  rounded-xl md:px-5 py-5">
            <Outlet></Outlet>{" "}
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default UserLayout;
