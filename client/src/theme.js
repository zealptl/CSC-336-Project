import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
	root: {
		margin: '0px',
		padding: '0px',
	},
	palette: {
		type: 'light',
		primary: {
			light: '#DDEEFF',
			main: '#0779E4',
			dark: '#01192F',
		},
		component: {
			light: '#FFFFFF',
			main: '#EEEEEE',
			dark: '#777777',
		},
		text: {
			main: '#01192F',
		},
		task: {
			toDo: 'rgba(119, 119, 119, 0.2)',
			inProgress: 'rgba(255, 196, 0, 0.2)',
			done: 'rgba(39, 211, 171, 0.2)',
		},
		taskBar: {
			toDo: '#777777',
			inProgress: '#FFC400',
			done: '#27D3AB',
		},
	},
});

export default theme;
