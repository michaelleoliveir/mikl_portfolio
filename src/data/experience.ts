import { FaReact, FaCss3Alt, FaHtml5, FaAws, FaGit, FaLaravel, FaBootstrap } from "react-icons/fa";
import { SiWix, SiFigma, SiTypescript, SiJavascript, SiTailwindcss, SiAngular, SiPhp } from "react-icons/si";

interface Experience {
    id: number,
    company: string,
    role: string,
    period: string,
    current: boolean,
    icon: React.ComponentType<{ className?: string }>[]
}

export const experience: Experience[] = [
    {
        id: 1,
        company: 'LACREI SAÚDE',
        role: 'Desenvolvedora Fullstack',
        period: 'Mar/25 - Jul/25',
        current: false,
        icon: [FaReact, FaCss3Alt, FaHtml5, FaAws]
    },
    {
        id: 2,
        company: 'INNOVA TECH ONE',
        role: 'Desenvolvedora Low-code',
        period: 'Jul/25 - Ago/25',
        current: false,
        icon: [SiWix, SiFigma, FaCss3Alt, FaReact]
    },
    {
        id: 3,
        company: 'LUMUS TECH',
        role: 'Desenvolvedora Frontend',
        period: 'Nov/25 - Dez/25',
        current: false,
        icon: [SiTypescript, SiJavascript, FaReact, SiTailwindcss, FaGit]
    },
    {
        id: 4,
        company: 'FULLDEV',
        role: 'Desenvolvedora Frontend',
        period: 'Set/25 - Presente',
        current: true,
        icon: [SiAngular, FaHtml5, FaCss3Alt, SiFigma, FaGit]
    },
    {
        id: 5,
        company: 'PRONTAX',
        role: 'Desenvolvedora',
        period: 'Nov/25 - Presente',
        current: true,
        icon: [FaLaravel, SiPhp, FaHtml5, FaCss3Alt, FaBootstrap, SiFigma]
    },
]