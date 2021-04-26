import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	logoContainer: {
		display: 'flex',
		height: '40px',
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
}));

const AppLogo = () => {
	const classes = useStyles();
	return (
		<div className={classes.logoContainer}>
			<h1>Codename Epsilon</h1>
		</div>
	);
};

export default AppLogo;
