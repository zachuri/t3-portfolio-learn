import React from "react";
import Carousel from "./carousel";
import CarouselItem from "./carousel-item";

const Testimonials: React.FC = () => {
	return (
		<Carousel className="bg-black text-white py-10 lg:py-20">
			<CarouselItem index={0}>
				<div>Review 1</div>
			</CarouselItem>
		</Carousel>
	);
};

export default Testimonials;
