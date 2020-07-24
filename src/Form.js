import React from 'react'

const Form = (props) => {

    const {
        values,
        submit,
        inputChange,
        checkboxChange,
        disabled,
        errors,
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }
    
      const onCheckboxChange = evt => {
        const { name, checked } = evt.target
        checkboxChange(name, checked)
      }
    
      const onInputChange = evt => {
        const { name, value } = evt.target
        inputChange(name, value)
      }

    return (
        <form className='form-container' onSubmit={onSubmit}>
            <h2>Customize Your Pizza</h2>

            <div className='errors'>
                <div>{errors.name}</div>
                <div>{errors.size}</div>
                <div>{errors.toppings}</div>
                <div>{errors.specialInst}</div>
            </div>

            <div className='form-inputs'>
                <label htmlFor='nameInput'>Name:&nbsp;
                <input
                        id='nameInput'
                        type='text'
                        placeholder='Type Name Here'
                        maxLength='30'
                        name='name'
                        value={values.name}
                        onChange={onInputChange}
                    />
                </label>
                <br />

                <label htmlFor='sizeInput'>Size:&nbsp;
                <select id='size' name='size' value={values.size} onChange={onInputChange}>
                            <option disabled value=''>-Select a size-</option>
                            <option value='Small'>Small</option>
                            <option value='Medium'>Medium</option>
                            <option value='Large'>Large</option>
                        </select>
                    </label>
                    <br />
            </div>

            <div className='toppings'>
                <h4>Toppings</h4>
                <label htmlFor='toppingsInput'>Pepperoni:&nbsp;
                <input
                        type='checkbox'
                        name='Pepperoni'
                        value={values.toppings.pepperoni === true}
                        onChange={onCheckboxChange}
                    />
                </label>
                <br />

                <label htmlFor='toppingsInput'>Steak:&nbsp;
                <input
                        type='checkbox'
                        name='Steak'
                        value={values.toppings.steak === true}
                        onChange={onCheckboxChange}
                    />
                </label>
                <br />

                <label htmlFor='toppingsInput'>Pineapple:&nbsp;
                <input
                        type='checkbox'
                        name='Pineapple'
                        value={values.toppings.pineapple === true}
                        onChange={onCheckboxChange}
                    />
                </label>
                <br />
            </div>

            <div className='special-instruction-input'>
                <label htmlFor='special-Inst-Input'>Special Instructions:&nbsp;
                <input
                        id='specialInstInput'
                        type='text'
                        placeholder='Type Special Instruction Here'
                        maxLength='140'
                        name='specialInst'
                        value={values.specialInst}
                        onChange={onInputChange}
                    />
                </label>
                <br />
            </div>

            <div className='form-submit'>
                <button id='orderBtn' disabled={disabled}>Place Your Order</button>
            </div>
        </form>
    )
}


export default Form