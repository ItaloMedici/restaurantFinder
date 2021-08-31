import React, { useState } from "react";
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import { useSelector } from "react-redux";

import { Wrapper, Container, Search, Logo, Carousel, CarouselTitle, Divider } from "./styles";

import logo from '../../assets/logo.svg';
import restaurantFakeImg from '../../assets/restaurante-fake.png'
import { Card, RestaurantCard, Modal, Map } from '../../components';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [modalOpened, setModalOpened] = useState(false);
  const [query, setQuery] = useState(null);
  const { restaurants } = useSelector(state => state.restaurants);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      setQuery(inputValue);
    }
  }

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="Logo Restaurant Finder" />
          <TextField
            label='Search'
            outlined
            trailingIcon={<MaterialIcon role="button" icon="search" />}
          >
            <Input
              value={inputValue}
              onKeyPress={handleKeyPress}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </TextField>
          <CarouselTitle>Next to you</CarouselTitle>
          <Carousel {...settings}>
          {restaurants.map(restaurant => (
            <Card 
              key={restaurant.place_id}
              photo={restaurant.photos ? restaurant.photos[0].getUrl() : restaurantFakeImg} 
              title={restaurant.name}/>
          ))}
          </Carousel>
        </Search>
        <Divider />
        {restaurants.map(restaurant => (
          <RestaurantCard key={restaurant.place_id}  restaurant={restaurant}/>  
        ))}
      </Container>
      <Map query={query}/>
      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}/>
    </Wrapper>
  )
}

export default Home;  