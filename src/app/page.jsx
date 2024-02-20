"use client"
import 'animate.css';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import Hour from '@/app/hour/page'



const items = [
  {
    title: "Delivery",
    link: "/delivery"
  },
  {
    title: "Products",
    link: "/takeAway"

  },
  {
    title: "Specialties",
    link: "/takeAway"
  }
]



const imgs = [
  {
    img: "hamb-veg.png",
    title: "Veggie"

  },
  {
    img: "hamb-xl.png",
    title: "XL"

  }, {
    img: "hamb-bread-bl.png",
    title: "Bread black"

  }


]



function AnimatedItem({ index, children }) {
  const [ref, inView] = useInView({
    triggerOnce: true, // La animación solo se activa una vez
  });

  return (
    <div
      ref={ref}
      className={`py-10 px-9 rounded-md animate__animated ${inView ? 'animate__fadeInUp' : ''}`}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      {children}
    </div>
  );
}



function HomePage() {
  return (<>
    <div className="flex flex-wrap justify-center col-4 gap-x-4 pt-20">
      <h1></h1>
      {imgs.map((imagen, index) => (
        <AnimatedItem key={index} index={index}>
          <>
            <img
              src={imagen.img}
              alt={imagen.title}
              className="w-56 h-56 object-cover rounded-md "
            />
            <p className='text-center py-2'>{imagen.title}</p>
          </>
        </AnimatedItem>

      ))}
    </div>
    
    {items.map((item, index) => (
      <div className='flex flex-col col-1 text-center mb-6'>
        <div key={index} className={`animate__animated animate__slideInRight animate__delay-${2 + index}s`}>
          {item.link ? (
            <Link href={item.link} className='bg-lime-200 hover:bg-lime-600 py-2 px-4 rounded-md'>{item.title}</Link>
          ) : (
            <span className=''>{item.title}</span>
          )}
        </div>
      </div>
    ))}
     <div className='py-9'><Hour /></div>

  </>)
}
export default HomePage