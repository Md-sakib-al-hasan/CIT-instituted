import { useState, useEffect } from "react";


// Define the type for instructor items
interface InstructorItem {
  img: string;
  name: string;
  category: string;
}

// Define the type for the component props
interface SliderComponentProps {
  instructiorarray: InstructorItem[];
}

const SliderComponent: React.FC<SliderComponentProps> = ({ instructiorarray }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [visibleItems, setVisibleItems] = useState<number>(4); // Default to 4 items on XL

  // Function to handle next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      return (prevIndex + visibleItems) % instructiorarray.length;
    });
  };

  // Function to handle previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      return (prevIndex - visibleItems + instructiorarray.length) % instructiorarray.length;
    });
  };

  // Adjust number of visible items based on screen size
  useEffect(() => {
    const updateVisibleItems = () => {
      if (window.innerWidth >= 1280) {
        setVisibleItems(4); // 4 items for XL
      } else if (window.innerWidth >= 1024) {
        setVisibleItems(3); // 3 items for LG
      } else if (window.innerWidth >= 768) {
        setVisibleItems(2); // 2 items for MD
      } else {
        setVisibleItems(1); // 1 item for smaller screens
      }
    };

    // Set initial value
    updateVisibleItems();

    // Listen for window resize to adjust visible items
    window.addEventListener("resize", updateVisibleItems);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", updateVisibleItems);
  }, []);

  return (
    <div className="relative w-11/12 max-w-[1280px]  mx-auto">
      <ul className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {instructiorarray
          .slice(currentIndex, currentIndex + visibleItems) // Show only visible items
          .map((item, id) => (
            <li key={id} className=" relative group">
              <div className="space-y-5">
                <div className="relative">
                  <img src={item.img} className="h-[300px] object-cover" alt={item.name} />
             
                </div>
                <div className="space-y-1 flex flex-col justify-between ">
                  <span className="block text-lg font-semibold capitalize  ">{item.name}</span>
                  <span className="block line-clamp-2 ">{item.category}</span>
                </div>
                <button>
                    see more deatisl
                </button>
              </div>
            </li>
          ))}
      </ul>

      {/* Left arrow */}
      <button
        className="absolute top-[50%] xl:left-[-60px] lg:left-[-40px] md:left-[-60px] left-[-30px] transform -translate-y-[50%] px-5 py-3 bg-[#ff4f01] text-white rounded-full hover:bg-gray-600"
        onClick={prevSlide}
      >
        &#10094;
      </button>

      {/* Right arrow */}
      <button
        className="absolute top-[50%] xl:right-[-60px] lg:right-[-40px] md:right-[-60px] right-[-30px] transform -translate-y-[50%] px-5 py-3 bg-[#ff4f01] text-white rounded-full hover:bg-gray-600"
        onClick={nextSlide}
      >
        &#10095;
      </button>
    </div>
  );
};

export default SliderComponent;
