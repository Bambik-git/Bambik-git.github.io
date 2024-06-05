import React from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
})

/*
* HOC компонента проверяет авторизацмю пользователя, в случае отрицательного результата перенаправляет на страницу
* авторизации
* */

export const withAuthRedirect = (Component) => {
    debugger;
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Navigate to={'/login'}/>
                return <Component {...this.props}/>
        }
    }
    return connect(mapStateToPropsForRedirect)(RedirectComponent);
}