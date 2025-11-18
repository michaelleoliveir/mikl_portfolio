import React from "react"

interface ProjectProps {
    image: string,
    title: string,
}

const Project: React.FC<ProjectProps> = ({ image, title }) => {
    return (
        <div className="relative items-center justify-center rounded-[8rem] mb-9 w-[80%] h-[350px] bg-cover bg-center group mx-auto"
            style={{ backgroundImage: `url('/${image}')` }}>

            <div className="absolute inset-0 rounded-[8rem] bg-white/0 transition duration-300 group-hover:bg-white/85"></div>

            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
                <h1 className="text-5xl font-bold text-highlight">{title.toUpperCase()}</h1>
            </div>

        </div>
    )
}

export default Project
