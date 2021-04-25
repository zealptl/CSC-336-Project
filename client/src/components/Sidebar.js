import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, makeStyles } from '@material-ui/core';
import AuthContext from '../context/auth/authContext';

import { AppLogo, GroupList, SearchAndAdd } from './index';

const useStyles = makeStyles((theme) => ({
	container: {
		position: 'relative',
		background: theme.palette.component.light,
		borderRadius: '20px',
		boxShadow: '4px 4px 8px rgba(1, 25, 47, 0.08)',
		height: '100%',
		padding: theme.spacing(2),
		marginLeft: theme.spacing(1),
	},
	signoutContianer: {
		display: 'flex',
		justifyContent: 'center',
		position: 'absolute',
		bottom: '16px',
		left: '30%',
	},
	signout: {
		border: `2px solid ${theme.palette.primary.main}`,
		borderRadius: '10px',

		'&:hover': {
			background: theme.palette.primary.main,
			color: '#FFF',
		},
	},
}));

const Sidebar = ({ groups }) => {
	const classes = useStyles();

	const authContext = useContext(AuthContext);
	const { signout } = authContext;

	const history = useHistory();

	const onSignOut = () => {
		signout();
		history.push('/auth/signin');
	};

	return (
		<div className={classes.container}>
			<AppLogo />
			<SearchAndAdd />
			<GroupList groups={groups} />

			<div className={classes.signoutContianer}>
				<Button
					onClick={onSignOut}
					variant='outlined'
					className={classes.signout}
				>
					{' '}
					Sign Out
				</Button>
			</div>
		</div>
	);
};

export default Sidebar;
