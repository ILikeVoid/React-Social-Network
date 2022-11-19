import React from 'react'
import {reduxForm} from "redux-form";
import {createField, Input} from "../common/FormControl/FormControl";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";
import style from './../common/FormControl/FormControl.module.css'

const maxLength50 = maxLengthCreator(50)

const LoginForm = ({handleSubmit, captchaUrl, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                {createField('Email', 'email', Input, [required, maxLength50])}
                {createField('Password', 'password', Input, [required, maxLength50], {type: 'passward'})}
                {createField(null, 'rememberMe', Input, null, {type: 'checkbox'}, 'remember me')}

                { captchaUrl && <img src={captchaUrl}/> }
                { captchaUrl && createField('Сиволы из картинки', "", Input, [required], {})}
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

const Login = ({login, isAuth, captchaUrl}) => {

    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if(isAuth) {
        return <Navigate to={'/profile/25123'}/>
    }

    return (
        <div>
          <h1>Login</h1>
          <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}
export default connect(mapStateToProps, {login})(Login)