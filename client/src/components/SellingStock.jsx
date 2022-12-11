import React, {useState} from 'react';
import '../CSS/TradeStock.css'

function SellingStock(props) {
    const {userId, setStockQuantity, stockQuantity, stockSymbol} = props.props
    const [quantity, setQuantity] = useState(0)

    async function sellStock(){
        const res = await fetch('/userstock/remove', {
            method: 'DELETE',
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
        if(data['status'] === 200){
            if(stockQuantity - quantity >= 0)
                setStockQuantity(stockQuantity - quantity)
            else
                setStockQuantity(0)
        }

    }

    return (
        <form className={"TradeStockUI"}>
            <h3>Sell Stock</h3>
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
                sellStock()
                    .catch(err => console.log(err))
            }}>Sell</button>
        </form>
    );
}

export default SellingStock;