import '../CSS/MainAppContent.css'
import React from 'react';
import BuyingPower from "./BuyingPower";
import Options from "./Options";
import TrendingStocks from "./TrendingStocks";
import PortfolioStats from "./PortfolioStats";
import News from "./News";

function MainAppContent({stockCandles, news}) {
    return (
        <main className='MainAppContent'>
            <div className="MainBodyContent__column">
                <BuyingPower />
                <PortfolioStats stockCandles={stockCandles}/>
            </div>

            {/*<div className="MainBodyContent__column">*/}
            {/*    <Options />*/}
            {/*    <TrendingStocks stockCandles={stockCandles} />*/}
            {/*</div>*/}

            <div className="MainBodyContent__column">
                <News news={news}/>
            </div>
        </main>
    );
}

export default MainAppContent;