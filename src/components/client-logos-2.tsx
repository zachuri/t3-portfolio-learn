import React from "react";
import Image from "next/image";
import SliderContainer, { SliderItem } from "./slider";

const ClientLogos: React.FC = () => {
	return (
		<>
			<SliderContainer className="" contentWidth={1062} initialOffsetX={0}>
				<SliderItem width={150}>
					<Image
						src="/assets/trustedby/binance.png"
						width={150}
						height={50}
						objectFit="contain"
						alt="binance"
					/>
				</SliderItem>

				<SliderItem width={150}>
					<Image
						src="/assets/trustedby/shopify.png"
						width={150}
						height={50}
						objectFit="contain"
						alt="shopify"
					/>
				</SliderItem>

				<SliderItem width={150}>
					<Image
						src="/assets/trustedby/twitter.png"
						width={150}
						height={50}
						objectFit="contain"
						alt="twitter"
					/>
				</SliderItem>
				<SliderItem width={150}>
					<Image
						src="/assets/trustedby/expensify.png"
						width={150}
						height={50}
						objectFit="contain"
						alt="aws"
					/>
				</SliderItem>
				<SliderItem width={150}>
					<Image
						src="/assets/trustedby/soundcloud.png"
						width={150}
						height={50}
						objectFit="contain"
						alt="oracle"
					/>
				</SliderItem>
				<SliderItem width={150}>
					<Image
						src="/assets/trustedby/spotify.png"
						width={150}
						height={50}
						objectFit="contain"
						alt="oracle"
					/>
				</SliderItem>
			</SliderContainer>
		</>
	);
};

export default ClientLogos;
