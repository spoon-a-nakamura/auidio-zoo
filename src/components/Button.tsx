import styled from '@emotion/styled';
import { motion, Variants } from 'framer-motion';
import React, { ReactNode, VFC } from 'react';
import { useAutoIncrementedId } from './Button.hooks';

const Root = styled(motion.button)`
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: #fff;
  border-radius: 100rem;
  margin: auto;
  font-size: 1.8rem;
  width: 16.5rem;
  aspect-ratio: 19.5 / 6;
  @media (orientation: landscape) {
    font-size: 2.6rem;
    width: 19.5rem;
  }
  &:active {
    transform: scale(0.98);
  }
`;

const Svg = styled.svg`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

type ButtonProps = {
  children: ReactNode;
  onClick?: React.HTMLProps<HTMLButtonElement>['onClick'];
};

const variants: Variants = {
  default: {
    fill: '#f48587',
    transition: {
      duration: 0.1,
      ease: 'easeOut',
    },
  },
  active: {
    fill: '#92C3C6',
    transition: {
      duration: 0.1,
      ease: 'easeOut',
    },
  },
};

const Button: VFC<ButtonProps> = ({ children, onClick }) => {
  const id = useAutoIncrementedId();
  const clipPathId = `button-clip-path-${id}`;
  return (
    <Root
      initial="default"
      whileTap="active"
      whileHover="active"
      type="button"
      onClick={onClick}
    >
      <Svg width="195" height="60" viewBox="0 0 195 60">
        <defs>
          <clipPath id={clipPathId}>
            <motion.rect
              width="195"
              height="60"
              rx="30"
              transform="translate(540 509)"
              variants={variants}
            />
          </clipPath>
        </defs>
        <g transform="translate(-540 -509)">
          <motion.g
            transform="translate(540 509)"
            stroke="rgba(255,255,255,0.43)"
            strokeWidth="2"
            variants={variants}
            // fill={color}
          >
            <rect width="195" height="60" rx="30" stroke="none" />
            <rect x="1" y="1" width="193" height="58" rx="29" fill="none" />
          </motion.g>
          <g clipPath={`url(#${clipPathId})`}>
            <path
              d="M532.8,558.339c-17.549-41.5-7.943-34.478,20.229-16.652s47.617,23.247,116.527,23.247,99.7-13.457,108.1-23.247,25.49-17.545,23.553,5.729,12.707,35.739-65.948,48.675S550.348,599.834,532.8,558.339Z"
              transform="translate(-28.617 -7.625)"
              opacity="0.08"
              fill="#000"
            />
          </g>
          <circle
            cx="6"
            cy="6"
            r="6"
            transform="translate(556 520)"
            fill="#fff"
            opacity="0.453"
          />
          <circle
            cx="3.5"
            cy="3.5"
            r="3.5"
            transform="translate(570 517)"
            fill="#fff"
            opacity="0.453"
          />
        </g>
      </Svg>
      {children}
    </Root>
  );
};
export default Button;
