import React from 'react';
import {
	Avatar,
	Button,
	CssBaseline,
	Grid,
	makeStyles,
	Link,
	Typography,
	TextField,
} from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import Illustration from '../../assets/auth_illustration.svg';

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100vh',
	},
	illustrationSection: {
		background: `linear-gradient(270deg, #FFFFFF 50%, #FFFFFF 50.01%, #${theme.palette.primary.light} 100%);`,
	},
	illustration: {
		position: 'absolute',
		bottom: '15%',
		left: '5%',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.primary.main,
	},
	typography: {
		color: theme.palette.primary.dark,
		marginBottom: theme.spacing(2),
	},
	formContainer: {
		marginTop: theme.spacing(10),
		marginRight: theme.spacing(10),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	form: {
		width: '100%',
		marginTop: theme.spacing(1),
	},
	TextField: {
		backgroundColor: theme.palette.primary.light,
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
		float: 'right',
		borderRadius: '50px',
	},
}));

const SignInForm = ({ classes }) => {
	return (
		<div className={classes.formContainer}>
			<Avatar className={classes.avatar}>
				<LockIcon />
			</Avatar>
			<Typography component='h1' variant='h5' className={classes.typography}>
				Sign In
			</Typography>
			<form action='' className={classes.form}>
				<TextField
					variant='outlined'
					margin='normal'
					required
					fullWidth
					id='email'
					label='Email Address'
					name='email'
					autoComplete='email'
					autoFocus
				/>
				<TextField
					variant='outlined'
					margin='normal'
					required
					fullWidth
					name='password'
					label='Password'
					type='password'
					id='password'
					autoComplete='current-password'
				/>
				<Button
					type='submit'
					variant='contained'
					color='primary'
					className={classes.submit}
				>
					Sign In
				</Button>
				<Grid container justify='flex-end'>
					<Grid item>
						<Link variant='body2'>{"Don't have an account? Sign Up"}</Link>
					</Grid>
				</Grid>
			</form>
		</div>
	);
};

const SignIn = () => {
	const classes = useStyles();
	return (
		<Grid container className={classes.root}>
			<CssBaseline />
			<Grid item xs={7} className={classes.illustrationSection}>
				<img
					src={Illustration}
					alt='Authentication illustration'
					className={classes.illustration}
				/>
			</Grid>
			<Grid item xs={5}>
				<SignInForm classes={classes} />
			</Grid>
		</Grid>
	);
};

export default SignIn;
