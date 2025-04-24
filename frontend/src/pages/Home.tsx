
 
import {useState} from "react";
import { motion, AnimatePresence } from "framer-motion";
import CategoryCards from '../components/home-page-components/CategoryCards';
import TrendingProducts from "../components/home-page-components/TrendingProducts";
import CustomerReviews from "../components/home-page-components/CustomerReview";
import FeaturedCollection from "../components/home-page-components/FeaturedCollection";
const Home = () => {
  {/*

  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const dispatch = useDispatch();





  const categories = [
    {
      id: 1,
      name: "clothing",
      subCategories: [
        {
          id: 1,
          name: "t-shirt"
        },

        {
          id: 3,
          name: "t-shirt"
        },

      ]
    },

    {
      id: 2,
      name: "men",
      subCategories: [
        {
          id: 1,
          name: "t-shirt"
        },

        {
          id: 3,
          name: "t-shirt"
        },

      ]
    },

    {
      id: 3,
      name: "woman",
      subCategories: [
        {
          id: 1,
          name: "t-shirt"
        },

        {
          id: 3,
          name: "t-shirt"
        },

      ]
    },
    {
      id: 4,
      name: "footwear",
      subCategories: [
        {
          id: 1,
          name: "shoes"
        },

        {
          id: 3,
          name: "slipers"
        },

      ]
    },
    {
      id: 5,
      name: "winter wear",
      subCategories: [
        {
          id: 1,
          name: "sweater"
        },

        {
          id: 3,
          name: "jackets"
        },

      ]
    },
    {
      id: 6,
      name: "activewear/sportswear",
      subCategories: [
        {
          id: 1,
          name: "shoes"
        },

        {
          id: 3,
          name: "jersey"
        },

      ]
    },

    {
      id: 7,
      name: "accessories",
      subCategories: [

        { id: 1, name: "belts" },
        { id: 2, name: "ear ring" },
        { id: 3, name: "gloves" },
        { id: 4, name: "scarves" },
        { id: 5, name: "chain" },
        { id: 6, name: "necklace" },

      ]
    },



  ];






  useEffect(() => {

    console.log(selectedCategory, 'se')

    dispatch(filterByCategory({ prop: "selectedCategory", value: selectedCategory }));


  }, [selectedCategory]);





  const [toggleSideBar]: any = useOutletContext()


  console.log(toggleSideBar, 'toggle')

*/}








  const slides = [
    {
      title: "Women Summer Trend Style",
      subtitle: "Introducing the Ambuz women’s autumn / summer Fashion",
      image:
        "https://nmquritpryrthvxcvkxi.supabase.co/storage/v1/object/sign/clothes/women.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjbG90aGVzL3dvbWVuLnBuZyIsImlhdCI6MTc0Mzc2NTI1MSwiZXhwIjoxNzc1MzAxMjUxfQ.frrCVfGi2TRwAiWPW70Far-Bfgy6dKAegR3uzsgx0rk",
    },
    {
      title: "Fresh Looks for Every Season",
      subtitle: "Discover styles that match your vibe and your wardrobe.",
      image:
        "https://nmquritpryrthvxcvkxi.supabase.co/storage/v1/object/sign/clothes/shopping.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjbG90aGVzL3Nob3BwaW5nLnBuZyIsImlhdCI6MTc0Mzc2NTk0NSwiZXhwIjoxNzc1MzAxOTQ1fQ._EnPMFECfBjd65hux_MIjwoSrQOcr2ejXwBONU0vUxk",
    },
    {
      title: "Elegant & Cool",
      subtitle: "Chic styles, perfect for sunny days and warm nights.",
      image:
        "https://nmquritpryrthvxcvkxi.supabase.co/storage/v1/object/sign/clothes/sale.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjbG90aGVzL3NhbGUucG5nIiwiaWF0IjoxNzQzNzY1ODMzLCJleHAiOjE3NzUzMDE4MzN9.y_wwG-Iw6cVutq7kOEeYJ7eEOkgQBvN-6IqWq7fuqa4",
    },
  ];

  // Animation variants for images
  const imageVariants = {
    initial: { opacity: 0, scale: 2.0 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.3, ease: "easeIn" } },
  };

  // Animation variants for descriptions
  const textVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0, transition: { duration: 1.2, ease: "easeOut" } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.9, ease: "easeIn" } },
  };


  const [current, setCurrent] = useState<number>(0);

  const nextSlide = () => setCurrent((prev:any) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev:any) => (prev - 1 + slides.length) % slides.length);




  const features = [
    {
      title: "Worldwide Shipping",
      subtitle: "World Wide Free Shipping.",
      icon: "🌍",
    },
    {
      title: "Secured Payment",
      subtitle: "Safe & Secured Payments",
      icon: "💳",
    },
    {
      title: "30-Days Free Returns",
      subtitle: "Within 30 Days for an Exchange",
      icon: "🔄",
    },
    {
      title: "Surprise Gift",
      subtitle: "Free gift cards & vouchers",
      icon: "🎁",
    },
  ];

  const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: any) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.5,
        duration: 0.9,
        ease: "easeOut",
      },
    }),
  };





  return (

    <>

      <div className="relative h-[500px] bg-white overflow-hidden flex items-center justify-center xsm:min-w-[24rem] xsm:max-w-auto border border-black">
        {/* Slides */}
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="min-w-full h-full flex items-center px-4 sm:px-6 md:px-10"
            >
              <div className="max-w-6xl w-full flex flex-col md:grid md:grid-cols-2 items-center gap-6 text-center md:text-left">
                {/* Image with Animation */}
                <div className="flex justify-center">
                  <AnimatePresence mode="wait">
                    {index === current && (
                      <motion.img
                        key={slide.image}
                        src={slide.image}
                        alt={slide.title}
                        className="w-[90%] max-h-[200px] sm:max-h-[250px] md:max-h-[350px] object-contain"
                        variants={imageVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                      />
                    )}
                  </AnimatePresence>
                </div>

                {/* Description with Animation */}
                <motion.div
                  variants={textVariants}
                  initial="initial"
                  animate={index === current ? "animate" : "initial"}
                  exit="exit"
                >
                  <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                    {slide.title.split(" ").slice(0, 2).join(" ")} <br />
                    <span className="block">{slide.title.split(" ").slice(2).join(" ")}</span>
                  </h1>
                  <p className="text-sm sm:text-base text-gray-600 mt-3">{slide.subtitle}</p>
                  <button className="mt-5 bg-black text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full hover:bg-gray-800 transition">
                    Shop Collection →
                  </button>
                </motion.div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 bg-black text-white shadow p-2 sm:p-3 rounded-full hover:bg-gray-800 transition"
        >
          &lt;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 bg-black text-white shadow p-2 sm:p-3 rounded-full hover:bg-gray-800 transition"
        >
          &gt;
        </button>

        {/* Dots */}
        <div className="absolute bottom-5 flex gap-2 justify-center w-full">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${idx === current ? "bg-black scale-110" : "bg-gray-300"
                }`}
            ></button>
          ))}
        </div>
      </div>

      <div className="bg-white py-10 px-4 md:px-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center border-t border-gray-200 xsm:min-w-[24rem] xsm:max-w-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center space-y-3"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariant}
          >
            <motion.div className="text-4xl">{feature.icon}</motion.div>
            <h3 className="font-semibold text-lg">{feature.title}</h3>
            <p className="text-gray-500 text-sm">{feature.subtitle}</p>
          </motion.div>
        
        ))}

      </div>

      <CategoryCards />

      <TrendingProducts />

      <CustomerReviews />

      <FeaturedCollection />

    </>

  )
}

export default Home