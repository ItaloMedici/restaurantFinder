import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";

import { Restaurant, ImageRestaurant, RestaurantInfo, Title, Addres } from './style';
import imageNotFound from './../../assets/image-not-found.png'
import LoadingSkeleton from '../Skeleton'

const RestaurantCard = ({ restaurant, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Restaurant onClick={onClick}>
      <ImageRestaurant
        isLoade={imageLoaded}
        src={restaurant.photos ? restaurant.photos[0].getUrl() : imageNotFound}
        onLoad={() => setImageLoaded(true)}
        alt="Restaurant Photo"
      />
      {!imageLoaded && <LoadingSkeleton width="90px" height="90px"/>}
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
  )
}


export default RestaurantCard;