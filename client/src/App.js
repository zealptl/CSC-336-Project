import './App.css';
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import theme from './theme';

import { SignIn, SignUp } from './layouts/auth';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Router>
				<div className='App'>
					<Switch>
						<Route path='/auth' component={AuthRouting} />
					</Switch>
				</div>
			</Router>
		</ThemeProvider>
	);
};

const AuthRouting = () => {
	return (
		<Switch>
			<Redirect exact from='/auth' to='/auth/signin' />
			<Route path='/auth/signup' exact component={SignUp} />
			<Route path='/auth/signin' exact component={SignIn} />
		</Switch>
	);
};

export default App;
