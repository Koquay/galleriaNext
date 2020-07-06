import { connect } from "react-redux";
import HomeJumbotron from "../components/helpers/home/HomeJumbotron";
import HomeCollection from "../components/helpers/home/HomeCollection";
import HomeTabpane from "../components/helpers/home/HomeTabpane";
import HomeSalesAds from "../components/helpers/home/HomeSalesAds";
import HomeBlogs from "../components/helpers/home/HomeBlogs";
import HomeServices from "../components/helpers/home/HomeServices";

const Home = ({ homeStore }) => {
  console.log("homeStore", homeStore);
  const {
    blogs,
    brands,
    collections,
    featuredItems,
    salesAds,
    services,
  } = homeStore;

  return (
    <>
      <HomeJumbotron />
      <div className="container mt-4" id="mid-container">
        <HomeCollection collections={collections} />
        <HomeTabpane featuredItems={featuredItems} />
        <HomeSalesAds salesAds={salesAds} />
        <HomeBlogs blogs={blogs} brands={brands} />
        <HomeServices services={services} />
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  homeStore: state.home,
});

export default connect(mapStateToProps)(Home);
