import React from 'react';

const NewPizza = (props) => {
    const { details } = props

    if (!details) {
        return <h3>Working fetching new pizza&apos;s details...</h3>
    }

    return (
        <div className='user-container'>
            <h2>{details.name}</h2>
            <p>Size: {details.size}</p>
            {
                !!details.toppings && !!details.toppings.length &&
                <div>
                    <p>Choice of toppings: {details.toppings.map((like, idx) => <p key={idx}>{like}</p>)}</p>
                </div>
            }
            <p>Speical Instruction: {details.specialInst}</p>
        </div>
    )
}
export default NewPizza;