import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import './login.css'
import {connect} from "react-redux";
import {loginTC} from "../../redux/auth_reducer";
import {Navigate} from "react-router-dom";
import loginFormSchema from "../FormValidation/LoginFormSchema";


const Login = ({isAuth, loginTC}) => {

    if (isAuth) {
        return <Navigate to={'/profile'}/>
    }

    return (
        <div className='block block_login'>
            <div className="section_login">
                <div className="section_title">
                    <h2>Вход</h2>
                </div>
                <div className="section_login_body">
                    <div className="section_login_input">
                        <Formik
                            initialValues={{email: "", password: "", rememberMe: false}}
                            /*
                            Валидация введенного email
                             */
                            validate={values => {
                                const errors = {};
                                if (!values.email) {
                                    errors.email = 'Необходимо ввести email';
                                } else if (
                                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                ) {
                                    errors.email = 'Неверный e-mail адресс';
                                }
                                return errors;
                            }}
                            onSubmit={(values, actions) => {
                                loginTC(values.email, values.password, values.rememberMe, actions.setStatus);
                            }}
                            /*
                            Валидация пароля
                             */
                            validationSchema={loginFormSchema}
                        >
                            {({status}) => (
                                <Form>
                                    {/*Блок отображения ошибки пришедшей с сервера*/}
                                    {status && status.message && (
                                        <div className="error_message_block">{status.message}</div>
                                    )}

                                    <div>
                                        <label className="login_label"> E-mail</label>
                                        <Field className="login_input default_input" type={'text'} name={'email'}/>
                                    </div>
                                    <ErrorMessage name="email" component="div" className={'error_message_text'}/>

                                    <div>
                                        <label className="login_label">Пароль</label>
                                        <Field className="login_input default_input" type={'password'} name={'password'}/>
                                    </div>
                                    <ErrorMessage name="password" component="div" className={'error_message_text'}/>

                                    <div>
                                        <Field className="checkbox_input default_input" type={'checkbox'}
                                               name={'rememberMe'}/>
                                        <label className="login_label" htmlFor={'rememberMe'}> Запомнить меня </label>
                                    </div>
                                    <ErrorMessage name="rememberMe" component="div"/>

                                    <button className="default_btn login_btn" type={'submit'}>Войти</button>
                                </Form>
                            )}
                        </Formik>
                        <a href="https://social-network.samuraijs.com/signUp" target='_blank'>
                            <button className="default_btn login_btn"> Зарегистрироваться</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>)
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}
export default connect(mapStateToProps, {loginTC})(Login);