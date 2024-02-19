import React, { useEffect, useState } from "react";
import NextPage from './NextPage'


const ParallaxComponent = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;
      const scrollPercentage = (scrollY / (fullHeight - windowHeight)) * 30;
      setScrollPercentage(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const imageScale = 1.46 - scrollPercentage / 100;
  const nextPageTranslate = -scrollPercentage / 2;


  return (
    <>
      <div className="relative h-[90vh] z-[20] overflow-hidden w-full">
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
            </div>
      <NextPage
        style={{ transform: `translateY(${nextPageTranslate}%)` }}
        ></NextPage>
      </>
  );
};

export default ParallaxComponent;
