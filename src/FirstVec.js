import React from "react";
import styled from "styled-components";

const FirstVecContainer = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  z-index: -2;
  overflow: hidden;
`;

const FirstVec = () => {
  return (
    <FirstVecContainer>
      <svg
        width="2600px"
        height="1900px"
        viewBox="0 0 320 885"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={`M0 774V0H320V884.5L0 474Z`} fill="url(#paint0_linear)" />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="159.75"
            y1="-3.01693e-05"
            x2="659.103"
            y2="468.88"
            gradientUnits="userSpaceOnUse"
          >
            <stop />
            <stop offset="1" stopColor="#47B2FF" />
          </linearGradient>
        </defs>
      </svg>
    </FirstVecContainer>
  );
};

export default FirstVec;
