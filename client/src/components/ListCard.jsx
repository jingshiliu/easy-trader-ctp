import React from 'react';
import LineGraph from "./LineGraph";
import '../CSS/ListCard.css'
import StockCard from "./StockCard";
import NewsCard from "./NewsCard";


function ListCard({cardData, cardType='StockCard'}) {

    let card;
    switch (cardType){
        case 'StockCard':
            card = <StockCard stockData={cardData}/>
            break
        case 'NewsCard':
            card = <NewsCard newsData={cardData}/>
            break
        default:
            card = <StockCard stockData={cardData}/>
    }


    return (
        <div className='ListCard'>
            {card}
        </div>
    );
}

export default ListCard;