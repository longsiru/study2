import React from "react";
import styled from "styled-components";
import { Navigation } from "swiper";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const StyledRoot = styled.div`
  .swiper {
    &-wrapper,
    &-container {
      width: 62rem;
      margin: 0;
    }
    &-container {
      margin: 0 3.2rem;
    }
    &-button-disabled {
      visibility: hidden;
    }
  }
`;

const DEFAULT_SETTINGS = {
  modules: [Navigation],
  // spaceBetween: 10,
  navigation: {},
  slidesPerView: 5,
  loop: true,
};

const Slider = ({ settings = DEFAULT_SETTINGS, children }) => {
  return (
    <StyledRoot>
      <Swiper {...settings}>{children}</Swiper>
    </StyledRoot>
  );
};

export default Slider;
