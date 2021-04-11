import React from 'react';
import { Avatar, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	container: {
		display: 'flex',
		flexDirection: 'row',
		margin: theme.spacing(2, 1, 2, 1),
		alignItems: 'center',
		borderRadius: '0px 10px 10px 0px',
		transition: 'all 0.2s ease',
		cursor: 'pointer',
		'&:hover, &:focus': {
			background: theme.palette.primary.light,

			'& $bar': {
				background: theme.palette.primary.main,
			},
		},
	},
	bar: {
		height: '50px',
		width: '3px',
		background: theme.palette.component.dark,
		transition: 'all 0.2s ease',
	},
	avatar: {
		background: theme.palette.primary.main,
		marginLeft: theme.spacing(1),
	},
	groupName: {
		overflow: 'ellipsis',
		width: '75%',
		marginLeft: theme.spacing(1),
	},
}));

const GroupListItem = ({ group }) => {
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<div className={classes.bar}>{''} </div>
			<Avatar className={classes.avatar}>{group.name[0]}</Avatar>
			<h4 className={classes.groupName}>{group.name}</h4>
		</div>
	);
};

export default GroupListItem;
