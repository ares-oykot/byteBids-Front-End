import { Helmet } from "react-helmet";
import Banner from "../../Components/Shared/Banner/Banner";
import Categories from "../../Components/Shared/Categories/Categories";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>ByteBids | Home</title>
            </Helmet>
            <Banner></Banner>
            <Categories></Categories>
        </div>
    );
};  

export default Home;