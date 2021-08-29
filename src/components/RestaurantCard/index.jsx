import React from 'react';
import ReactStars from "react-rating-stars-component";

import { Restaurant, ImageRestaurant, RestaurantInfo, Title, Addres }  from './style';
import RestaurantFakeImage from './../../assets/restaurante-fake.png'

const RestaurantCard = () => 
  <Restaurant>
    <ImageRestaurant src={RestaurantFakeImage} />
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