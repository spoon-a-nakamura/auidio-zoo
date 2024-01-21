import styled from '@emotion/styled';
import { VFC } from 'react';
import { Animal } from '../types/animal';

const Root = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 100%;
  top: 5rem;
  @media (orientation: landscape) {
    display: none;
  }
`;

type NavItemProps = {
  navType: 'prev' | 'next';
};
const NavItem = styled.button<NavItemProps>`
  background: #fff;
  display: block;
  border-radius: ${({ navType }) =>
    navType === 'prev' ? '0 100rem 100rem 0' : '100rem 0 0 100rem'};
  padding: 0.4rem;
`;

const Thumbnail = styled.img`
  display: block;
  width: 4rem;
  border-radius: 50%;
`;

type SimpleAnimalNavProps = {
  prev: Animal;
  next: Animal;
  onPrevClick: () => void;
  onNextClick: () => void;
};

const SimpleAnimalNav: VFC<SimpleAnimalNavProps> = ({
  prev,
  next,
  onPrevClick,
  onNextClick,
}) => (
  <Root>
    <NavItem type="button" navType="prev" onClick={onPrevClick}>
      <Thumbnail src={prev.thumbnail} alt="" />
    </NavItem>
    <NavItem type="button" navType="next" onClick={onNextClick}>
      <Thumbnail src={next.thumbnail} alt="" />
    </NavItem>
  </Root>
);

export default SimpleAnimalNav;
