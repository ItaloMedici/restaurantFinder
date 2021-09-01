import styled from 'styled-components';
import Slider from "react-slick";

export const Wrapper = styled.div`
  display: flex;
`;

export const Container = styled.aside`
  background-color: ${props => props.theme.colors.background};
  width: 360px;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const Search = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px;
`;

export const Logo = styled.img`
  margin: 20px 25% 20px;
  width: 50%;
`;

export const Carousel = styled(Slider)`
  .slick-slide {
    margin-right: 30px;
  }
`;

export const CarouselTitle = styled.h1`
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.regular};
  font-weight: bold;
  font-size: 26px;
  line-height: 29px;
  margin: 16px 0;
`;

export const Divider = styled.hr`
  margin:5px 16px 20px;
  opacity: 0.4;
`;

export const RestaurantCardModal = styled.div`
  display: grid;
  gap: 9px;
  grid-template-columns: 1.5fr 2fr 1fr;
  align-items: flex-start;
  text-align: center;
`;

export const RestaurantTitle = styled.h1`
  color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.fonts.regular};
  font-weight: bold;
  font-size: 38px;
  line-height: 42px;
  margin-bottom: 20px;
  text-align: center;
`;

export const RestaurantInfo = styled.p`
  display: flex;
  align-items: center;
  flex-direction: column;

  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.regular};
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 10px;
`;