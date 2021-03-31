import './App.css';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import theme from './theme';

import { SignIn, SignUp } from './layouts/auth';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
		</ThemeProvider>
	);
};

export default App;
