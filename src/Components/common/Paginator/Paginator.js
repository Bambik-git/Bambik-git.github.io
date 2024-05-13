import React, {useState} from "react";
import style from "../../Users/Users.module.css";

let Paginator = ({portionSize = 10, ...props}) => {
    let pages_count = Math.ceil(props.total_users_count / props.page_size);
    let pages = [];
    for (let i = 1; i < pages_count + 1; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pages_count/portionSize);
    const [portionNumber, setPortionNumber] = useState(Math.ceil(props.current_page/portionSize));
    let leftPortion = (portionNumber - 1) * portionSize + 1;
    let rightPortion = portionNumber * portionSize;


    return (
        <div className={'pagination'}>
            { portionNumber > 1 &&
                <button onClick={() => {setPortionNumber(portionNumber - 1) } }> PREV </button> }
            {pages
                .filter((p) => p >= leftPortion && p <= rightPortion)
                .map((p) => {
                    return <span className={props.current_page === p && style.selectedPage}
                                key={p}
                                  onClick={() => {props.on_page_changed(p)}}>{p}</span>
                })}
            { portionCount > portionNumber &&
                <button onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}>NEXT</button> }

        </div>
    )
}

export default Paginator;