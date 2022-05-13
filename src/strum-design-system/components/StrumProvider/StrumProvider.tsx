import React, { PropsWithChildren, useEffect } from 'react';
import { timbre } from '../../themes';
import {
  darkScheme,
  lightScheme,
  systemScheme,
} from '../../themes/colorScheme.css';
import { StrumContext } from './StrumContext';

export interface StrumProviderProps {
  colorScheme?: 'dark' | 'light' | 'system';
  theme?: string | null;
}

const StrumProvider: React.FC<PropsWithChildren<StrumProviderProps>> = (
  props,
) => {
  const { children, colorScheme = 'system', theme = timbre } = props;

  useEffect(() => {
    let colorSchemeStyle;
    switch (colorScheme) {
      case 'dark':
        colorSchemeStyle = darkScheme;
        break;
      case 'light':
        colorSchemeStyle = lightScheme;
        break;
      default:
        colorSchemeStyle = systemScheme;
        break;
    }
    document.documentElement.className = colorSchemeStyle;
  }, [colorScheme, theme]);

  return (
    <>
      <StrumContext.Provider value={{ colorScheme, theme }}>
        <div className={theme}>{children}</div>
      </StrumContext.Provider>
    </>
  );
};

export default StrumProvider;
