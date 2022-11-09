import '../CSS/MainAppContent.css'
import React from 'react';
import Stats from "./Stats";
import BuyingPower from "./BuyingPower";
import Options from "./Options";

function MainAppContent({stockCandles}) {
    return (
        <main className='MainAppContent'>
            <div className="MainBodyContent__column">
                <BuyingPower />
                <Stats stockCandles={stockCandles} />
            </div>

            <div className="MainBodyContent__column">
                <Options />
                {/*<TrendingStocks />*/}
            </div>

            <div className="MainBodyContent__column">
                {/*<News />*/}
            </div>
        </main>
    );
}

export default MainAppContent;