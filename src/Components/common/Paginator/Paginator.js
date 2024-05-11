import React from "react";
import style from "../../Users/Users.module.css";

let Paginator = (props) => {
    let pages_count = Math.ceil(props.total_users_count / props.page_size);
    let pages = [];
    for (let i = 1; i < pages_count + 1; i++) {
        pages.push(i)
    }

    return (
        <div className={'pagination'}>
            {pages.map(p => <span className={props.current_page === p && style.selectedPage}
                                  onClick={() => {
                                      props.on_page_changed(p)
                                  }}>{p}</span>)}

        </div>
    )
}

export default Paginator;