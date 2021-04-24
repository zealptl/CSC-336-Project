import './App.css';
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import theme from './theme';

import GroupsState from './context/groups/groupsState';
import AuthState from './context/auth/authState';

import { SignIn, SignUp } from './layouts/auth';
import { Dashboard } from './layouts/dashboard';

const App = () => {
	return (
		<AuthState>
			<GroupsState>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<Router>
						<div className='App'>
							<Switch>
								<Route path='/auth' component={AuthRouting} />
								<Route path='/dashboard' component={DashboardRouting} />
							</Switch>
						</div>
					</Router>
				</ThemeProvider>
			</GroupsState>
		</AuthState>
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
			<Route path='/dashboard' exact component={Dashboard} />
		</Switch>
	);
};

export default App;
