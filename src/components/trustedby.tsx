import React from "react";
import ClientLogos1 from "./client-logos-1";
import ClientLogos2 from "./client-logos-2";

const TrustedBy: React.FC = () => {
	return (
		<section className="bg-white min-h-screen flex flex-col justify-center gap-16 md:gap-32">
			<div className="flex-1"></div>
			<div className="flex flex-col justify-center items-center">
				<h3 className="text-xl mb-10 font-bold text-center">
					<span className="whitespace-nowrap">trusted by</span>{" "}
					<span className="whitespace-nowrap">
						some of the apps you use daily
					</span>
				</h3>
				<ClientLogos1 />
				<ClientLogos2 />
			</div>
			<div className="flex flex-col justify-center itesm-center">
				<div className="container mx-auto lg:max-w[70%] lg:px-10">
					<h3 className="text-3xl lg:text-4xl tracking-tight text-center px-10 !leading-[3.5rem]">
						We believe in good communication and a a fully transparent
						development
					</h3>
				</div>
			</div>
			<div>Testimonials</div>
			{/* flex-1 sets how a flex item wil grow or shrink to fit the space available */}
			<div className="flex-1 bg-black"></div>
		</section>
	);
};

export default TrustedBy;
