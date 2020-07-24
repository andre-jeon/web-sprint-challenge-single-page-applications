import React from 'react';

const NewPizza = (props) => {
    const { details } = props

    if (!details) {
        return <h3>Working fetching new pizza&apos;s details...</h3>
    }

    return (
        <div className='user-container'>
            <h2>{details.name}</h2>
            <p>{details.size}</p>
            {
                !!details.toppings && !!details.toppings.length &&
                <div>
                    Toppings:
                    <ul>
                        {details.topppings.map((like, idx) => <li key={idx}>{like}</li>)}
                    </ul>
                </div>
            }
            <p>{details.specialInst}</p>
        </div>
    )
}
export default NewPizza;