import React from "react";
import Link from "next/link";
import Image from 'next/image'

import { FaGithub } from "react-icons/fa";
import { PiStarFourFill } from "react-icons/pi";

import { Items } from "@/data/projects";

const Project: React.FC<Items> = ({ image, title, link, features, subtitle, tags }) => {
    return (
        <div className="font-instrument w-full flex flex-col md:flex-row justify-center items-center mb-17 gap-4 md:gap-10">

            <div className="relative shrink-0 overflow-hidden w-full max-w-[90%] md:w-[600px] aspect-4/3 h-[250px] md:h-[400px] rounded-4xl md:rounded-[2.5rem] group border border-white/5 shadow-2xl mx-auto">
                <Image
                    src={`/${image}`}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    priority
                />
                <div className="absolute inset-0 bg-black/40 md:bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center" />
            </div>

            <div className="px-4 md:px-0 flex flex-col gap-3 md:gap-5">
                <div>
                    <div className="flex flex-row items-center gap-5">
                        <h1 className="text-letter text-2xl md:text-3xl font-bold">{title}</h1>
                        <Link href={link} target="_blank">
                            <FaGithub className="text-letter" size={25} />
                        </Link>
                    </div>
                    <p className="mt-2 text-gray text-[1rem] md:text-[1.1rem]">{subtitle}</p>
                </div>

                <div className="flex flex-col gap-3 my-2">
                    {features.map((feature, index) => (
                        <span key={index} className="text-letter/70 text-[0.9rem] md:text-[1rem] flex items-start gap-2">
                            <span className="text-highlight ml-0 md:ml-6"><PiStarFourFill/></span> {feature}
                        </span>
                    ))}
                </div>

                <div className="mb-5 flex flex-wrap flex-row ml-0 md:ml-6">
                    {tags.map((tag, index) => {
                        return (
                            <span key={index} className="w-9 md:w-[6.5%] mr-4 p-2 md:p-3 text-center rounded-4xl border border-gray/40 bg-gray/30">
                                {tag}
                            </span>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Project;
