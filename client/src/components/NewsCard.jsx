import React from 'react';
import '../CSS/NewsCard.css'

// newsData content structure
// {"category": "top news",
//     "datetime": 1668476525,
//     "headline": "Vietnam Acquires Relic Ahead of French Auction for $3 Million",
//     "id": 7196743,
//     "image": "https://data.bloomberglp.com/company/sites/2/2019/01/logobbg-wht.png",
//     "related": "",
//     "source": "Bloomberg",
//     "summary": "Vietnam successfully negotiated the return of a 19th century Vietnamese imperial seal from the French auction house Millon, the ministry of culture, sports and tourism said in a statement posted on its website.",
//     "url": "https://www.bloomberg.com/news/articles/2022-11-15/vietnam-acquires-relic-ahead-of-french-auction-for-3-million"
// }

function NewsCard({newsData}) {
    return (
        <div className='NewsCard'>
            <h4 className='NewsCard__header'>
                {newsData['headline']}
            </h4>
            {newsData['summary']}
        </div>
    );
}

export default NewsCard;