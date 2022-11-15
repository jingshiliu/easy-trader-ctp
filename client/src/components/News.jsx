import React from 'react';
import ListDisplay from "./ListDisplay";

function News({news}) {
    return (
        <div className='News'>
            <ListDisplay title='News' listData={news} cardType='NewsCard'/>
        </div>
    );
}

export default News;