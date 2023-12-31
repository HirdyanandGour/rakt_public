import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
	main: '#cc002f',
  },
	secondary: {
		main: '#feed00',
	},
	error: {
		main: red.A400,
	},
});
export default theme;
