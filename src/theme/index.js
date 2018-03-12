// @flow
import 'typeface-roboto';
import { createMuiTheme } from 'material-ui/styles';
import { cyan, fullWhite } from 'material-ui/colors';

type Theme = () => Object;

const theme: Theme = createMuiTheme({
  palette: {
    primary: cyan,
    secondary: fullWhite
  }
});

export default theme;
