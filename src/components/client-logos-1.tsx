import React from "react";
import Image from "next/image";
import SliderContainer, { SliderItem } from "./slider";

const ClientLogos: React.FC = () => {
  return (
    <>
      <SliderContainer className="" contentWidth={1062} initialOffsetX={0}>
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
        <SliderItem width={150}>
          <Image
            src="/assets/trustedby/aws.png"
            width={150}
            height={50}
            objectFit="contain"
            alt="aws"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src="/assets/trustedby/oracle.png"
            width={150}
            height={50}
            objectFit="contain"
            alt="oracle"
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src="/assets/trustedby/showtime.png"
            width={150}
            height={50}
            objectFit="contain"
            alt="showtime"
          />
        </SliderItem>
      </SliderContainer>
    </>
  );
};

export default ClientLogos;
