import Card from "../card/Card"


export default function Courscards() {
    const cards = [{price:55,title:"Complete Beginner to the Web Design",discription:"  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, corrupti.",user:78,message:2,image:"https://i.ibb.co.com/5kfsrJB/health2.jpg"}
        ,{price:56,title:"Complete Beginner to the Web Design",discription:"  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, corrupti Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, corrupti.",user:78,message:2,image:"https://i.ibb.co.com/5kfsrJB/health2.jpg"} 
        ,{price:77,title:"Complete Beginner to the Web Design",discription:"  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, corrupti.",user:78,message:2,image:"https://i.ibb.co.com/5kfsrJB/health2.jpg"}
        
        ,{price:88,title:"Complete Beginner to the Web Design",discription:"  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, corrupti.",user:78,message:2,image:"https://i.ibb.co.com/5kfsrJB/health2.jpg"}
    ]
    
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 w-11/12 max-w-[1280px]  mx-auto mt-10 gap-2 ">
       {
        cards.map((card,id) => <Card card={card} key={id}></Card> )
       }
    </div>
  )
}
