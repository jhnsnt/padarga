import { useHorizontalScroll } from "@/hooks/useHorizontalScroll";
import Link from 'next/link';
import Image from "next/image";

export default function Feeds() {
    const { scrollRef, scrollLeft, scrollRight } = useHorizontalScroll();
    const slideData = [
        { 
            title: "St. Gallen", 
            country: "Switzerland",
            imagePath: "/images/feed_img1.jpg", 
            linkUrl: "/home",
            personDp:"/images/dp2.jpg",
            name:"Sue",
            caption:"Lost in the beauty of St. Gallen...",
        },
        { 
            title: "Norfolk", 
            country: "England",
            imagePath: "/images/feed_img2.jpg", 
            linkUrl: "/home",
            personDp:"/images/dp3.jpg",
            name:"Angela",
            caption:"Quiet beauty by the broads...",
        },
        { 
            title: "Interlaken", 
            country: "Switzerland",
            imagePath: "/images/feed_img3.jpg", 
            linkUrl: "/home", 
            personDp:"/images/dp2.jpg",
            name:"Sue",
            caption:"Lost in the beauty of Interlaken...",
        },
        // ... continue for all items
    ];

    return (
        <div className="relative group overflow-hidden">
            {/* Scroll Buttons */}
            <button
                onClick={scrollLeft}
                className="absolute w-[50px] h-[50px] cursor-pointer left-7 top-1/2 -translate-y-1/2 pr-1 z-10 bg-white/40 rounded-full shadow hidden group-hover:block"
            >
                ◀
            </button>

            <button
                onClick={scrollRight}
                className="absolute w-[50px] h-[50px] cursor-pointer right-7 top-1/2 -translate-y-1/2 pl-1 z-10 bg-white/40 rounded-full shadow hidden group-hover:block"
            >
                ▶
            </button>

            {/* Scroll Container */}
            <div
                ref={scrollRef}
                className="flex overflow-x-auto space-x-4 px-5 py-2 scrollbar-hide scroll-smooth snap-x snap-mandatory"
                style={{
                WebkitOverflowScrolling: 'touch',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                }}
            >
                {/* Items */}
                {slideData.map((slide, index) => (
                    // 2. Wrap the entire item content in the Link component
                    <Link 
                        key={slide.title} 
                        href={slide.linkUrl}
                        className={`
                            relative min-w-[320px] h-[500px] lg:min-w-[450px] lg:h-[550px] p-5
                            text-white rounded-[30px] flex items-center
                            bg-cover bg-center cursor-pointer`}
                        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${slide.imagePath})` }}
                    >
                        
                        {/* Child Div for content overlay */}
                        <div className="absolute bottom-5 text-left w-[92%]">
                            <div className="items-center w-full grid grid-cols-2">
                                <div className="">
                                    <h2 className="text-2xl lg:text-3xl font-semibold mb-0">
                                        {slide.title}
                                    </h2>
                                    <p className="text-sm lg:text-base font-normal opacity-75 ">
                                        {slide.country}
                                    </p>
                                </div>
                                <button className="relative right-1 h-[48px] w-[48px] gradient-bg rounded-full flex items-center justify-center ml-auto cursor-pointer">
                                    <Image src="/images/arrow.svg" alt="Arrow Right" width={14} height={12} />
                                </button>
                            </div>
                            <div className="flex justify-start mt-4 items-center space-x-4">
                                <div className={`bg-cover personDp w-[60px] h-[60px] rounded-full overflow-hidden`}
                                    style={{ backgroundImage: `url(${slide.personDp})` }}>
                                </div>
                                <div>
                                    <p className="text-base font-semibold">{slide.name}</p>
                                    <p className="text-base font-normal opacity-75">{slide.caption}</p>
                                </div>
                            </div>
                        </div>
                        
                    </Link>
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