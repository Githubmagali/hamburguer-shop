
const items=[
    {
        name:"Hamburguer with bread black",
        img: "/bread-black-shop.png"
    },
    {
        name:"Hamburguer spinach",
        img:"/hamb-spinach.png"

    },{
        name:"Hamburguer with wholemeal",
        img:"/hamb-wholemeal-bread.png"
    }
   
]


function Special(){
    return(
        <div className="flex items-center justify-center p-28">

        <div className="lg:grid lg:grid-cols-2 items-center justify-center gap-x-3">
            {items.map((item, index)=>(<>
                 <div key={index} className="lg:col-span-1 py-4">
                 <img src={item.img}
                  className="w-64 rounded-md"  />
             </div>
             <div className="lg:col-span-1">
                 <div className="text-xl">{item.name}</div>
             </div>

             </> ))}
        </div>
        

</div>

  
    )
}
export default  Special