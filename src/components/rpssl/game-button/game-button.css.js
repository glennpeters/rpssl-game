import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

// Star Trek color palette
// https://www.color-hex.com/color-palette/6450
// Red: #df0000	(223,0,0)
// Gold: #f2c300	(242,195,0)
// Blue: #0099f6	(0,153,246)
// Green: #00b844	(0,184,68)
// Black: #000000	(0,0,0)

export const Button = styled.button`
  font-family: 'Righteous', san-serif;
  margin: 2rem auto;
  font-size: 2.6rem;
  line-height: 1;
  vertical-align: center;
  padding: 0.4em 0.6em;
  display: block;
  border-radius: 5px;
  background-color: rgba(242, 195, 0, 1);
  box-shadow: 1px 1px 5px 1px rgba(33, 33, 33, 0.6);
  text-transform: uppercase;
  transition: 0.2s background-color ease;

  // -webkit-appearance: none;
  // background-color: #fff;
  // border-radius: 5px;
  // border: none;
  // color: #757575;
  // border: 1px solid #ddd;
  // cursor: pointer;
  // font-family: inherit;
  // font-size: 1.3rem;
  // font-weight: 500;
  // margin: 4rem 0 2rem;
  // padding: 1rem 2rem;

  &:active,
  &:focus {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.05);
    outline: none;
  }

  &:hover {
    // background-color: #f9f9f9;
    background-color: rgba(242, 195, 0, 0.8);
    box-shadow: 1px 1px 5px 1px rgba(33, 3, 33, 0.3);
  }

  // & + & {
  //   margin-left: 1rem;
  // }

  ${MEDIA.TABLET`
    margin-bottom: 1rem;
  `};
`;
