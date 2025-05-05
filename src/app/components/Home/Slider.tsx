'use client';
import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes());
    }
  }, [emblaApi]);

  return (
    <div className="embla overflow-hidden" ref={emblaRef}>
      <div className="embla__container flex">
        <div className="embla__slide flex-shrink-0 min-w-full">
          <img src="./img/slider1.jpg" alt="Slide 1" className="w-full h-120 rounded-lg object-cover" />
        </div>
        <div className="embla__slide flex-shrink-0 min-w-full">
          <img src="./img/slider2.jpg" alt="Slide 2" className="w-full h-120 rounded-lg object-cover" />
        </div>
        <div className="embla__slide flex-shrink-0 min-w-full">
          <img src="./img/slider3.jpg" alt="Slide 3" className="w-full h-120 rounded-lg object-cover" />
        </div>
      </div>
    </div>
  );
}
