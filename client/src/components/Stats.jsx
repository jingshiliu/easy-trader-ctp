import React from 'react';
import '../CSS/Stats.css'
import StatsCard from "./StatsCard";
import {nanoid} from "nanoid";



function Stats({stockCandles}) {


    return (
        <section className='Stats'>
            <div className="stats__container">
                <div className="stats__header">
                    <p>Portfolio</p>
                </div>

                <div className="stats__content">
                    <div className="stats__rows">
                        {stockCandles.map(s => <StatsCard stockData={s} key={nanoid()} />)}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Stats;