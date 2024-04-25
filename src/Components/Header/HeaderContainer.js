import React from "react";
import Header from "./Header";
import axios from "axios";
import {set_user_data} from "../../redux/auth_reducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {

    constructor(props) {
        super(props);
        this.instance = axios.create({
            withCredentials: true,
            baseURL: 'https://social-network.samuraijs.com/api/1.0',
            headers : {
                'API-KEY': '34f0d779-a61f-4db4-bd78-26a75ab1e0bf',
            }
        })
    }

    componentDidMount() {
        this.instance.get(`/auth/me`).then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                this.props.set_user_data({id, login, email});
                console.log({id, login, email});
            }
        });

    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect(mapStateToProps, {set_user_data})(HeaderContainer);