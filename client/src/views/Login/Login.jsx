import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { Formik } from 'formik'
import { Form } from 'react-bootstrap'
import { signIn } from '../../api/auth'

const Login = () => {
	const history = useHistory()

	const handleLogin = async (values) => {
		const token = await signIn(values)
		if (token) {
			localStorage.setItem('auth-token', token)
			history.push('/')
		} else {
			console.log('err')
		}
	}

	return (
		<div style={{ width: '50vh', margin: 'auto', marginTop: '10vh' }}>
			<h3>Login</h3>
			<Formik
				initialValues={{ email: '', password: '' }}
				onSubmit={handleLogin}
				// onSubmit={handleLogin}
				render={({
					values,
					errors,
					touched,
					handleChange,
					handleSubmit,
					isSubmitting,
					setFieldValue
				}) => (
					<Form onSubmit={handleSubmit}>
						<div className='form-group'>
							<label htmlFor='exampleInputEmail1'>Email address</label>
							<input
								onChange={handleChange}
								value={values.email}
								type='email'
								className='form-control'
								id='exampleInputEmail1'
								aria-describedby='emailHelp'
								placeholder='Enter email'
								name='email'
							/>
							<small id='emailHelp' className='form-text text-muted'>
								We'll never share your email with anyone else.
							</small>
						</div>
						<div className='form-group'>
							<label htmlFor='exampleInputPassword1'>Password</label>
							<input
								onChange={handleChange}
								value={values.password}
								type='password'
								className='form-control'
								id='exampleInputPassword1'
								placeholder='Password'
								name='password'
							/>
						</div>
						<div className='form-group form-check'>
							<input type='checkbox' className='form-check-input' id='exampleCheck1' />
							<label className='form-check-label' htmlFor='exampleCheck1'>
								Logged me in
							</label>
						</div>
						<button type='submit' className='btn btn-primary'>
							Submit
						</button>
						<br />
						<NavLink to={'/register'}>
							<p style={{ marginTop: '10px' }}>Register instead? </p>
						</NavLink>
					</Form>
				)}
			/>
		</div>
	)
}

export default Login
