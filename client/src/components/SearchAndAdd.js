import React from 'react';
import { TextField, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	container: {
		marginTop: '25%',
	},
	textField: {
		height: '30px',
		marginRight: theme.spacing(2),
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
	return (
		<div className={classes.container}>
			<TextField
				variant='outlined'
				id='search'
				label='Search'
				name='search'
				autoComplete='search'
				size='small'
				// onChange={onChange}
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
