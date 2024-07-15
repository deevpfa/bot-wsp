"use client";
import React from "react";
import Image from "next/image";
import { StickyScroll } from "./StickyScrollC";

const content = [
    {
        title: "Automatización 24/7",
        description: "Chatbots que responden preguntas y realizan tareas repetitivas todo el día. Respuestas Rápidas y Personalizadas: Chatbots que brindan respuestas rápidas y ajustadas a cada cliente.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                Collaborative Editing
            </div>
        ),
    },
    {
        title: "Respuestas Rápidas y Personalizadas",
        description: "Chatbots que brindan respuestas rápidas y ajustadas a cada cliente.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/linear.webp"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "Reducción de Costos",
        description:
            "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
                Version control
            </div>
        ),
    },
    {
        title: "Running out of content",
        description:
            "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                Running out of content
            </div>
        ),
    },
];
export function StickyScrollRevealDemo() {
    return (
        <div className="py-32">
            <StickyScroll content={content} />
        </div>
    );
}
