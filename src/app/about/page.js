import AboutBanner from "./AboutBanner";
import AboutContactUs from "./AboutContactUs";
import AboutInteriorFit from "./AboutInteriorFit";
import AboutMisionVision from "./AboutMisionVision";
import AboutOurStory from "./AboutOurStory";
import AboutUncoveringInterior from "./AboutUncoveringInterior";

export default function ContactPage() {
    return (
      <div>
        <AboutBanner/>
        <AboutOurStory/>
        <AboutMisionVision/>
        <AboutUncoveringInterior/>  
        <AboutInteriorFit/>

        <AboutContactUs/>      
      </div>
    );
  }
  