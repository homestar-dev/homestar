import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

import React from "react";

interface IFadeInOnScrollProps {
  children: React.ReactNode;
  threshold: number;
}

export const FadeInOnScroll: React.FC<IFadeInOnScrollProps> = ({
  children,
  threshold,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (router.asPath === "/#services") {
      setIsVisible(true);
    }
  }, [router.pathname]);

  useEffect(() => {
    const handleScroll = (entries: any) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting || isVisible);
    };

    const observer = new IntersectionObserver(handleScroll, {
      threshold: threshold,
    });

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, [isVisible]);

  return (
    <div
      ref={componentRef}
      className={`transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
};
