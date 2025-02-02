'use client';
import { Typewriter } from "react-simple-typewriter";

const ReactTypeWriter = () => {
    return (
        <div className="h-96 flex items-center justify-center">
            <h1 className="text-white text-4xl">
                Hello, I&apos;m Nick{' '}
                <span className="text-yellow-400">
                    <Typewriter
                        delaySpeed={2000}
                        deleteSpeed={125}
                        typeSpeed={125}
                        cursor={true}
                        words={['Software Developer', 'Problem Solver']}
                        loop
                    />
                </span>
            </h1>
        </div>
    )
}
export default ReactTypeWriter