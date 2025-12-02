import { useRef, useState, useEffect } from "react";
import { styleClasses } from "@/config/styleArrays";
import { navItems } from "@/config/names";

export default function Story() {
    const storyRef = useRef<HTMLUListElement>(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);

    const scrollLeftFn = () => {
        if (!storyRef.current) return;
        storyRef.current.scrollBy({ left: -200, behavior: "smooth" });
    };

    const scrollRightFn = () => {
        if (!storyRef.current) return;
        storyRef.current.scrollBy({ left: 200, behavior: "smooth" });
        setShowLeftArrow(true);
    };

    // Check if we are back to the start to hide left arrow
    const checkScrollPosition = () => {
        if (!storyRef.current) return;
        if (storyRef.current.scrollLeft <= 0) {
        setShowLeftArrow(false);
        }
    };

    useEffect(() => {
        const el = storyRef.current;
        if (el) {
        el.addEventListener("scroll", checkScrollPosition);
        }
        return () => {
        if (el) el.removeEventListener("scroll", checkScrollPosition);
        };
    }, []);

    return (
        <div className="flex items-center relative text-center px-4 lg:px-5 my-4">
            {/* Left Arrow — fades in/out */}
            <button
                onClick={scrollLeftFn}
                className={`hidden lg:flex items-center justify-center absolute left-0 z-10 w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 shadow transition-opacity duration-300 ${
                showLeftArrow ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
            >
                ←
            </button>
            <ul 
                ref={storyRef}
                className="story-list flex gap-0 lg:gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory py-2 px-8"
                style={{ WebkitOverflowScrolling: "touch" }}
            >
                {navItems.map((item) => (
                    <li
                        className="flex-shrink-0 lg:w-20 snap-start pl-2"
                        key={item.name}
                    >
                        <div
                        className={`${styleClasses[0]} ${styleClasses[2]} ${item.noStory} ${item.closeFriend} m-auto flex items-center`}
                        >
                        <div
                            className={`block m-auto ${item.variant} ${styleClasses[4]}`}
                        ></div>
                        </div>
                        <p className="text-center mt-1 text-xs lg:text-sm">{item.name}</p>
                    </li>
                ))}
                
            </ul>
            {/* Right Arrow — always visible on desktop */}
            <button
                onClick={scrollRightFn}
                className="hidden lg:flex items-center justify-center absolute right-0 z-10 w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 shadow"
            >
                →
            </button>
        </div>
    )
}