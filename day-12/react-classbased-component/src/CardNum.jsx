import React, { Component } from 'react';

class CardNum extends Component {

    // handleValue = () => {

    //     this.props.handlePickNum(this.props.cardNum);
    // }

    render() {
        const {cardNum, handlePickNum} = this.props;


        return (
            <div className='container' onClick={()=> handlePickNum(cardNum)}>
                <p>Card Number</p>
                <p>Num: {cardNum}</p>
            </div>
        );
    }
}

export default CardNum;