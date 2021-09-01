import styled from 'styled-components';

export const Restaurant = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 16px;
  grid-gap: 10px;
  align-items: center;

  margin-top: 5px;
  padding: 16px 14px;
  margin: 0 15px 10px;
  border-radius: 8px;

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

export const ImageRestaurant = styled.img`
  display: ${prop => prop.isLoade ? 'block' : 'none'};
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

export const Title = styled.span`
  font-family: ${props => props.theme.fonts.regular};
  font-size: 22px;
  font-weight: bold;
  line-height: 25px;
  margin-bottom: 10px;
`;

export const Addres = styled.span`
  font-family: ${props => props.theme.fonts.regular};
  font-size: 14px;
  line-height: 19px;
`;