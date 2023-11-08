import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";
import PopularCategory from "../components/PopularCategory/PopularCategory";
import TopSelling from "../components/Top Selling Section/TopSelling";
import Service from "../components/service/service";

const Home = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Helmet><title> Home Page </title></Helmet>
            <Banner></Banner>
            <TopSelling></TopSelling>
            <PopularCategory></PopularCategory>
            <Service></Service>
        </div>
    );
};

export default Home;