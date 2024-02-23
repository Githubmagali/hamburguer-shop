"use client"
import { useInView } from 'react-intersection-observer';
import Hour from '@/app/hour/page'
import Swiper from './swiper/page'
import Footer from '@/components/footer'




const imgs = [
  {
    id: 1,
    img: "hamb-veg.png",
    title: "Veggie",
    description: "description"

  },
  {
    id: 2,
    img: "hamb-xl.png",
    title: "XL",
    description: "description"

  }, {
    id: 3,
    img: "hamb-bread-bl.png",
    title: "Bread black",
    description: "description"

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
  
      <Swiper />
       <div className='py-9'><Hour /></div>

      <div className="flex justify-center bg-lime-100">
        <div className='lg:grid lg:grid-cols-3 lg:gap-x-4'>
          {imgs.map((imagen, index) => (
            <AnimatedItem key={index} index={index} >
              <>
                <div>
                  <img

                    src={imagen.img}
                    alt={imagen.title}
                    className="w-56 h-56 object-cover rounded-md shadow-2xl"
                  />
                  <p className='text-center py-2 text-xl'>{imagen.title}</p>
                  <p className='text-center py-2'>{imagen.description}</p>
                </div>

              </>
            </AnimatedItem>

          ))}
        </div>
      </div>


     


      <Footer />
  </>)
}
export default HomePage