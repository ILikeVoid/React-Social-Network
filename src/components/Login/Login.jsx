import React from 'react'
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormControl/FormControl";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";
import style from './../common/FormControl/FormControl.module.css'

const maxLength50 = maxLengthCreator(50)

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                {createField('Email', 'email', Input, [required, maxLength50])}
                {createField('Password', 'password', Input, [required, maxLength50], {type: 'passward'})}
                {createField(null, 'rememberMe', Input, null, {type: 'checkbox'}, 'remember me')}
                {error && <div className={style.formSummaryError}>
                    {error}
                </div>}
                <div>
                    <button>Login</button>
                </div>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = ({login, isAuth}) => {

    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe)
    }

    if(isAuth) {
        return <Navigate to={'/profile/25637'}/>
    }

    return (
        <div>
          <h1>Login</h1>
          <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}
export default connect(mapStateToProps, {login})(Login)