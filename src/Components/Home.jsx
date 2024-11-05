import Banner from "./Banner";
import BestSellers from "./BestSellers";
import Categories from "./Categories";
import Favorites from "./Favorites";
import Instagram from "./Instagram";
import SubscriptionForm from "./SubscriptionForm";
import Summer from "./Summer";
import Testimonials from "./Testimonials";

const Home = () => {
  return <div>
    <Banner></Banner>
    <Favorites></Favorites>
    <Categories></Categories>
    <Summer></Summer>
    <BestSellers></BestSellers>
    <Testimonials></Testimonials>
    <SubscriptionForm></SubscriptionForm>
    <Instagram></Instagram>
  </div>;
};
export default Home;