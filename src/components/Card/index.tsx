import React from 'react'
import { MdLocationOn, MdPhone } from "react-icons/md";

const Card: React.FC = () => {

    return (
        <>
            <div className="card">
                <div className="card_left">
                    <div className="card_title">Leanne Graham</div>
                    <div className="card_subtitle">incere@april.biz</div>
                </div>
                <div className="card_right">
                    <MdLocationOn size={30} />
                    <div className="address" >
                        
                        <span>Kulas Light</span>

                        <span>Apt, 556</span>
                        <span>Gwenborough</span>
                    </div>
                    <MdPhone size={30}/>
                    <div className="phone">
                        <span>+55 (11) 9 1234-5678</span>
                    </div>
                    
                </div>
                    
            </div>
        </>
    )
};

export default Card