import React from 'react';
import '../CSS/ListDisplay.css'
import ListCard from "./ListCard";
import {nanoid} from "nanoid";


function ListDisplay({listData, title, userId, cardType='StockCard'}) {

    return (
        <section className='ListDisplay'>
            <div className="ListDisplay__container">
                <div className="ListDisplay__header">
                    <p>{title}</p>
                </div>

                <div className="ListDisplay__content">
                    <div className="ListDisplay__rows">
                        {listData.map(s => <ListCard cardData={s} userId={userId} cardType={cardType} key={nanoid()} />)}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ListDisplay;