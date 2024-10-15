
import Student from './student/Student'

export default function HappStudent() {
  return (
   <div className='space-y-5'>
     <h5 className="uppercase text-md text-center text-[#ff4f01]">
            you can learn
          </h5>
          <h2 className="text-5xl capitalize text-center py-4 font-bold text-[#131d3b]">
            About our CIT technology
          </h2>
          <span className="flex justify-center py-2 gap-2">
            <div className="h-1 w-8 bg-[#ff4f01]"></div>
            <div className="h-1 w-8 bg-blue-100"></div>
          </span>
    <div className='grid xl:grid-cols-4 lg:grid-cols-3 gap-2 md:grid-cols-2 grid-cols-1  w-11/12 max-w-[1280px]  mx-auto '>
       <Student name="sakib al hasn" course="web developer" image="https://i.ibb.co.com/8cYhzfs/247708048-423456392531226-5295894135862364241-n.jpg" ></Student>
       <Student name="Roman khan" course="software developer" image="https://i.ibb.co.com/8cYhzfs/247708048-423456392531226-5295894135862364241-n.jpg" ></Student>
       <Student name="Tanjila aktar" course="Database developer" image="https://i.ibb.co.com/8cYhzfs/247708048-423456392531226-5295894135862364241-n.jpg" ></Student>
       <Student name="Saske uchiha" course="web" image="https://i.ibb.co.com/8cYhzfs/247708048-423456392531226-5295894135862364241-n.jpg" ></Student>
       
    </div>
   </div>
  )
}
