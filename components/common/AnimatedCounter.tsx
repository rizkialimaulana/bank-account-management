"use client";

import React from "react";
import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <p>
      <CountUp decimal="," prefix="Rp. " end={amount} />
    </p>
  );
};

export default AnimatedCounter;
