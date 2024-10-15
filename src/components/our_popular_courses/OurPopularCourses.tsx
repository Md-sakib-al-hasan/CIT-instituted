


import SliderComponent from "./SliderComponent/SliderComponent"

import childrenliberay from "../../assets/components/ourpupolercourses/childrenreadliberay.jpg"
import woman from "../../assets/components/ourpupolercourses/owman.jpg"
import libearyone from "../../assets/components/ourpupolercourses/libearyone.jpg"
import libearytwo from "../../assets/components/ourpupolercourses/libearytwo.jpg"
import libearythree from "../../assets/components/ourpupolercourses/libearythree.jpg"


export default function  OurPopularCourses() {


  const courseinfo = [
    {img:childrenliberay,name:"computer science and engineering",category:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima ipsa in sequi aut qui possimus excepturi vel amet iste quae?"},
    {img:libearytwo,name:"electrical engineering",category:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima ipsa in sequi aut qui possimus excepturi vel amet iste quae?"},
    {img:woman,name:"textile engineering",category:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima ipsa in sequi aut qui possimus excepturi vel amet iste quae?"},
    {img:libearythree,name:"civil engineering",category:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima ipsa in sequi aut qui possimus excepturi vel amet iste quae?"},
    {img:libearyone,name:"architectural engineering",category:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima ipsa in sequi aut qui possimus excepturi vel amet iste quae?biology professor"},
  ]
  return (
    <div className="flex flex-col items-center gap-4 p-4">
       <h4 className="text-lg font-semibold text-[#ff4f01] uppercase">YOU CAN LEARN IT</h4>
       <h3 className="lg:text-6xl md:text-5xl text-3xl text-[#131d3b] font-bold capitalize ">Popular Courses Categories</h3>
       <span className="flex  py-2 gap-2">
            <div className="h-1 w-8 bg-[#ff4f01]"></div>
            <div className="h-1 w-8 bg-blue-100"></div>
          </span>

  
        <div>
            <SliderComponent instructiorarray={courseinfo} ></SliderComponent>
        </div>

        <span className="">Don’t hesitate, contact us for better help and services. <span className="text-md font-bold underline decoration-1   ">View more Instructor.</span></span>
    </div>
  )
}
