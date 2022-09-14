import React from "react";
import Carousel from "./carousel";
import CarouselItem from "./carousel-item";
import Review from "./review";

const Testimonials: React.FC = () => {
  return (
    <Carousel className="bg-black text-white py-10 lg:py-20">
      <CarouselItem index={0}>
        <Review by="Axel (Showtime)">
          Margelo and Showtime both share the love for high-quality
          software and the passion for building something people want.
        </Review>
      </CarouselItem>
      <CarouselItem index={1}>
        <Review by="Mitch Hodge (Photographer)">
          At first, I wasn't sure whether any of my photos were good
          enough comparison to the other photos I saw on the site, but I
          uploaded a few anyway. I was quite startled to see how many
          views and downlaods my first uploads got in their first 24
          hours!
        </Review>
      </CarouselItem>
      <CarouselItem index={2}>
        <Review by="Lorem Ipsum (Dolor)">
          In ac tempus eros. Donec nec iaculis nisl. Quisque sed tellus
          vitae sem auctor congue. In elementum egestas dolor sit amet
          sodales. Mauris orci metus, ultricies quis feugiat in, auctor
          sit amet quam. Vestibulum vel lobortis ante. Maecenas bibendum
          rutrum pretium. Aliquam erat volutpat.
        </Review>
      </CarouselItem>
    </Carousel>
  );
};

export default Testimonials;
