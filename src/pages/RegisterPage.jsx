// import registerAniMation from "../assets/register.json";
// import Lottie from "lottie-react";

import { Link } from "react-router-dom";
import loginIcon from "../assets/loginIcon.png";
import Title from "../utility/Title";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { updateProfile } from "firebase/auth";
const RegisterPage = () => {
  const { createUser, googleSignIn } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const image = form.image.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, email, password, image);

    createUser(email, password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);

      // Update user profile with username and image URL
      updateProfile(loggedUser, {
        displayName: name,
        photoURL: image,
      })
        .then(() => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "User created successfully",
            showConfirmButton: true,
          });




            const user = {
              name,
              email,
              image,
              password
            }
             axios.post('http://localhost:5000/api/v1/users', user)
            .then(res=>{
              console.log(res.data);
              
            })
            .catch((err)=>{
              console.log(err);
            })
          









        })
        .catch((error) => {
          console.log(error);
          Swal.fire({
            position: "center",
            icon: "error",
            title: error.message,
            showConfirmButton: true,
          });
        });
    });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login successfully",
          showConfirmButton: true,
        });
      })
      .catch((error) => {
        console.log(error);

        Swal.fire({
          position: "center",
          icon: "error",
          title: error.message,
          showConfirmButton: true,
        });
      });
  };
  return (
    <div className="flex items-center justify-center min-h-screen  max-w-7xl mx-auto">
      {/* Form */}
      <div className="hero min-h-screen">
        <div className="hero-content border rounded-xl">
          <div className="card flex-shrink-0 w-full max-w-sm  shadow-2xl">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="User Name"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image URL</span>
                </label>
                <input
                  name="image"
                  type="text"
                  placeholder="Image URL"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-success bg-[#39DB4A] text-white">
                  Login
                </button>
              </div>
            </form>
            <label className="label">
              <p>
                Already have an account?{" "}
                <strong className="text-[#39DB4A]">
                  <Link to={"/login"}>Register</Link>{" "}
                </strong>{" "}
              </p>
            </label>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center">
        {/* <Lottie animationData={registerAniMation}></Lottie> */}
        <img src={loginIcon} alt="" />
        <Title> Register Now </Title>

        {/* Social Login */}
        <div className="flex items-center justify-center">
          <button
            onClick={handleGoogleSignIn}
            type="button"
            className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
          >
            <svg
              className="w-4 h-4 mr-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 19"
            >
              <path
                fillRule="evenodd"
                d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                clipRule="evenodd"
              />
            </svg>
            Sign in with Google
          </button>
          <button
            type="button"
            className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2"
          >
            <svg
              className="w-4 h-4 mr-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 8 19"
            >
              <path
                fillRule="evenodd"
                d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                clipRule="evenodd"
              />
            </svg>
            Sign in with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
