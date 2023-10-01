"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useViewState } from "@/state/ViewStateProvider";

export type AnimationType = "none" | "scale" | "left" | "right";

export interface AnimationViewProps {
  type?: AnimationType;
  duration?: number;
  staggerDelay?: number;
  scaleOffset?: number;
  distanceOffset?: number;
}

interface Props extends AnimationViewProps {
  items: JSX.Element[];
  className?: string;
  animateFromAppState?: boolean;
  animateOnFirstLoadOnly?: boolean;
  staggerOnFirstLoadOnly?: boolean;
}

export const AnimateViewItems = ({
  className,
  items,
  type = 'scale',
  duration = 0.6,
  staggerDelay = 0.1,
  scaleOffset = 0.9,
  distanceOffset = 20,
  animateFromAppState,
  animateOnFirstLoadOnly,
  staggerOnFirstLoadOnly,
}: Props) => {

  const {
    hasLoaded,
    nextViewAnimation,
    clearNextViewAnimation,
  } = useViewState();
  
  const hasLoadedInitial = useRef(hasLoaded);
  const nextViewAnimationInitial = useRef(nextViewAnimation);

  const shouldAnimate = type !== 'none' &&
    !(animateOnFirstLoadOnly && hasLoadedInitial.current);
  const shouldStagger =
    !(staggerOnFirstLoadOnly && hasLoadedInitial.current);

  const typeResolved = animateFromAppState
    ? (nextViewAnimationInitial.current?.type ?? type)
    : type;

  const durationResolved = animateFromAppState
    ? (nextViewAnimationInitial.current?.duration ?? duration)
    : duration;

  const getInitialVariant = () => {
    switch (typeResolved) {
    case 'left': return {
      opacity: 0,
      translateX: distanceOffset,
    };
    case 'right': return {
      opacity: 0,
      translateX: -distanceOffset,
    };
    default: return {
      opacity: 0,
      scale: scaleOffset,
      translateY: distanceOffset,
    };
    }
  };

  return (
    <motion.div
      className={className}
      initial={shouldAnimate ? 'hidden' : false}
      animate="show"
      variants={shouldStagger
        ? {
          show: {
            transition: {
              staggerChildren: staggerDelay,
            },
          },
        } : undefined}
      onAnimationComplete={() => {
        if (animateFromAppState) {
          clearNextViewAnimation?.();
        }
      }}
    >
      {items.map((item, index) =>
        <motion.div
          key={index}
          style={getInitialVariant()}
          variants={{
            hidden: getInitialVariant(),
            show: {
              opacity: 1,
              scale: 1,
              translateX: 0,
              translateY: 0,
            },
          }}
          transition={{
            duration: durationResolved,
            easing: 'easeOut',
          }}
        >
          {item}
        </motion.div>)}
    </motion.div>
  );
};