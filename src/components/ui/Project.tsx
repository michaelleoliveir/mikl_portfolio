import React from "react";

interface ProjectProps {
    image: string;
    title: string;
    subtitle: string;
    link: string;
    tags: string[]
}

const Project: React.FC<ProjectProps> = ({ image, title, link, subtitle, tags }) => {
    return (
        <div className="font-instrument w-full flex flex-col items-center mb-17">
            
            <a href={link} target="_blank" className="w-[80%]">
                <div
                    className="relative rounded-[3rem] mb-5 w-full h-[350px] bg-cover bg-center group cursor-pointer"
                    style={{ backgroundImage: `url('/${image}')` }}
                >
                    <div className="absolute inset-0 rounded-[3rem] bg-white/0 transition duration-300 group-hover:bg-white/50"></div>
                </div>
            </a>

            <div>
                
            </div>

            <div className="w-[80%] flex flex-col">
                <div className="mb-5 flex flex-wrap flex-row">
                    {tags.map((tag, index) => {
                        return (
                            <span key={index} className="text-neon text-[0.9rem] w-[10%] mr-3 px-3 py-1 text-center rounded-4xl bg-highlight-darker/60">
                                {tag}
                            </span>
                        )
                    })}
                </div>
                <div>
                    <h1 className="text-letter text-3xl font-bold">{title}</h1>
                    <p className="text-gray text-[1.1rem]">{subtitle}</p>
                </div>
            </div>
        </div>
    );
};

export default Project;
