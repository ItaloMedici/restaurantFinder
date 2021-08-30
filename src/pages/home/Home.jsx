import React, { useState } from "react";
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
// import Slider from "react-slick";

import { Wrapper, Container, Search, Logo, Carousel, CarouselTitle, Divider } from "./styles";

import logo from '../../assets/logo.svg';
import restaurantFakeImg from '../../assets/restaurante-fake.png'
import { Card, RestaurantCard, Modal, Map } from '../../components';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [modalOpened, setModalOpened] = useState(false);
  const [query, setQuery] = useState(null);

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
            <Card photo={restaurantFakeImg} title="Aooo"/>
            <Card photo={restaurantFakeImg} />
            <Card photo={restaurantFakeImg} />
            <Card photo={restaurantFakeImg} />
            <Card photo={restaurantFakeImg} />
            <Card photo={restaurantFakeImg} />
            <Card photo={restaurantFakeImg} />
          </Carousel>
        </Search>
        <Divider />
        <RestaurantCard />
      </Container>
      <Map query={query}/>
      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}/>
    </Wrapper>
  )
}

export default Home;  