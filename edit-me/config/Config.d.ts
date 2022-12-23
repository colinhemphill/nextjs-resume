import accents from '../../src/tokens/accents';
import neutrals from '../../src/tokens/neutrals';

interface ResumeConfig {
  accentColor: keyof typeof accents;
  neutralColor: keyof typeof neutrals;
  ogImageTheme: 'dark' | 'light';
}
