import React from "react";
import Link from "next/link";
import Image from 'next/image'

import { FaGithub } from "react-icons/fa";
import { Items } from "@/data/projects";
import { PiStarFourFill } from "react-icons/pi";

const Project: React.FC<Items> = ({ image, title, link, features, subtitle, tags }) => {
    return (
        <div className="font-instrument w-full flex flex-row justify-center items-center mb-17 gap-10">

            <div className="relative shrink-0 overflow-hidden w-[600px] h-[400px] rounded-[2.5rem] group border border-white/5 shadow-2xl">
                <Image
                    src={`/${image}`}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    priority
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div className="flex flex-col gap-5">
                <div>
                    <div className="flex flex-row items-center gap-5">
                        <h1 className="text-letter text-3xl font-bold">{title}</h1>
                        <Link href={link} target="_blank">
                            <FaGithub className="text-letter" size={25} />
                        </Link>
                    </div>
                    <p className="mt-2 text-gray text-[1.1rem]">{subtitle}</p>
                </div>

                <div className="flex flex-col gap-2 my-2">
                    {features.map((feature, index) => (
                        <span key={index} className="text-letter/70 text-[0.95rem] flex items-start gap-2">
                            <span className="text-highlight ml-6"><PiStarFourFill/></span> {feature}
                        </span>
                    ))}
                </div>

                <div className="mb-5 flex flex-wrap flex-row ml-6">
                    {tags.map((tag, index) => {
                        return (
                            <span key={index} className="w-[6.5%] mr-4 p-3 text-center rounded-4xl border border-gray/40 bg-gray/30">
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
