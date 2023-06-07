import Categories from "./categories";
import Videos from "./videos";
import Navbar from "./navbar";
import Banners from "./banner";

const Home = () => {
    return (
        <div className="home">
            <Categories />
            <Videos />
        </div>
    );
}

export default Home;