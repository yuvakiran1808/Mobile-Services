import { Flex, Box, Image } from "@chakra-ui/react";
import React from "react";
import { useEffect, useState } from "react";
function Slides() {
  const slides = [
    {
      img: "https://gadset.in/wp-content/uploads/2021/10/MACBOOK-Repair-5.png",
    },
    {
      img: "https://gadset.in/wp-content/uploads/2021/10/MACBOOK-Repair-5.png",
    },
    {
      img: "https://images.pexels.com/photos/2878019/pexels-photo-2878019.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = slides.length;
  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };
  const SLIDES_INTERVAL_TIME = 2000;
  const ANIMATION_DIRECTION = "right";
  useEffect(() => {
    const prevSlide = () => {
      setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
    };

    const nextSlide = () => {
      setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
    };

    const automatedSlide = setInterval(() => {
      ANIMATION_DIRECTION.toLowerCase() === "left" ? prevSlide() : nextSlide();
    }, SLIDES_INTERVAL_TIME);
    return () => clearInterval(automatedSlide);
  }, [slidesCount]);
  return (
    <Flex
      w="full"
      height="full"
      bg="#edf3f8"
      _dark={{
        bg: "#3e3e3e",
      }}
      p={0}
      alignItems="center"
      justifyContent="center"
    >
      <Flex w="full" height="full" overflow="hidden">
        <Flex pos="relative" h="full" w="full" {...carouselStyle}>
          {slides.map((slide, sid) => (
            <Box key={`slide-${sid}`} flex="none" width="full" shadow="md">
              <Image
                src={slide.img}
                alt="carousel image"
                boxSize="full"
                objectFit="cover"
              />
            </Box>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Slides;
