import ClientTestimonial from "./ClientTestimonial";
import FitOutProcess from "./FitOutProcess";
import HowWeTransform from "./HowWeTransform";
import Service2Banner from "./Service2Banner";
import Service2ContactUs from "./Service2ContactUs";

export default function Service2(){
    return(
        <div>
            <Service2Banner/>
            <FitOutProcess/>
            <HowWeTransform/>
            <ClientTestimonial/>
            <Service2ContactUs/>
        </div>
    )
}