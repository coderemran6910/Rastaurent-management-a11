// import registerAniMation from "../assets/register.json";
// import Lottie from "lottie-react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import registerIcon from "../assets/login.png";
import Title from "../utility/Title";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
const LoginPage = () => {
  const location = useLocation()
  const goTo = useNavigate()
  const {signIn , googleSignIn} = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, email, password, image);

    // login
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login successfully",
          showConfirmButton: true,
        })
        goTo(location?.state || '/')
      })
      .catch((error) => {
        console.log(error);

        Swal.fire({
          position: "center",
          icon: "error",
          title: error.message,
          showConfirmButton: true,
        })
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
        })
        goTo('/')
      })
      .catch((error) => {
        console.log(error);

        Swal.fire({
          position: "center",
          icon: "error",
          title: error.message,
          showConfirmButton: true,
        })
      });
  };
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center max-w-7xl mx-auto px-10">
              <Helmet><title> Login  </title></Helmet>

      {/* Form */}
      <div className="hero min-h-fit md:min-h-screen">
        <div className="hero-content border rounded-xl">
          <div className="card flex-shrink-0 w-full max-w-sm  shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
             
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
                Do not have an account? {" "}
                <strong className="text-[#39DB4A]">
                  <Link to={"/register"}>Register</Link>{" "}
                </strong>{" "}
              </p>
            </label>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center">
        {/* <Lottie animationData={registerAniMation}></Lottie> */}
        <img src={registerIcon} alt="" />
        <Title> Login Now </Title>

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

export default LoginPage;
