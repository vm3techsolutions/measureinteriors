import ServiceCeoMeasure from "./ServiceCeoMeasure";
import ServiceClientTestimonials from "./ServiceClientTestimonials";
import ServiceContactUs from "./ServiceContactUs";
import ServiceFitOutProcess from "./ServiceFitOutProcess";
import ServiceHowWe from "./ServiceHowWe";
import ServiceOurService from "./ServiceOurService";
import ServiceOurValue from "./ServiceOurValue";
import ServiceTurnkeyOffice from "./ServiceTurnkeyOffice";

export default function ContactPage() {
    return (
      <div>
           <ServiceTurnkeyOffice/>
           <ServiceOurService/>
           <ServiceOurValue/>
           <ServiceCeoMeasure/>
           <ServiceFitOutProcess/>
           <ServiceHowWe/>  
           <ServiceClientTestimonials/>
           <ServiceContactUs/>
      </div>
    );
  }
  