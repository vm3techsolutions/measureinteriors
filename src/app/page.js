import Image from "next/image";
import HomeBanner from "./home/HomeBanner";
import AboutUs from "./home/AboutUs";
import HomeServices from "./home/HomeServices";
import HomeGallery from "./home/HomeGallery";
import HomeContactUs from "./home/HomeContactUs";

export default function Home() {
  return (
  <div>

    <HomeBanner/>
    <AboutUs/>
    <HomeServices/>
    <HomeGallery/>
    <HomeContactUs/>  
  </div>
  );
}
