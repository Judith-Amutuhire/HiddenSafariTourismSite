import { useRef, useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
export default function CardCarousel({ children }) {
    const scrollRef = useRef(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(false);
  
    // Function to check scroll position and update arrow visibility
    const checkScrollPosition = () => {
      const scrollContainer = scrollRef.current;
      
      if (scrollContainer) {
        // Show left arrow if we're not at the start
        setShowLeftArrow(scrollContainer.scrollLeft > 0);
        
        // Show right arrow if there's more content to scroll to
        setShowRightArrow(
          scrollContainer.scrollLeft < 
          scrollContainer.scrollWidth - scrollContainer.clientWidth - 10
        );
      }
    };
  
    // Scroll handler functions
    const scrollLeft = () => {
      if (scrollRef.current) {
        // Scroll by the width of one card (264px = card width 256px + margin 8px)
        scrollRef.current.scrollBy({ left: -264, behavior: 'smooth' });
      }
    };
  
    const scrollRight = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 264, behavior: 'smooth' });
      }
    };
  
    // Initial check and setup scroll event listener
    useEffect(() => {
      checkScrollPosition();
      
      const scrollContainer = scrollRef.current;
      if (scrollContainer) {
        scrollContainer.addEventListener('scroll', checkScrollPosition);
        
        // Check after content loads (images might affect total width)
        window.addEventListener('load', checkScrollPosition);
        
        // Check on resize
        window.addEventListener('resize', checkScrollPosition);
      }
      
      return () => {
        if (scrollContainer) {
          scrollContainer.removeEventListener('scroll', checkScrollPosition);
        }
        window.removeEventListener('load', checkScrollPosition);
        window.removeEventListener('resize', checkScrollPosition);
      };
    }, []);
  
    return (
      <div className="relative">
        {/* Left scroll button */}
        {showLeftArrow && (
          <button 
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 bg-white rounded-full p-2 shadow-md border border-gray-200 hover:bg-gray-100 focus:outline-none" 
            onClick={scrollLeft}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
        )}
        
        {/* Cards container */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto space-x-4 p-2 scroll-smooth hide-scrollbar"
          onScroll={checkScrollPosition}
        >
          {children}
        </div>
        
        {/* Right scroll button */}
        {showRightArrow && (
          <button 
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 bg-white rounded-full p-2 shadow-md border border-gray-200 hover:bg-gray-100 focus:outline-none" 
            onClick={scrollRight}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        )}
      </div>
    );
  }