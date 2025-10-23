import BlurText from "../library/BlurText.jsx"
import FadeContent from "../library/FadeContent.jsx"
import Image from "next/image.js"

import "../../styles/variables.css"
import "../../styles/portfolio.css"

const Portfolio = () => {
    return (
        <div className="flex flex-col h-screen w-[90%]">

            {/* middle div */}
            <div className="flex flex-col justify-center items-center h-screen">
                <div className="flex flex-row items-center justify-center mb-3 gap-3">
                    <div className="dot"></div>
                    <p className="text-1xl text-gray font-medium font-instrument">DISPONÍVEL PARA TRABALHO</p>
                </div>
                <div className="flex flex-col items-center">
                    <BlurText
                        text="MICHAELLE"
                        delay={150}
                        animateBy="words"
                        direction="top"
                        className="text-8xl text-letter font-instrument font-extrabold -mb-3"
                        animationFrom={undefined}
                        animationTo={undefined}
                        onAnimationComplete={undefined} />
                    <BlurText
                        text="OLIVEIRA"
                        delay={150}
                        animateBy="words"
                        direction="top"
                        className="text-8xl mb-8 text-letter font-instrument font-extrabold"
                        animationFrom={undefined}
                        animationTo={undefined}
                        onAnimationComplete={undefined} />
                </div>
            </div>

            {/* bottom div */}
            <div className="flex flex-row justify-between">
                <BlurText
                    text="DESENVOLVEDORA"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="text-[1.2rem] mb-8 text-letter font-instrument font-normal"
                    animationFrom={undefined}
                    animationTo={undefined}
                    onAnimationComplete={undefined} />
                <div className="flex flex-row">
                    <BlurText
                        text="FRONTEND"
                        delay={150}
                        animateBy="words"
                        direction="top"
                        className="text-[1.2rem] mb-8 text-letter font-instrument font-normal"
                        animationFrom={undefined}
                        animationTo={undefined}
                        onAnimationComplete={undefined} />

                    <BlurText
                        text=" + FULLSTACK"
                        delay={150}
                        animateBy="words"
                        direction="top"
                        className="text-[1.2rem] mb-8 text-highlight font-instrument font-bold"
                        animationFrom={undefined}
                        animationTo={undefined}
                        onAnimationComplete={undefined} />
                </div>
            </div>

        </div>
    )
}

export default Portfolio