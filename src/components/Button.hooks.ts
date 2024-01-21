import { useMemo } from 'react';

export const useAutoIncrementedId = (() => {
  let id = 1;
  return () => {
    return useMemo(() => id++, []);
  };
})();
