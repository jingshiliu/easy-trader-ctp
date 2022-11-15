import React from 'react';
import './ListDisplay'
import ListDisplay from "./ListDisplay";

function TrendingStocks({stockCandles}) {
    return (
        <div className='TrendingStocks'>
            <ListDisplay title='Recommending Stocks' listData={stockCandles}/>
        </div>
    );
}

export default TrendingStocks;