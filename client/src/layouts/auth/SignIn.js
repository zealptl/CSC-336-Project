import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
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
import AuthContext from '../../context/auth/authContext';


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
	const authContext = useContext(AuthContext);
	const { signin, isAuthenticated, error, clearErrors } = authContext;

	const [signinInfo, setSigninInfo] = useState({
		email: '',
		password: '',
	});

	useEffect(() => {
		if (isAuthenticated) {
		  props.history.push(`/dashboard`);
		}
	
		if (error) {
		  console.log('Error', error);
		  clearErrors();
		}
	
		// eslint-disable-next-line
	}, [error, isAuthenticated, props.history]);

	const onChange = (e) =>
		setSigninInfo({ ...signinInfo, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();
		if (email === '' || password === '') {
			console.log('Please fill in all the fields', error);
		} else {
			signin(email, password);
		}
	};

	return (
		<div className={classes.formContainer}>
			<Avatar className={classes.avatar}>
				<LockIcon />
			</Avatar>
			<Typography component='h1' variant='h5' className={classes.typography}>
				Sign In
			</Typography>
			<form action='' className={classes.form} onSubmit={onSubmit}>
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
					onChange={onChange}
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
					onChange={onChange}
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
						<RouterLink to='/auth/signup'>
							<Link variant='body2'>{"Don't have an account? Sign Up"}</Link>
						</RouterLink>
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
