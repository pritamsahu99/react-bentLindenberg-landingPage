// ParallaxComponent.jsx
import React, { useEffect, useState } from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import NextPage from './NextPage'


const ParallaxComponent = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;
      const scrollPercentage = (scrollY / (fullHeight - windowHeight)) * 100;
      setScrollPercentage(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const imageScale = 2 - scrollPercentage / 100;
  const nextPageTranslate = -scrollPercentage / 2;


  return (
    <ParallaxProvider>
      <div className="relative h-[90vh] z-[20] overflow-hidden w-full">
        <Parallax y={[-20, 20]}>
          <img
            style={{
              objectFit: "cover",
              transform: `scale(${imageScale})`,
              backgroundAttachment: "fixed",
              backgroundPosition: "center",
            }}
            className="w-full h-full"
            src="https://assets-global.website-files.com/64589fb989b2b33c593db89d/6458a6db645ec6a527000cfa_home-hero-p-2000.webp"
            alt=""
          />
        </Parallax>
      </div>
      <NextPage
        style={{ transform: `translateY(${nextPageTranslate}%)` }}
      ></NextPage>
    </ParallaxProvider>
  );
};

export default ParallaxComponent;
