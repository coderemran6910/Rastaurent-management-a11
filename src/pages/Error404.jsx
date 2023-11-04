import error404 from '../assets/404.json'
import Lottie from "lottie-react";
import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
        <div className='flex flex-col justify-center items-center w-70% mx-auto'>
            <Lottie animationData={error404} loop></Lottie>
            <Link className='btn btn-success text-white font-bold ' to={'/'} > Back to home </Link>
        </div>
    );
};

export default Error404;