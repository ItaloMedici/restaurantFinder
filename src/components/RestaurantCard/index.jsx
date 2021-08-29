import React from 'react';
import { Restaurant, RestaurantInfo, Title, Addres }  from './style';
import ReactStars from "react-rating-stars-component";

const RestaurantCard = () => 
  <Restaurant>
    <RestaurantInfo >
      <Title>Pao na chapa do Giu</Title>
      <Addres>Rua ze da CUNHA, 93</Addres>
    </RestaurantInfo>
    <ReactStars   
      count={5}
      isHalf
      value={4}
      edit={false}
      activeColor="#e7711c"
    />
  </Restaurant>


export default RestaurantCard;