import styled, { keyframes } from "styled-components";

const dots = keyframes`
    0% {content: ''}
    33% {content: '.'}
    66% {content: '..'}
    100% {content: '...'}
`;

export const Dots = styled.span`
  &::after {
    content: "";
    animation: ${dots} 2s linear infinite;
  }
`;
