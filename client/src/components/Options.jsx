import '../CSS/Options.css'
import React, {useState} from 'react';


function Options() {
    const [isUIActive, setIsUIActive] = useState(false);
    let activeUI;
    if(isUIActive){
        activeUI = <></>
    }

    return (
        <section className='Options'>
            <div className="Options__container">
                <div className="Options__header"
                     onClick={()=>{
                         setIsUIActive(!isUIActive)
                     }}>
                    <span>Options </span>
                </div>
                {activeUI}
            </div>
        </section>
    );
}

export default Options;