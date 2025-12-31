import { iconLibrary } from "@/data/iconLibrary"
import BlurText from "../library/BlurText"
import AosWrapper from "../ui/AosWrapper";

const Stack = () => {
    const icons = Object.entries(iconLibrary);

    return (
        <div className='flex flex-col items-center mt-28 mb-15'>
            <div className='w-full'>
                <BlurText
                    text='STACK'
                    delay={150}
                    direction='top'
                    animationFrom={undefined}
                    animationTo={undefined}
                    onAnimationComplete={undefined}
                    className='text-[6rem] text-letter font-instrument text-left font-extrabold' />
            </div>

            <AosWrapper>
                <div className="flex flex-wrap justify-center gap-3 max-w-6xl mx-auto p-8">
                    {icons.map(([name, icon], index) => (
                        <div
                            key={name}
                            data-aos="fade-up"
                            data-aos-delay={index * 50}
                            data-aos-duration="800"
                            className="gap-3 flex flex-row items-center justify-center px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 group m-1 border border-white/20"
                        >
                            <div className="w-6 transition-all">
                                {icon}
                            </div>

                            <span className="tracking-widest text-sm font-dm-sans text-letter/70">
                                {name}
                            </span>
                        </div>
                    ))}
                </div>
            </AosWrapper>
        </div>
    )
}

export default Stack