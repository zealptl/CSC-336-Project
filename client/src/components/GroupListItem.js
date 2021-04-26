import React, { useContext } from 'react';
import { Avatar, makeStyles } from '@material-ui/core';

import GroupsContext from '../context/groups/groupsContext';

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

	const groupsContext = useContext(GroupsContext);
	const { setCurrent } = groupsContext;

	return (
		<div
			className={classes.container}
			onClick={(e) => {
				e.preventDefault();
				setCurrent(group);
			}}
		>
			<div className={classes.bar}>{''} </div>
			<Avatar className={classes.avatar}>{group.groupname[0]}</Avatar>
			<h4 className={classes.groupName}>{group.groupname}</h4>
		</div>
	);
};

export default GroupListItem;
