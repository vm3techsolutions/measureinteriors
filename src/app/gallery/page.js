import GalleryBanner from "./GalleryBanner";
import GalleryContactUs from "./GalleryContactUs";
import GalleryDiscover from "./GalleryDiscover";
import GalleryDiscoverCarousal from "./GalleryDiscoverCarousal";
import GalleryExperience from "./GalleryExperience";
import GalleryProjectGallery from "./GalleryProjectGallery";

export default function ContactPage() {
    return (
      <div>
       <GalleryBanner/> 
       <GalleryDiscover/> 
       <GalleryProjectGallery/>
       <GalleryExperience/>
       <GalleryDiscoverCarousal/>

       <GalleryContactUs/>  
      </div>
    );
  }