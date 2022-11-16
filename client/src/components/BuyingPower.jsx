import '../CSS/BuyingPower.css'
import React, {useState} from 'react';

function BuyingPower({buyingPower}) {
    const [isUiActive, setIsUiActive] = useState(false);

    buyingPower = 10000;
    let buyingUI;
    if(isUiActive){
        buyingUI = (
            <form className='BuyingPower__add-buying-power'>
                <div>
                    <span>Add Power! </span>
                    <div className="BuyingPower__input-container">
                        <input type="text" placeholder='Enter amount'/>
                    </div>
                </div>
                <div className='button' onClick={(e)=>{
                    e.preventDefault()
                    // get
                    // Send an api request to backend to add money
                    // /buying-power
                    // put(add) amount
                }}>
                    Confirm
                </div>
            </form>)
    }

    return (
        <section className='BuyingPower'>
            <div className="BuyingPower__container">
                <div className="BuyingPower__header"
                     onClick={()=>{
                         setIsUiActive(!isUiActive)
                     }}>
                    <span>Buying Power: </span>
                    <span>${buyingPower}</span>
                </div>
                {buyingUI}
            </div>
        </section>
    );
}

export default BuyingPower;