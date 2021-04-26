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
			'To Do': 'rgba(119, 119, 119, 0.2)',
			'In Progress': 'rgba(255, 196, 0, 0.2)',
			Done: 'rgba(39, 211, 171, 0.2)',
		},
		taskBar: {
			'To Do': '#777777',
			'In Progress': '#FFC400',
			Done: '#27D3AB',
		},
	},
});

export default theme;
