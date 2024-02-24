
const items=[
    {
        name:"Hamburguer meet",
        img: "/hamb-clasic.png"
    },
    {
        name:"Hamburguer chicken",
        img:"/hamb-chik.png"

    },{
        name:"Hamburguer double meet",
        img:"/hamb-xl.png"
    }
   
]


function Traditional(){
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
export default  Traditional