import {Link} from "react-router-dom"
import bannerImg from '../assets/banner2.jpg'
const Banner = () => {
    return (
        <div className='flex items-center h-[95vh] bg-[#F4F4F4] rounded-md p-10'>
            <div className='flex flex-col justify-center'>
                <h1 className='text-3xl md:text-4xl mb-10'> <span className='text-[#39DB4A] font-extrabold text-5xl '>Emran's Food:</span> <br /> Where Flavor Meets Tradition</h1>
                <p className='mb-10'>At Emran's Food, we're passionate about preserving the rich tapestry of culinary traditions while infusing them with a modern twist. Our restaurant is a place where the authenticity of flavors meets innovation. With a diverse menu that pays homage to the finest ingredients and recipes from around the world, we invite you to join us for a remarkable dining experience. Whether you're a connoisseur of classic dishes or an adventurer seeking new taste sensations, Emran's Food has something to delight every palate. Come savor the essence of tradition with a touch of contemporary flair at Emran's Food.</p>
                
                <div className="flex justify-center items-center gap-10">
                <Link to={'/allfoods'}><button className="btn  btn-success w-40 text-white">All Products</button></Link>
                <Link to={'/blog'}><button className="btn btn-outline btn-success w-40"> Blog </button></Link>
                </div>

            </div>
            <div>
                <img src={bannerImg} alt="Banner Image" />
            </div>
        </div>
    );
};

export default Banner;