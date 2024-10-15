import Banner from "../../components/banner/Banner";
import About_our_technology from "./components/About_our_technology/About_our_technology";
import Benefit from "./components/Benefit/Benefit";


export default function About_us() {
  return (
    <div className="space-y-16">
       <Banner title="About_Us"></Banner>
       <section className="mt-20 relative pb-[200px] "><span> <About_our_technology  ></About_our_technology></span><span className="absolute bottom-10"><Benefit></Benefit></span></section>
    </div>
  )
}
