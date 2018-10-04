import { CSSProperties, StyleSheet } from 'aphrodite';

interface IStyle {
   container: CSSProperties;
}

export const Styles = StyleSheet.create<IStyle>({
   container: {
      color: 'red'
   }
});
