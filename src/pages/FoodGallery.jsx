import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Title from "../utility/Title";

const FoodGallery = () => {

   const  images = [
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600",
        // " https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=600",
        " https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=600",
        // "https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=300",
        "https://images.pexels.com/photos/1482803/pexels-photo-1482803.jpeg?auto=compress&cs=tinysrgb&w=300",
        "https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=300",
        // "https://images.pexels.com/photos/1630588/pexels-photo-1630588.jpeg?auto=compress&cs=tinysrgb&w=300",
        "https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=300"



    ]


  return (
  <>
      <Carousel>
        {
            images.map((img, indx)=>{
                return(
                    <div key={indx} className="h-[60vh]">
                    <img src={img} className="object-cover" />
                    <p className="legend">Legend 1</p>
                  </div>
                )
            })
        }
     
      
    </Carousel>

    <Title> Our food gallery </Title>


    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
  <div className="grid gap-4">
  {images.map((image, index) => {
            return (
              <div key={index}>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={image}
                  alt=""
                />
              </div>
            );
          })}
 
  </div>
  <div className="grid gap-4">
  {images.map((image, index) => {
            return (
              <div key={index}>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={image}
                  alt=""
                />
              </div>
            );
          })}
  </div>
  <div className="grid gap-4">
  {images.map((image, index) => {
            return (
              <div key={index}>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={image}
                  alt=""
                />
              </div>
            );
          })}
  </div>
  <div className="grid gap-4">
  {images.map((image, index) => {
            return (
              <div key={index}>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={image}
                  alt=""
                />
              </div>
            );
          })}
  </div>
</div>








  </>
  );
};

export default FoodGallery;
