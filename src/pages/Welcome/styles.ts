import { TextProps } from 'react-native';
import { SafeAreaViewProps } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView<SafeAreaViewProps>`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Message = styled.Text<TextProps>`
  font-size: ${({ theme }) => theme.font.sizes.xlarge};
  font-weight: ${({ theme }) => theme.font.light};
  color: ${({ theme }) => theme.colors.black};
`;
