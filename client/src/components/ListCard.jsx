import React from 'react';
import LineGraph from "./LineGraph";
import '../CSS/ListCard.css'
import StockCard from "./StockCard";
import NewsCard from "./NewsCard";


function ListCard({cardData, userId, cardType='StockCard'}) {

    let card;
    switch (cardType){
        case 'StockCard':
            card = <StockCard stockData={cardData} userId={userId}/>
            break
        case 'NewsCard':
            card = <NewsCard newsData={cardData} userId={userId}/>
            break
        default:
            card = <StockCard stockData={cardData} userId={userId}/>
    }


    return (
        <div className='ListCard'>
            {card}
        </div>
    );
}

export default ListCard;