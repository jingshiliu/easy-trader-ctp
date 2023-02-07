import React from 'react';
import ListDisplay from "./ListDisplay";

function PortfolioStats({stockCandles}) {
    return (
        <div className='PortfolioStats'>
            <ListDisplay listData={stockCandles} title='Portfolio'/>
        </div>
    );
}

export default PortfolioStats;