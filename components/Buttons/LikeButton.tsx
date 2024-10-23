"use client";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineLike, AiTwotoneLike } from "react-icons/ai";

const LikeButton = () => {
  const [value, setValue] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    const timer = setTimeout(() => {}, 50); // Delay to ensure class change is recognized

    return () => clearTimeout(timer);
  }, [value]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scrollContainerRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
      setScrollLeft(scrollContainerRef.current.scrollLeft);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // The multiplier can be adjusted for faster/slower scrolling
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    const handleMouseLeave = () => setIsDragging(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.addEventListener(
        "mouseleave",
        handleMouseLeave
      );
    }
    return () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.removeEventListener(
          "mouseleave",
          handleMouseLeave
        );
      }
    };
  }, []);
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked(!isLiked);
  };
  return (
    <div>
      <button
        className="bg-gray-800 w-11 h-11 flex justify-center items-center rounded-sm"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onClick={handleClick}
      >
        {isHovered ? (
          <AiTwotoneLike className="w-7 h-7" />
        ) : (
          <AiOutlineLike className="w-7 h-7" />
        )}
      </button>
    </div>
  );
};

export default LikeButton;
