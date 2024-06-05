import React, {useState} from "react";
import './Paginator.css'
import cn from 'classnames'

let Paginator = ({portionSize = 10, current_page = 1, total_users_count, page_size, getUsersThunkCreator}) => {
    /**
     * Component props:
     * @param {number} current_page - текущвя выбранная страница страница
     * @param {number} total_users_count - общее количество пользователей полученных через API запрос
     * @param {number} page_size - количество пользователей отображаемых на одной странице полученных через API запрос
     * @param {function} getUsersThunkCreator - thunk делает API запрос для получения пользователей
     *
     * Component variables:
     * @param {number} pages_count - вычисление общенго количества страниц в пагинации
     * @param {number} portionCount - расчет количества порции в пагинации. Т.е. количество отображаемых страниц в пагинации без переключения
     * @param {number} portionNumber - номер текущей порции на которой находится пользователь
     * @param {number} leftPortion - начало отображаемого списка страниц пагинации
     * @param {number} rightPortion - конец отображаемого списка страниц пагинации
     *
     * Например, отображается 10 страниц пагинации это значит, что левый край равен 1ой странице, а правый 10ой странице.
     * Следователной вторая порция равна от 11 до 20ой страницы и т.д.
     * При условии что размер порции = 10.
     */


    let pages_count = Math.ceil(total_users_count / page_size);
    let pages = [];
    for (let i = 1; i < pages_count + 1; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pages_count/portionSize);
    const [portionNumber, setPortionNumber] = useState(Math.ceil(current_page/portionSize));
    let leftPortion = (portionNumber - 1) * portionSize + 1;
    let rightPortion = portionNumber * portionSize;


    return (

        <div className='pagination'>
            {portionNumber > 1 &&
                <>
                    {/*Кнопки для переключения между порциями и переключения на самую первую порцию*/}
                    <button type="button" className="default_btn pagination_btn" onClick={() => {
                        setPortionNumber(1)
                    }}> &lt; &lt; </button>
                    <button type="button" className="default_btn pagination_btn" onClick={() => {
                        setPortionNumber(portionNumber - 1)
                    }}> &lt; </button>

                </>
            }
            {/*Отображение только тех страниц, которые входя в данную порцию. Например порция 3 - страницы 21-30*/}
            {pages
                .filter((p) => p >= leftPortion && p <= rightPortion)
                .map((p) => {
                    return <span className={cn({
                        'paginator_item':true,
                        'pagination_active': current_page === p})}
                                 key={p}
                                 onClick={() => {
                                     getUsersThunkCreator(p, page_size)
                                 }}>{p}</span>
                })}
            {portionCount > portionNumber &&
                <>
                    {/*Кнопки для переключения между порциями и переключения на самую последнюю порцию*/}
                <button type="button" className="default_btn pagination_btn" onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}> &gt; </button>
                <button type="button" className="default_btn pagination_btn" onClick={() => {
                setPortionNumber(portionCount)
            }}> &gt; &gt; </button>
                </>
            }
        </div>
    )
}

export default Paginator;