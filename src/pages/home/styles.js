import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
`;

export const Container = styled.aside`
  background-color: ${props => props.theme.colors.background};
  width: 360px;
  height: 100vh;
  overflow-y: auto;
`;

export const Search = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;  

export const Logo = styled.img`
  margin-bottom: 20px;
`;

export const Map = styled.div`
  background-color: red;
  flex: 1;
`;