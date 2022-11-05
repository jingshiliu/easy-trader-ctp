import '../CSS/BuyingPower.css'
import React, {useState} from 'react';

function BuyingPower({buyingPower}) {
    const [isAddingBuyingPower, setIsAddingBuyingPower] = useState(false);

    buyingPower = 10000;
    let buyingUI;
    if(isAddingBuyingPower){
        buyingUI = (
            <form className='BuyingPower__add-buying-power'>
                <div>
                    <span>Add Power! </span>
                    <input type="text" placeholder='Enter amount and pay nothing'/>
                </div>
                <button onClick={(e)=>{
                    e.preventDefault()
                    // get
                    // Send an api request to backend to add money
                    // /buying-power
                    // put(add) amount
                }}>
                    Confirm
                </button>
            </form>)
    }

    return (
        <section className='BuyingPower'>
            <div className="BuyingPower__container">
                <div className="BuyingPower__header"
                    onClick={()=>{
                        setIsAddingBuyingPower(!isAddingBuyingPower)
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