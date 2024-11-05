import Banner from "./Banner";
import BestSellers from "./BestSellers";
import Categories from "./Categories";
import Favorites from "./Favorites";
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
  </div>;
};
export default Home;