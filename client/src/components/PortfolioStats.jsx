import React from 'react';
import ListDisplay from "./ListDisplay";

function PortfolioStats({stockCandles, userId}) {
    return (
        <div className='PortfolioStats'>
            <ListDisplay listData={stockCandles} userId={userId}  title='Portfolio'/>
        </div>
    );
}

export default PortfolioStats;