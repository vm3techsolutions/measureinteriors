import {
    FaInstagram,
    FaLinkedinIn,
    FaWhatsapp,
    FaYoutube,
    FaFacebookF,
    FaTwitter
  } from "react-icons/fa";
  import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";
  import { BsWhatsapp } from "react-icons/bs";
  
  export default function Footer() {
    return (
<footer className="bg-[#E3D5CA] text-gray-900 sm:mt-[-30vh] sm:pt-40 pt-10     z-0">
<div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10 px-6 sm:px-16 pb-10">
          {/* Measure Column */}
          <div>
            <h2 className="text-2xl font-semibold  text-[#f4e8e8] mb-2">Measure</h2>
            <p className="">
              Measure specializes in transforming workspaces with comprehensive
              office interior design and turnkey fit-out solutions in Dubai.
            </p>
          </div>
  
          {/* Quick Links */}
          <div>
            <h2 className="text-2xl font-semibold  text-[#f4e8e8] mb-2">Quick Links</h2>
            <ul className="space-y-1 ml-6">
            <li><a href="/" className="">HOME</a></li>
    <li><a href="/about" className="">ABOUT</a></li>
    <li><a href="/services" className="">SERVICES</a></li>
    <li><a href="/products" className="">OUR PRODUCTS</a></li>
    <li><a href="/gallery" className="">GALLERY</a></li>
    <li><a href="/blog" className="">BLOG</a></li>
        <li><a href="/contact" className="">CONTACT</a></li>
        <li><a href="/privacy" className="">Privacy Policy</a></li>
            </ul>
          </div>
  
          {/* Contact Us */}
<div>
  <h2 className="text-2xl font-semibold text-[#f4e8e8] mb-2">Contact Us</h2>
  <ul className="space-y-5">
    <li className="flex items-center gap-2 ">
      <MdLocationOn className="text-[#f4e8e8] text-xl"/> Dubai, UAE
    </li>
    <li className="flex items-center gap-2 ">
      <BsWhatsapp  className="text-[#f4e8e8] text-xl"/>
      <a href="tel:+971502659845" className="">
        Mobile No +971 50 265 9845
      </a>
    </li>
    <li className="flex items-center gap-2 text-[#f4e8e8]">
      <MdPhone  className="text-[#f4e8e8] text-xl"/>
      <a href="tel:+97143294720" className="text-black">
        Landline No +971 4 329 4720
      </a>
    </li>
    <li className="flex items-center gap-2 text-[#f4e8e8]">
      <MdEmail />
      <a href="mailto:info@measureinteriors.com" className="text-black">
        info@measureinteriors.com
      </a>
    </li>
  </ul>
</div>

  
          {/* Follow Us */}
          <div>
            <h2 className="text-2xl font-semibold  text-[#f4e8e8] mb-2">Follow Us</h2>
            <div className="grid grid-cols-3 gap-3 mt-4">
              <a href="https://www.instagram.com/measureinteriors/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer" className="border border-[#f4e8e8] py-3  flex items-center justify-center hover:bg-gray-100">
                <FaInstagram/>
              </a>
              <a href="https://www.linkedin.com/company/measure-interiors/" target="_blank" rel="noopener noreferrer" className="border border-[#f4e8e8] py-3  flex items-center justify-center hover:bg-gray-100">
                <FaLinkedinIn/>
              </a>
              <a href="https://wa.me/971502659845" target="_blank" rel="noopener noreferrer" className="border border-[#f4e8e8] py-3  flex items-center justify-center hover:bg-gray-100">
                <FaWhatsapp/>
              </a>
              <a href="https://www.youtube.com/@measureinteriors" target="_blank" rel="noopener noreferrer" className="border border-[#f4e8e8] py-3  flex items-center justify-center hover:bg-gray-100">
                <FaYoutube/>
              </a>
              <a href="https://www.facebook.com/measureinteriorsdubai" target="_blank" rel="noopener noreferrer" className="border border-[#f4e8e8] py-3  flex items-center justify-center hover:bg-gray-100">
                <FaFacebookF />
              </a>
              <a href="https://x.com/i/flow/login?redirect_after_login=%2FInteriorMeasure" target="_blank" rel="noopener noreferrer" className="border border-[#f4e8e8] py-3  flex items-center justify-center hover:bg-gray-100">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        <div className="bg-[#D6CCC2] text-gray-900 w-full py-8 text-center">

          <p className="font-normal"> © 2025 All Rights Reserved By <a href="https://measureinteriors.com/">  Measure Interiors </a></p>
        </div>
      </footer>
    );
  }
  