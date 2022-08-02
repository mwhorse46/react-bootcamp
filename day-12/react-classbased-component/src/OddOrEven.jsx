import React, { Component } from 'react';

class OddOrEven extends Component {
    
    render() {
        const {count, pickedValue} = this.props;


        return (
            <div>
                <h2>Count Number is: {count}</h2>
                <h3>{count % 2 === 0 ? 'Even' : 'Odd'}</h3>

                <hr />
                {
                    pickedValue ? <h2>Picked Number is: {pickedValue}</h2> : <p>You not picked yet</p>
                }
                {
                    pickedValue && <h3>{pickedValue % 2 === 0 ? 'Even' : 'Odd'}</h3>
                }

            </div>
        );
    }
}

export default OddOrEven;