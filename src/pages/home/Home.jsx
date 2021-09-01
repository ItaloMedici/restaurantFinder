import React, { useState } from "react";
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import { useSelector } from "react-redux";

import { Wrapper, Container, Search, Logo, Carousel, CarouselTitle, Divider, RestaurantCardModal, RestaurantTitle, RestaurantInfo } from "./styles";

import logo from '../../assets/logo.svg';
import restaurantFakeImg from '../../assets/restaurante-fake.png'
import { Card, RestaurantCard, Modal, Map, Loader } from '../../components';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [modalOpened, setModalOpened] = useState(false);
  const [query, setQuery] = useState(null);
  const [placeId, setPlaceId] = useState(null);
  const { restaurants, restaurantsSelected } = useSelector(state => state.restaurants);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  }

  function handleOpenModal(placeId) {
    setPlaceId(placeId);
    setModalOpened(true)
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
          {restaurants.length > 0 ? (
            <>
              <CarouselTitle>Near to you</CarouselTitle>
              <Carousel {...settings}>
                {restaurants.map(restaurant => (
                  <Card
                    key={restaurant.place_id}
                    photo={restaurant.photos ? restaurant.photos[0].getUrl() : restaurantFakeImg}
                    title={restaurant.name} />
                ))}
              </Carousel>
            </>
          ) : (
            <Loader />
          )}
        </Search>
        <Divider />
        {restaurants.map(restaurant => (
          <RestaurantCard
            key={restaurant.place_id}
            onClick={() => handleOpenModal(restaurant.place_id)}
            restaurant={restaurant} />
        ))}
      </Container>
      <Map query={query} placeId={placeId} />
      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} >
        <RestaurantTitle>{restaurantsSelected?.name}</RestaurantTitle>
        <Divider />
        <RestaurantCardModal>
          <RestaurantInfo><MaterialIcon role="button" icon="phone" />{restaurantsSelected?.formatted_phone_number}</RestaurantInfo>
          <RestaurantInfo><MaterialIcon role="button" icon="room" />{restaurantsSelected?.formatted_address}</RestaurantInfo>
          {restaurantsSelected?.opening_hours?.open_now ? (
            <RestaurantInfo><MaterialIcon role="button" icon="check" />Open!</RestaurantInfo>
          ) : (
            <RestaurantInfo><MaterialIcon role="button" icon="close" />Closed!</RestaurantInfo>
          )}
        </RestaurantCardModal>
      </Modal>
    </Wrapper>
  )
}

export default Home;