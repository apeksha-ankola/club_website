import styled from "styled-components";

export const Button = styled.button`
  border: none;
  outline: none;

  width: 100%;
  cursor: pointer;

  text-decoration: none;
  max-width: auto;
  background-color: hsl(230, 62%, 56%);
  color:hsl(0, 0%, 100%);
  padding: 1rem 1.5rem;
  
  text-transform: uppercase;
  text-align: center;
  
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;

  &:hover,
  &:active {
    box-shadow: 0 4px 32px hsla(230, 72%, 32%, .4);
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: scale(0.96);
  }

  a {
    text-decoration: none;
    color: rgb(255 255 255);
    font-size: 1.8rem;
  }
`;