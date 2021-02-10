import theme from '../styles/theme';
import 'styled-components/native';

type Theme = typeof theme;

declare module 'styled-components/native' {
  export interface DefaultTheme extends Theme {}
}
