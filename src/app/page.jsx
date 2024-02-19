"use client"
import 'animate.css';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';



const items = [
  {
    title: "Take away",
    link: "/takeAway"
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
    title: "bread black"

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
    <div className="flex flex-wrap justify-center col-4 gap-x-4 p-20">
      {imgs.map((imagen, index) => (
        <AnimatedItem key={index} index={index}>
          <>
            <img
              src={imagen.img}
              alt={imagen.title}
              className="w-56 h-56 object-cover rounded-md "
            />
          </>
        </AnimatedItem>

      ))}

    </div>


    {items.map((item, index) => (
      <div className='flex flex-col col-1 text-center gap-y-3'>
        <div key={index} className={`animate__animated animate__slideInRight animate__delay-${2 + index}s`}>
          {item.link ? (
            <Link href={item.link}>{item.title}</Link>
          ) : (
            <span>{item.title}</span>
          )}
        </div>

      </div>
    ))}
  </>)
}
export default HomePage