import styled from '@emotion/styled';
import { VFC } from 'react';
import logo from '../images/logo.svg';
import ribbon from '../images/ribbon.svg';

const Logo = styled.div`
  mix-blend-mode: difference;
  text-align: center;
  position: absolute;
  inset: 0;
  top: 5rem;
  margin: 0 auto auto;
  width: fit-content;
  @media (orientation: landscape) {
    inset: auto;
    top: 5rem;
    right: 5.3rem;
  }
`;

const LogoHeading = styled.h1`
  width: 18.36rem;
  height: 3.23rem;
  display: block;
  background: url(${logo}) 50% / contain no-repeat;
  overflow: hidden;
  text-indent: -1000vw;
  margin: auto;
  @media (orientation: landscape) {
    width: 21.216rem;
    height: 3.734rem;
  }
`;

const LogoText = styled.p`
  font-size: 1.1rem;
  color: #bfbfbf;
  line-height: 1;
  margin-top: 0.6rem;
  font-weight: bold;
  @media (orientation: landscape) {
    font-size: 1.2rem;
    letter-spacing: 0.06em;
  }
`;

const RibbonImage = styled.img`
  width: 11rem;
  height: 6.1rem;
  display: block;
  position: absolute;
  top: 0.6rem;
  left: calc(50% + 2rem);
  @media (orientation: landscape) {
    width: 14.58rem;
    height: 8.13rem;
    top: 0.1rem;
    left: auto;
    right: -1.2rem;
  }
`;

const AppLogo: VFC = () => (
  <>
    <Logo>
      <LogoHeading>ANIMAL FACE</LogoHeading>
      <LogoText>スタジオスプーンのアニマルフェイス</LogoText>
    </Logo>
    <RibbonImage src={ribbon} alt="STUDIO SPOON" />
  </>
);

export default AppLogo;
