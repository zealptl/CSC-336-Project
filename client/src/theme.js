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
			dark: '#77777',
		},
		text: {
			main: '#01192F',
		},
		task: {
			toDo: '#777777',
			inProgress: '#FFC400',
			done: '#27D3AB',
		},
	},
});

export default theme;
