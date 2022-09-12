import React from "react";
import Image from "next/image";
import SliderContainer, { SliderItem } from "./slider";

const ClientLogos: React.FC = () => {
	return (
		<>
			<SliderContainer className="" contentWidth={1290} initialOffsetX={0}>
				<SliderItem width={150}>
					<Image
						src="/assets/trustedby/amazon.png"
						width={150}
						height={50}
						objectFit="contain"
						alt="amazon"
					/>
				</SliderItem>

				<SliderItem width={150}>
					<Image
						src="/assets/trustedby/amazonalexa.png"
						width={150}
						height={50}
						objectFit="contain"
						alt="amazon"
					/>
				</SliderItem>

				<SliderItem width={150}>
					<Image
						src="/assets/trustedby/googlecloud.png"
						width={150}
						height={50}
						objectFit="contain"
						alt="amazon"
					/>
				</SliderItem>
			</SliderContainer>
		</>
	);
};

export default ClientLogos;
