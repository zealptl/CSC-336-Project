import React, { useContext, useRef } from 'react';
import { TextField, Button, makeStyles } from '@material-ui/core';

import GroupsContext from '../context/groups/groupsContext';

const useStyles = makeStyles((theme) => ({
	container: {
		marginTop: '25%',
	},
	textField: {
		height: '38px',
		width: '180px',
		marginRight: theme.spacing(2),
		padding: theme.spacing(1),
		borderRadius: '4px',
		background: 'none',
		border: `2px solid ${theme.palette.component.dark}`,
		textDecoration: 'none',
		transition: 'all 0.2s ease',
		'&:focus': {
			border: `2px solid ${theme.palette.primary.main}`,
			outline: 'none',
		},
	},
	button: {
		border: `2px solid ${theme.palette.primary.main}`,
		borderRadius: '10px',
		marginLeft: theme.spacing(2),
		'&:hover': {
			background: theme.palette.primary.main,
			color: '#FFF',
		},
	},
}));

const SearchAndAdd = () => {
	const classes = useStyles();

	const groupsContext = useContext(GroupsContext);
	const { searchGroups, clearSearch } = groupsContext;

	const text = useRef();

	const onChange = (e) => {
		console.log('in onchage');
		if (text.current.value !== '') {
			console.log(e.target.value);
			searchGroups(e.target.value);
		} else {
			clearSearch();
		}
	};

	return (
		<div className={classes.container}>
			<input
				variant='outlined'
				id='search'
				label='Search'
				ref={text}
				type='text'
				size='small'
				onChange={onChange}
				placeholder='Search'
				className={classes.textField}
			/>
			<Button
				variant='outline'
				size='large'
				color='primary'
				className={classes.button}
			>
				+ New
			</Button>
		</div>
	);
};

export default SearchAndAdd;
