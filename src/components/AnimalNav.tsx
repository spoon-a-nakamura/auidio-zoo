import styled from '@emotion/styled';
import { motion, Variants } from 'framer-motion';
import { VFC } from 'react';
import { Animal } from '../types/animal';

const Root = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  @media (orientation: portrait) {
    display: none;
  }
  > * + * {
    margin-top: 2rem;
  }
`;

const NavItem = styled.button`
  background: #fff;
  display: block;
  border-radius: 100rem 0 0 100rem;
  padding: 0.4rem 2.4rem 0.4rem 0.4rem;
  display: flex;
  align-items: center;
  transition: transform 0.1s ease-out;
  &:hover:not(:disabled) {
    transform: translateX(-0.5rem);
  }
`;

const Thumbnail = styled.img`
  display: block;
  width: 4rem;
  border-radius: 50%;
  margin-right: 0.4rem;
`;

const Sound = styled(motion.span)`
  white-space: nowrap;
  font-size: 1.2rem;
  color: #a2a2a2;
  display: inline-block;
  overflow: hidden;
`;

const textVariants: Variants = {
  default: {
    width: 0,
  },
  active: {
    width: 'auto',
  },
};

type AnimalNavProps = {
  activeAnimal: Animal;
  animals: readonly Animal[];
  onSelect: (animal: Animal) => void;
};

const AnimalNav: VFC<AnimalNavProps> = ({
  activeAnimal,
  animals,
  onSelect,
}) => (
  <Root>
    {animals.map((animal, index) => (
      <NavItem
        onClick={() => onSelect(animal)}
        key={index}
        disabled={animal === activeAnimal}
      >
        <Thumbnail src={animal.thumbnail} alt="" />
        <Sound
          variants={textVariants}
          initial="default"
          animate={animal === activeAnimal ? 'active' : 'default'}
        >
          {animal.sound}
        </Sound>
      </NavItem>
    ))}
  </Root>
);

export default AnimalNav;
