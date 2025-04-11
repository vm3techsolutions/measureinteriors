import FAQBanner from "./FAQBanner";
import FAQContactUs from "./FAQContactUs";
import FAQFindYour from "./FAQFindYour";
import GotQuetions from "./GotQuetions";

export default function faq(){
    return(
        <div>
            <FAQBanner/>
            <FAQFindYour/>
            <GotQuetions/>
            <FAQContactUs/>
        </div>
    )
}