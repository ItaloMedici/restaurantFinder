import React, { useState } from "react";
import TextField, { HelperText, Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';
import { Wrapper, Container, Search, Logo, Map } from "./styles";

const Home = () => {
  const [value, setValue] = useState('');

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
      </Search>
    </Container>
    <Map />
    </Wrapper>
  )
}

export default Home;