import { useRef, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useInView,
} from "framer-motion";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
}

export const AnimatedCounter = ({
  target,
  suffix = "",
  prefix = "",
  decimals = 0,
  className,
}: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const raw = useMotionValue(0);
  const spring = useSpring(raw, { damping: 55, stiffness: 70, mass: 1 });
  const display = useTransform(
    spring,
    (v) => `${prefix}${v.toFixed(decimals)}${suffix}`,
  );

  useEffect(() => {
    if (isInView) raw.set(target);
  }, [isInView, target, raw]);

  return (
    <motion.span ref={ref} className={className}>
      {display}
    </motion.span>
  );
};
