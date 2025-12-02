import { useHorizontalScroll } from "@/hooks/useHorizontalScroll";
export default function Feeds() {
    const { scrollRef, scrollLeft, scrollRight } = useHorizontalScroll();

    return (
        <div className="relative w-full">
            {/* Scroll Buttons */}
            <button
                onClick={scrollLeft}
                className="absolute w-[50px] h-[50px] cursor-pointer left-2 top-1/2 -translate-y-1/2 pr-1 z-10 bg-white/20 rounded-full shadow hidden lg:block"
            >
                ◀
            </button>

            <button
                onClick={scrollRight}
                className="absolute w-[50px] h-[50px] cursor-pointer right-2 top-1/2 -translate-y-1/2 pl-1 z-10 bg-white/20 rounded-full shadow hidden lg:block"
            >
                ▶
            </button>

            {/* Scroll Container */}
            <div
                ref={scrollRef}
                className="flex overflow-x-auto space-x-4 px-4 py-2 scrollbar-hide scroll-smooth snap-x snap-mandatory"
                style={{
                WebkitOverflowScrolling: 'touch',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                }}
            >
                {/* Items */}
                {[1, 2, 3, 4, 5, 6].map((n) => (
                <div
                    key={n}
                    className="min-w-[320px] h-[500px] lg:min-w-[450px] lg:h-[550px] bg-blue-500 text-white rounded-[30px] flex items-center justify-center snap-start"
                >
                    Slide {n}
                </div>
                ))}
            </div>

            {/* Hide scrollbar via tailwind-scrollbar-hide or global CSS */}
            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    )
}