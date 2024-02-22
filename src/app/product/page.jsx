function Product(){


    return(
        <div className="flex justify-center items-center h-screen">
            <div className="grid grid-cols-2 text-center gap-y-7">
                <div className="p-6">
                    <img
                     src="/hamb-bread-bl.png"
                     alt="bread"
                     className="w-56 h-56 object-cover rounded-md"
                     />


                </div>
                <div className="pg">
                    <p>Texto</p>

                </div>
            </div>
        </div>

    )
}

export default Product