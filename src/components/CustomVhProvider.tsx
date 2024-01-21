import { ReactNode, useEffect, VFC } from 'react';

const useVhProperty = () => {
  useEffect(() => {
    const updateVhProperty = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    updateVhProperty();
    window.addEventListener('resize', updateVhProperty);
    return () => {
      document.documentElement.style.removeProperty('--vh');
      window.removeEventListener('resize', updateVhProperty);
    };
  }, []);
};

type CustomVhProviderProps = {
  children: ReactNode;
};
const CustomVhProvider: VFC<CustomVhProviderProps> = ({ children }) => {
  useVhProperty();

  return <>{children}</>;
};

export default CustomVhProvider;
