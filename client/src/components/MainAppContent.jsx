import '../CSS/MainAppContent.css'
import React from 'react';
import BuyingPower from "./BuyingPower";
import Options from "./Options";
import TrendingStocks from "./TrendingStocks";
import PortfolioStats from "./PortfolioStats";

function MainAppContent({stockCandles}) {
    return (
        <main className='MainAppContent'>
            <div className="MainBodyContent__column">
                <BuyingPower />
                <PortfolioStats stockCandles={stockCandles}/>
            </div>

            <div className="MainBodyContent__column">
                <Options />
                <TrendingStocks stockCandles={stockCandles} />
            </div>

            <div className="MainBodyContent__column">
                {/*<News />*/}
            </div>
        </main>
    );
}

export default MainAppContent;