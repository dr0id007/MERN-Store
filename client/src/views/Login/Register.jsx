import React , {useState} from 'react'
import { NavLink , useHistory } from 'react-router-dom'
import { Formik } from 'formik'
import { Form } from 'react-bootstrap'
import { signUp } from '../../api/auth'

const Register = () => {
    
    const history = useHistory()
    
    const handleLogin = async (values) => {
        const token = await signUp(values);
        if(token) {
        localStorage.setItem('auth-token' , token)
        history.push('/')
        }  else {
            console.log('err')
        }
    }

    return (
        <div style={{width: "50vh" , margin: "auto" , marginTop: '10vh'}}>
            <Formik initialValues={{name:'' , email: '', password: ''}} 
          onSubmit={handleLogin}
          // onSubmit={handleLogin}
            render={( { values,
                errors,
                touched,
                handleChange,
                handleSubmit,
                isSubmitting,
                setFieldValue }) => (
                <Form  onSubmit={handleSubmit}
                    >
                    <div className="form-group">
                        <label>Name</label>
                        <input onChange={handleChange}
                        value={values.name}  type="text" className="form-control" placeholder="Enter Full Name" name="name"/>
                    </div>
                    <div className="form-group">
                        <label>Email address</label>
                        <input onChange={handleChange}
                        value={values.email}  type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" name="email"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input onChange={handleChange}
                        value={values.password} type="password" className="form-control" placeholder="Password" name="password"/>
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <br />
                    <NavLink to={'/register'} ><span style={{paddingTop: '10px' }} >Register instead? </span></NavLink>
                    </Form>
                )}
                />
        </div>
    )
}

export default Register
