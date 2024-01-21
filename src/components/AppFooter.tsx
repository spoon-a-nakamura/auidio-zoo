import styled from '@emotion/styled';
import { VFC } from 'react';
import fenceS from '../images/fence-s.svg';
import fenceL from '../images/fence-l.svg';
import TwitterIcon from './TwitterIcon';
import InstagramIcon from './InstagramIcon';

const Root = styled.footer`
  background: url(${fenceS}) 0 / 37.5rem 5.45rem no-repeat;
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  height: 5.45rem;
  @media (orientation: landscape) {
    background-image: url(${fenceL});
    background-size: 128rem 5.45rem;
  }
`;

const Box = styled.div`
  position: absolute;
  bottom: 0;
  right: 1rem;
  z-index: 1;
  @media (orientation: landscape) {
    right: auto;
    left: 5rem;
  }
`;

const BoxContent = styled.div`
  border-radius: 100rem;
  background: #fff;
  margin-bottom: 3.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #666;
  padding: 1rem 0.7rem;
  > * + * {
    margin-top: 0.2rem;
  }
`;

const TextLink = styled.a`
  color: currentColor;
  display: block;
  font-size: 1.2rem;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 0.1em;
  writing-mode: vertical-rl;
  text-orientation: sideways;
  margin-bottom: 0.6rem;
  text-decoration: none;
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      color: #111;
    }
  }
`;

const IconLink = styled.a`
  color: currentColor;
  display: block;
  text-decoration: none;
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      color: #111;
    }
  }
`;

const AppFooter: VFC = () => (
  <Root>
    <Box>
      <BoxContent>
        <TextLink
          href="https://studio-spoon.co.jp"
          target="_blank"
          rel="noopener noreferrer"
        >
          © Studio Spoon Inc.
        </TextLink>
        <IconLink
          href="https://twitter.com/studio_spoon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon aria-label="Twitter" />
        </IconLink>
        <IconLink
          href="https://www.instagram.com/studio_spoon/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon aria-label="Instagram" />
        </IconLink>
      </BoxContent>
    </Box>
  </Root>
);

export default AppFooter;
