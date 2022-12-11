import React, {useState} from 'react';
import '../CSS/TradeStock.css'

function BuyingStock(props) {
    const {userId, setStockQuantity, stockQuantity, stockSymbol} = props.props
    const [quantity, setQuantity] = useState(0)

    async function addStock(){
        const res = await fetch('/userstock/add', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                userId,
                stockSymbol,
                quantity
            })
        })
        const data = await res.json()
        if(data['status'] === 200)
            setStockQuantity(quantity + stockQuantity)
    }

    return (
        <form className={"TradeStockUI"}>
            <h3>Purchase Stock</h3>
            <p>Amount:
                <div className={'TradeStockUI__input-container'}>
                    <input
                        type="number"
                        name='quantity'
                        placeholder={'Enter a number'}
                        onChange={event=>{
                            setQuantity(Number(event.target.value))
                        }}
                    />
                </div><
            /p>
            <button onClick={event => {
                event.preventDefault()
                addStock()
                    .catch(err => console.log(err))
            }}>Purchase</button>
        </form>
    );
}

export default BuyingStock;