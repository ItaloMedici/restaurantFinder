import styled from 'styled-components';
import ReactStars from "react-rating-stars-component";

export const Restaurant = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 5px;
  padding: 16px;
  margin: 0 15px;
  border-radius: 6px;

  background-color: #FFF;
  box-shadow: 0 0 10px ${props => props.theme.colors.lightGrey};
  border-left: 5px solid transparent;

  :hover {
    border-left-color: ${props => props.theme.colors.primary};
    background-color: #f3f3f3;
  }

  cursor: pointer;
`;

export const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  font-family: ${props => props.theme.fonts.regular};
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;
  margin-bottom: 10px;
`;

export const Addres = styled.span`
  font-family: ${props => props.theme.fonts.regular};
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 10px;
`;

/* export const Avaliation = styled(ReactStars)`
  #sc-dQoVA{
    background-color: red;
  }
`;

console.log(Avaliation); */