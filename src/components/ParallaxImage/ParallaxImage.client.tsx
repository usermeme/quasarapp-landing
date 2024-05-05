"use client";
import { FC, useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";

import { useIntersection } from "@/hooks/use-intersection";

import { interpolate } from "@/utils/interpolate";

import styles from "./ParallaxImage.module.scss";

interface ParallaxImageProps {
  alt: string;
  image: StaticImageData;
}

/**
 * when image at the top of screen - parallax offset = 0
 * when image at the bottom of the screen - parallax offset = 30vh - image height
 */
export const ParallaxImage: FC<ParallaxImageProps> = ({ alt, image }) => {
  const [isIntersecting, setIntersecting] = useState(false);
  const imageWrapperRef = useIntersection<HTMLDivElement>(setIntersecting);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current || !isIntersecting) return;

      const imageWrapperHeight = imageWrapperRef.current?.offsetHeight ?? 0;

      const imageHeight = imageRef.current?.offsetHeight ?? 0;
      const imageOffset = imageRef.current?.offsetTop ?? 0;

      const screenHeight = window.innerHeight;
      const scrollTop = document.documentElement.scrollTop;

      const offset = interpolate(
        scrollTop - imageOffset,
        [0, screenHeight - imageWrapperHeight],
        [0, imageHeight - imageWrapperHeight]
      );

      imageRef.current.style.transform = `translateY(${offset}px)`;
    };

    handleScroll();

    window.addEventListener("resize", handleScroll);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [imageWrapperRef, isIntersecting]);

  return (
    <div className={styles.image_wrapper} ref={imageWrapperRef}>
      <div className={styles.image_container} ref={imageRef}>
        <Image
          className={styles.image}
          src={image}
          alt={alt}
          width={image.width}
          height={image.height}
        />
      </div>
    </div>
  );
};
