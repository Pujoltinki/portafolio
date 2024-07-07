import React from 'react';
import styled from 'styled-components';
import banner from '../../Image/banner.png';

const BannerWrapper = styled.div`
  background-image: url(${banner});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 70vh; /* Altura mínima para pantallas grandes */
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    min-height: 20vh; /* Ajuste para dispositivos móviles */
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    min-height: 30vh; /* Ajuste para tablets y pantallas medianas */
  }

  @media (min-width: 1200px) {
    min-height: 40vh; /* Mantener la altura para pantallas grandes */
  }
`;

const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Banner = () => {
  return (
    <BannerWrapper>
      <BannerImage src={banner} alt="Banner" />
    </BannerWrapper>
  );
};

export default Banner;
