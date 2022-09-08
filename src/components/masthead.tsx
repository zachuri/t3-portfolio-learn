import React, { useRef, useContext, useState, useCallback } from "react";
import Image from "next/image";
import { ScrollContext } from "../utils/scroll-observer";

const Masthead: React.FC = () => {
	const refContainer = useRef<HTMLDivElement>(null);
	const { scrollY } = useContext(ScrollContext);

	let progress = 0;

	const { current: elContainer } = refContainer;
	if (elContainer) {
		progress = Math.min(1, scrollY / elContainer.clientHeight);
	}

	return (
		<div
			ref={refContainer}
			// last two elements are part of the
			className="min-h-screen flex flex-col items-center justify-center sticky top-0 -z-10"
			style={{
				transform: `translateY(-${progress * 20}vh)`,
			}}
		>
			{/* video played the background */}
			<video
				autoPlay
				loop
				muted
				playsInline
				className="absolute w-full h-full object-cover"
			>
				<source src="/assets/masthead-bg.mp4" type="video/mp4" />
			</video>

			{/* Container for text */}
			<div className={`flex-grow-0 pt-10 transition-opacity duration-1000`}>
				<Image src="/favicon.ico" width={128 / 3} height={114 / 3} />
			</div>
			<div className="p-12 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex-1 flex items-center justify-center flex-col">
				<h1 className="mb-6 text-4xl xl:text-5xl uppercase">zachuri</h1>
				<h2 className="mb-2 text-2xl xl:text-3xl tracking-tight">
					<span>
						Full <span>Stack</span> Developer
					</span>
				</h2>
			</div>

			{/* Container for icon */}
			<div className="flex-grow-0 pb-20 md:pb-10 transition-all duration-1000">
				<Image
					src="/assets/arrow-down.png"
					width={188 / 3}
					height={105 / 3}
					alt="scroll down"
				/>
			</div>
		</div>
	);
};

export default Masthead;
