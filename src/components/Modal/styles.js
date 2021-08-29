import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background-color: rgba(184, 155, 205, 0.37);
  backdrop-filter: blur(5px);

  z-index: 9999;
`;

export const Dialog = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  max-height: calc(100% - 144px);
  width: 500px;
  padding: 24px;

  background-color: #fff;
  box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px
`;