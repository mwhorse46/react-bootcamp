import React from 'react';
import styles from './App.module.css';


const IsOddOrEven = ({value}) => {

    const oddOrEven = value % 2 === 0 ? 'even' : 'odd';

    return (
            <>
                {/* <div>Number is {value && value % 2 === 0 ? <span style={{color:'green'}}>Even</span> : <span style={{color:'red'}}>Odd</span>}</div> */}
                <br />

                <div>
                    Number is {' '}
                    {
                        value && <span className={ oddOrEven === 'even' ? styles.even : styles.odd}>{oddOrEven}</span>
                    }
                </div>
                <br />
            </>
    );
};

export default IsOddOrEven;