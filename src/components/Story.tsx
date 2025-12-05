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
        <div className="flex items-center relative text-center my-2 group overflow-hidden">
            {/* Left Arrow — fades in/out */}
            <button
                onClick={scrollLeftFn}
                className="absolute w-[30px] h-[30px] cursor-pointer left-2 top-1/2 -translate-y-1/2 z-10 bg-white/40 rounded-full shadow hidden group-hover:block"
            >
                ←
            </button>
            <ul 
                ref={storyRef}
                className="story-list flex gap-0 lg:gap-1 overflow-x-auto no-scrollbar snap-x snap-mandatory py-2"
                style={{ WebkitOverflowScrolling: "touch" }}
            >
                {navItems.map((item) => (
                    <li
                        className="flex-shrink-0 lg:w-[100px] pl-2"
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
                className="absolute w-[30px] h-[30px] cursor-pointer right-2 top-1/2 -translate-y-1/2 pl-1 z-10 bg-white/40 rounded-full shadow hidden group-hover:block"
            >
                →
            </button>
        </div>
    )
}