import React from "react";
import Image from "next/image";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import Link from "next/link";
import { cn } from "@/constants/common";

export default function Us() {
    const features = [
        {
            title: "Dashboard sencillo y fácil de usar",
            description:
                "Nuestro dashboard es fácil de usar y te permite ver tus métricas en tiempo real.",
            skeleton: <SkeletonOne />,
            className:
                "col-span-1 lg:col-span-4 md:border-b mt-4 md:mt-0 lg:border-r border-colors-neutral-600",
        },
        {
            title: "Langchain como IA principal",
            description:
                "Usamos Langchain para ayudarte a automatizar las tareas de manera más eficiente.",
            skeleton: <SkeletonTwo />,
            className: "md:border-b mt-4 md:mt-0 col-span-1 lg:col-span-2 border-colors-neutral-600",
        },
        {
            title: "Miranos en YouTube",
            description:
                "Mira nuestros tutoriales en YouTube para aprender más sobre nuestra tecnología.",
            skeleton: <SkeletonThree />,
            className:
                "col-span-1 lg:col-span-3 mt-4 md:mt-0  lg:border-r  border-colors-neutral-600",
        },
        {
            title: "Deploy en segundos",
            description:
                "Mira cómo tu aplicación se despliega en segundos con nuestra tecnología de punta.",
            skeleton: <SkeletonFour />,
            className: "col-span-1 mt-4 md:mt-0  lg:col-span-3 md:border-b lg:border-none",
        },
    ];
    return (
        <div className="relative z-20 py-10 px-2 max-w-7xl 2xl:max-w-[100rem] mx-auto" id='us'>
            <div className="px-8">
                <h4 className="text-4xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center font-semibold text-white">
                    Nosotros
                </h4>

                <p className="text-xl lg:text-xl italic  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
                    "Intentando automatizar el mundo, un paso a la vez. Con nuestra tecnología de punta y nuestro equipo de expertos, estamos aquí para ayudarte a lograr tus objetivos."
                </p>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 1, x: 0 }}
                transition={{
                    delay: 0.2,
                    duration: 0.5,
                    ease: "easeInOut",
                }}
                className="relative ">
                <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 2xl:border rounded-md border-colors-neutral-600 gap-20 lg:gap-0 h-[2000px] md:h-[1000px]">
                    {features.map((feature) => (
                        <FeatureCard key={feature.title} className={feature.className}>
                            <FeatureTitle>{feature.title}</FeatureTitle>
                            <FeatureDescription>{feature.description}</FeatureDescription>
                            <div className=" h-full w-full">{feature.skeleton}</div>
                        </FeatureCard>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}

const FeatureCard = ({
    children,
    className,
}: {
    children?: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn(`p-2 sm:p-4 relative overflow-hidden`, className)}>
            {children}
        </div>
    );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
    return (
        <p className=" max-w-5xl mx-auto text-left tracking-tight text-white  text-2xl md:text-2xl font-semibold">
            {children}
        </p>
    );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
    return (
        <p
            className={cn(
                "text-lg  max-w-4xl text-left mx-auto",
                "text-neutral-500 text-center font-normal dark:text-neutral-300",
                "text-left max-w-sm mx-0 md:text-sm my-2"
            )}
        >
            {children}
        </p>
    );
};

export const SkeletonOne = () => {
    return (
        <div className="relative flex py-8 px-2 gap-10 h-full">
            <div className="w-full  p-5  mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full">
                <div className="flex flex-1 w-full h-full flex-col space-y-2  ">
                    {/* TODO */}
                    <Image
                        src="/images/board.png"
                        alt="board"
                        width={800}
                        height={800}
                        className="h-full w-full aspect-square object-cover object-left-top rounded-sm"
                    />
                </div>
            </div>

            <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-secondary-1000 dark:from-black via-secondary-from-secondary-1000 dark:via-black to-transparent w-full pointer-events-none" />
            <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-secondary-1000 dark:from-black via-transparent to-transparent w-full pointer-events-none" />

        </div>
    );
};

export const SkeletonThree = () => {
    return (
        <Link
            href="https://www.youtube.com/watch?v=RPa3_AD1_Vs"
            target="__blank"
            className="relative flex gap-10  h-full group/image"
        >
            <div className="w-full  mx-auto bg-transparent dark:bg-transparent group h-full">
                <div className="flex flex-1 w-full h-full flex-col space-y-2  relative">
                    {/* TODO */}
                    <IconBrandYoutubeFilled className="h-20 w-20 absolute z-10 inset-0 text-red-500 m-auto " />
                    <Image
                        src="https://assets.aceternity.com/fireship.jpg"
                        alt="header"
                        width={800}
                        height={800}
                        className="h-full w-full aspect-square object-cover object-center rounded-sm blur-none group-hover/image:blur-md transition-all duration-200"
                    />
                </div>
            </div>
        </Link>
    );
};

export const SkeletonTwo = () => {
    const images = [
        "/images/langchain.svg",
        "/images/langchain.svg",
        "/images/langchain.svg",
        "/images/langchain.svg"
    ];

    const imageVariants = {
        whileHover: {
            scale: 1.1,
            rotate: 0,
            zIndex: 100,
        },
        whileTap: {
            scale: 1.1,
            rotate: 0,
            zIndex: 100,
        },
    };
    return (
        <div className="relative flex flex-col items-center p-8 gap-10 h-full overflow-hidden">
            {/* TODO */}
            <div className="flex flex-row md:-ml-20">
                {images.map((image, idx) => (
                    <motion.div
                        variants={imageVariants}
                        key={"images-first" + idx}
                        style={{
                            rotate: Math.random() * 20 - 10,
                        }}
                        whileHover="whileHover"
                        whileTap="whileTap"
                        className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                    >
                        <Image
                            src={image}
                            alt="bali images"
                            width="500"
                            height="500"
                            className="rounded-lg h-20 w-20 md:h-36 md:w-36 object-contain flex-shrink-0"
                        />
                    </motion.div>
                ))}
            </div>
            <div className="flex flex-row md:-ml-20">
                {images.map((image, idx) => (
                    <motion.div
                        key={"images-second" + idx}
                        style={{
                            rotate: Math.random() * 20 - 10,
                        }}
                        variants={imageVariants}
                        whileHover="whileHover"
                        whileTap="whileTap"
                        className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                    >
                        <Image
                            src={image}
                            alt="bali images"
                            width="500"
                            height="500"
                            className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-contain flex-shrink-0"
                        />
                    </motion.div>
                ))}
            </div>

            <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-secondary-1000 dark:from-black to-transparent  h-full pointer-events-none" />
            <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-secondary-1000 dark:from-black  to-transparent h-full pointer-events-none" />
        </div>
    );
};

export const SkeletonFour = () => {
    return (
        <div className="h-72 md:h-60  flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
            <Globe className="absolute -mt-80 -right-8 md:-right-40  md:-bottom-16" />
        </div>
    );
};

export const Globe = ({ className }: { className?: string }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        let phi = 0;

        if (!canvasRef.current) return;

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 4,
            width: 600 * 2,
            height: 600 * 2,
            phi: 0,
            theta: 0,
            dark: 1,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: [0.3, 0.3, 0.3],
            markerColor: [0.1, 0.8, 1],
            glowColor: [1, 1, 1],
            markers: [
                // longitude latitude
                { location: [37.7595, -122.4367], size: 0.03 },
                { location: [40.7128, -74.006], size: 0.1 },
            ],
            onRender: (state) => {
                // Called on every animation frame.
                // `state` will be an empty object, return updated params.
                state.phi = phi;
                phi += 0.01;
            },
        });

        return () => {
            globe.destroy();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
            className={className}
        />
    );
};
