import React from "react";
import './PageNotFound.css'
import {Link} from "react-router-dom";
const PageNotFound = () => {
    return (<>
            <div className="block">
                <div className="section_page_not_found">
                    <h1>
                        404
                    </h1>
                    <h3>Извините, данная страница не найдена</h3>
                    <h4>Вернуться на главную: </h4>
                    <Link to={'/'}><button className="default_btn">Главная</button></Link>
                </div>
            </div>
        </>
    )
}

export default PageNotFound;