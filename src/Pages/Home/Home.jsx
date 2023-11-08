import { Helmet } from "react-helmet";
import Banner from "../../Components/Shared/Banner/Banner";
import Categories from "../../Components/Shared/Categories/Categories";
import Review from "../../Components/Shared/Review/Review";
import Footer from "../../Components/Shared/Footer/Footer";
import Partner from "../../Components/Shared/Partner/Partner";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>ByteBids | Home</title>
            </Helmet>
            <Banner></Banner>
            <Categories></Categories>
            <Review></Review>
            <Partner></Partner>
            <Footer></Footer>
        </div>
    );
};  

export default Home;