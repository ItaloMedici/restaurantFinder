import React from 'react';
import ReactStars from "react-rating-stars-component";

import { Restaurant, ImageRestaurant, RestaurantInfo, Title, Addres } from './style';
 import restaurantFakeImage from './../../assets/restaurante-fake.png'

const RestaurantCard = ({ restaurant }) =>
  <Restaurant>
    <ImageRestaurant 
      src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurantFakeImage} 
      alt="Restaurant Photo" 
    />
    <RestaurantInfo >
      <Title>{restaurant.name}</Title>
      <Addres>{restaurant.vicinity || restaurant.formatted_address}</Addres>
    </RestaurantInfo>
    <ReactStars
      count={5}
      isHalf
      value={restaurant.rating}
      edit={false}
      activeColor="#e7711c"
    />
  </Restaurant>


export default RestaurantCard;