import { createContext, useContext } from 'react';
import { vars } from '../../themes/contract.css';
import { StrumProviderProps } from './StrumProvider';

interface StrumContext {
  colorScheme: StrumProviderProps['colorScheme'];
  theme: string | null;
}

export const StrumContext = createContext<StrumContext>(null);

export const useStrumTheme = () => {
  const { colorScheme, theme } = useContext(StrumContext);

  if (theme === null) {
    throw new Error('No Strum theme available on context');
  }

  return { colorScheme, themeClass: theme, vars };
};
