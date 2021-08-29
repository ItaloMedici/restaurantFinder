import React, { useState } from "react";
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
// import Slider from "react-slick";

import { Wrapper, Container, Search, Logo, Carousel, CarouselTitle, Divider, Map } from "./styles";

import logo from '../../assets/logo.svg';
import restaurantFakeImg from '../../assets/restaurante-fake.png'
import { Card, RestaurantCard, Modal } from '../../components';

const Home = () => {
  const [value, setValue] = useState('');
  const [modalValue, setModalValue] = useState(true);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  }

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="Logo Restaurant Finder" />
          <TextField
            label='Search'
            outlined
            // onTrailingIconSelect={() => this.setState({value: ''})}
            trailingIcon={<MaterialIcon role="button" icon="search" />}
          >
            <Input
              value={value}
              onChange={(e) => setValue(e.target.value)}
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
      <Map />
      <Modal open={modalValue} onClose={() => setModalValue(!modalValue)}/>
    </Wrapper>
  )
}

export default Home;  