import React from "react";
import './main.css'

const Main = () => {
    return (
            <div className="block">
                <div className="section_profile">
                    <div className="section_title">
                        <h2>О проекте</h2>
                    </div>
                    <div className="section_body">
                        <p>Привет, меня зовут Сережа!</p>
                        <p>Это мой пет-проект социальной сети написанной на ReactJS.</p>
                        Технологии и библиотеки которые были использованы:
                        <ul>
                            <li>ReactJS</li>
                            <li>Redux</li>
                            <li>ReactRoute v6</li>
                            <li>Formik</li>
                            <li>redux-thunk</li>
                            <li>react-redux</li>
                        </ul>
                        В качестве state management применялся Redux.<br/>
                        В разработке применялись классовые компоненты и их методы жизненного цикла,
                        функциональные компоненты с использованием хуков, компоненты высшего порядка, контейнерные
                        компоненты, а также Thunk.<br/>
                        <p>В веб-приложении реализовано: страница для просмотра своего профиля, изменение профиля,
                            загрузка аватара
                            на странице, просмотр всех зарегистрированных пользователей и их профилей, авторизация,
                            изменение своего статуса.</p>
                        Все данные загружаются технологией REST API <a href="https://social-network.samuraijs.com/docs"><b>
                        отсюда</b></a>
                        <p>Спасибо за внимание!</p><br/>
                        Вы можете войти с помошью тестового аккаунта <br/>
                        <b>Email:</b> free@samuraijs.com <br/>
                        <b>Password:</b> free
                    </div>
                </div>
            </div>
    )
}

export default Main;