"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import Image from "next/image";

interface PhoneCarouselProps {
    images: string[];
    autoPlayInterval?: number;
}

export default function PhoneCarousel({
    images,
    autoPlayInterval = 4000
}: PhoneCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const paginate = useCallback((newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex((prevIndex) => {
            let nextIndex = prevIndex + newDirection;
            if (nextIndex < 0) nextIndex = images.length - 1;
            if (nextIndex >= images.length) nextIndex = 0;
            return nextIndex;
        });
    }, [images.length]);

    // Auto-play
    useEffect(() => {
        const timer = setInterval(() => {
            paginate(1);
        }, autoPlayInterval);

        return () => clearInterval(timer);
    }, [autoPlayInterval, paginate]);

    const handleDragEnd = (_: unknown, info: PanInfo) => {
        const swipeThreshold = 50;
        if (info.offset.x > swipeThreshold) {
            paginate(-1);
        } else if (info.offset.x < -swipeThreshold) {
            paginate(1);
        }
    };

    const goToSlide = (index: number) => {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    };

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 300 : -300,
            zIndex: 1,
        }),
        center: {
            x: 0,
            zIndex: 2,
        },
        exit: (direction: number) => ({
            x: direction > 0 ? -300 : 300,
            zIndex: 0,
        }),
    };

    return (
        <div className="flex flex-col items-center gap-6">
            {/* iPhone 17 Pro Max Frame - Cosmic Orange */}
            <div className="relative">
                {/* Outer titanium frame - Cosmic Orange */}
                <div
                    className="relative w-[260px] h-[530px] sm:w-[300px] sm:h-[612px] rounded-[50px] sm:rounded-[55px] p-[2px]"
                    style={{
                        background: 'linear-gradient(145deg, #e85d04 0%, #9d4506 50%, #bc5d15 100%)',
                        boxShadow: `
                            0 25px 60px -12px rgba(232, 93, 4, 0.4),
                            0 0 0 1px rgba(255, 255, 255, 0.15),
                            inset 0 1px 0 rgba(255, 200, 150, 0.3),
                            inset 0 -1px 0 rgba(0, 0, 0, 0.3)
                        `
                    }}
                >
                    {/* Inner bezel */}
                    <div
                        className="w-full h-full rounded-[48px] sm:rounded-[53px] p-[3px] sm:p-[4px]"
                        style={{
                            background: '#000000'
                        }}
                    >
                        {/* Screen */}
                        <div className="relative w-full h-full rounded-[45px] sm:rounded-[49px] overflow-hidden bg-[#050508]">

                            {/* Dynamic Island only - no status bar icons */}
                            <div
                                className="absolute top-[11px] sm:top-[12px] left-1/2 -translate-x-1/2 z-30 flex items-center justify-center"
                                style={{
                                    width: '126px',
                                    height: '37px',
                                    background: '#000000',
                                    borderRadius: '24px',
                                }}
                            >
                                {/* Front camera lens */}
                                <div
                                    className="absolute right-[18px] w-[12px] h-[12px] rounded-full"
                                    style={{
                                        background: 'radial-gradient(circle at 35% 35%, #2a2a3e 0%, #0a0a0f 70%)',
                                        boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.9)'
                                    }}
                                />
                            </div>

                            {/* Screen Content Area - All images stacked for instant transitions */}
                            <AnimatePresence initial={false} custom={direction}>
                                <motion.div
                                    key={currentIndex}
                                    custom={direction}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{
                                        x: { type: "tween", duration: 0.3, ease: "easeInOut" },
                                    }}
                                    drag="x"
                                    dragConstraints={{ left: 0, right: 0 }}
                                    dragElastic={0.7}
                                    onDragEnd={handleDragEnd}
                                    className="absolute inset-0 cursor-grab active:cursor-grabbing"
                                >
                                    <Image
                                        src={images[currentIndex]}
                                        alt={`App screenshot ${currentIndex + 1}`}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </motion.div>
                            </AnimatePresence>

                            {/* Preload all images to prevent loading flash */}
                            <div className="hidden">
                                {images.map((src, i) => (
                                    <Image
                                        key={i}
                                        src={src}
                                        alt=""
                                        width={300}
                                        height={612}
                                        priority
                                    />
                                ))}
                            </div>

                            {/* Home Indicator */}
                            <div
                                className="absolute bottom-[8px] sm:bottom-[10px] left-1/2 -translate-x-1/2 w-[100px] sm:w-[120px] h-[4px] sm:h-[5px] rounded-full z-20"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.6)'
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* Side buttons - Volume (Cosmic Orange) */}
                <div
                    className="absolute left-[-2px] top-[100px] sm:top-[120px] w-[3px] h-[30px] sm:h-[35px] rounded-l-sm"
                    style={{ background: 'linear-gradient(180deg, #e85d04 0%, #9d4506 100%)' }}
                />
                <div
                    className="absolute left-[-2px] top-[140px] sm:top-[165px] w-[3px] h-[50px] sm:h-[60px] rounded-l-sm"
                    style={{ background: 'linear-gradient(180deg, #e85d04 0%, #9d4506 100%)' }}
                />

                {/* Side button - Power (Cosmic Orange) */}
                <div
                    className="absolute right-[-2px] top-[130px] sm:top-[150px] w-[3px] h-[65px] sm:h-[80px] rounded-r-sm"
                    style={{ background: 'linear-gradient(180deg, #e85d04 0%, #9d4506 100%)' }}
                />
            </div>

            {/* Carousel Dots */}
            <div className="flex gap-2 items-center">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`carousel-dot h-2 rounded-full ${index === currentIndex
                            ? "active w-6"
                            : "w-2 bg-white/30 hover:bg-white/50"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
