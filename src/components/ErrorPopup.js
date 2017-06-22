import React from 'react';
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
`;

const Overlay = styled(Flex)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.5);
  z-index: 100;
  user-select: none;
`;

const Popup = styled(Flex)`
  flex-direction: column;
  width: 100%;
  max-width: 360px;
  height: auto;
  padding: 25px;
  font-size: 24px;
  line-height: 1.25;
  text-align: center;
  background-color: #fff;
`;

const Close = styled(Flex)`
  margin-top: 25px;
  padding: 10px;
  background-color: #00446b;
  background: linear-gradient(to top, #00446b 0%, #47006b 100%);
  font-weight: 700;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
`;

export default function ErrorPopup(props) {
  return(
    <Overlay>
      <Popup>
        {props.children}
        <Close onClick={props.onClick}>
          Got it!
        </Close>
      </Popup>
    </Overlay>
  );
}