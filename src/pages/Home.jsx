import Banner from "../components/Banner";
import PopularCategory from "../components/PopularCategory/PopularCategory";
import TopSelling from "../components/Top Selling Section/TopSelling";

const Home = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Banner></Banner>
            <TopSelling></TopSelling>
            <PopularCategory></PopularCategory>
        </div>
    );
};

export default Home;