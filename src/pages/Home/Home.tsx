import About_our_technology from "../About_us/components/About_our_technology/About_our_technology";
import Benefit from "../About_us/components/Benefit/Benefit";
import BannerSilder from "./components/Banner/Banner";
import OurInstructor from "./components/OurInstructor/OurInstructor";
import SeeDetail from "./components/SeeDetails/SeeDetail";
import Skilledteacherandsupport from "./components/Skilledteacherandsupport/skilledteacherandsupport";
import Why_CIT from "./components/Why_CIT/Why_CIT";



export default function Home() {
  return (
    <div className="space-y-20">
    <section> <BannerSilder></BannerSilder></section>
    <section className=" relative sm:pb-[200px] "><span> <About_our_technology  ></About_our_technology></span><span className="sm:absolute bottom-10 w-full"><Benefit></Benefit></span></section>
     <section><Why_CIT></Why_CIT></section>
     <section><Skilledteacherandsupport></Skilledteacherandsupport></section>
     <section><OurInstructor></OurInstructor></section>
     <section><SeeDetail></SeeDetail></section>
    </div>
  )
}
