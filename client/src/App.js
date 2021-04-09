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
import { dashboard, Dashboard2 } from './layouts/dashboard';
import Sidebar from './components/Sidebar';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Router>
				<div className='App'>
					<Switch>
						<Route path='/auth' component={AuthRouting} />
						<Route path='/dashboard' component={DashboardRouting} />
						<Route path='/dashboard/sidebar' component={Sidebar} />
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

const DashboardRouting = () => {
	return (
		<Switch>
			<Route path='/dashboard' exact component={Dashboard2} />
		</Switch>
	);
};

export default App;
