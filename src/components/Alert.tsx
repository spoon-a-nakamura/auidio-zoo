import styled from '@emotion/styled';
import { ReactNode, VFC } from 'react';
import muteIcon from '../images/mute-icon.svg';

const Root = styled.div`
  position: absolute;
  z-index: 9;
  background: rgba(0, 0, 0, 0.75);
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  padding: 2rem;
`;

const Content = styled.div`
  background: #fff;
  border-radius: 1rem;
  margin: auto;
  line-height: ${26 / 18};
  text-align: center;
  font-weight: bold;
  font-size: 1.4rem;
  padding: 2rem;
  @media (orientation: landscape) {
    font-size: 1.8rem;
    padding: 4rem;
  }
  &::before {
    content: '';
    background: url(${muteIcon}) 50% / contain no-repeat;
    width: 8.8rem;
    height: 11.2rem;
    display: block;
    margin: 0 auto 1.5rem;
  }
  > p + p {
    margin-top: ${1.8 * (26 / 18)}rem;
  }
`;

type AlertProps = {
  children: ReactNode;
};

const Alert: VFC<AlertProps> = ({ children }) => (
  <Root>
    <Content>{children}</Content>
  </Root>
);

export default Alert;
