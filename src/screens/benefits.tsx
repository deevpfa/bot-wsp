import { FeaturesSectionDemo } from "@/components/Feature";
import { motion } from "framer-motion";
import React from "react";

interface BenefitsProps { }

export function Benefits({ }: BenefitsProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 1, x: 0 }}
            transition={{
                delay: 0.2,
                duration: 0.5,
                ease: "easeInOut",
            }}
        >

            <div className='flex justify-center items-center'
                id='benefits'>
                <h1 className='text-white text-4xl font-semibold tracking-wider'>Beneficios</h1>
            </div>
            <FeaturesSectionDemo />
        </motion.div>
    );
}