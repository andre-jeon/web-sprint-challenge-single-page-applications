import React, { useState, useEffect } from "react";
import { Link, Route } from 'react-router-dom'

import Form from './Form'
import Pizza from './Pizza'

import * as yup from 'yup'
import axios from 'axios'

import formSchema from './validation/formSchema'


const initialFormValues = {
  name: '',
  size: '',
  toppings: {
    pepperoni: false,
    steak: false,
    pineapple: false,
  },
  specialInst: '',
}

const initialFormErrors = {
  name: '',
  size: '',
  speicalInst: '',
}
const initialPizza = []
const initialDisabled = true

const App = () => {
  const [makePizza, setPizza] = useState(initialPizza)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const postNewPizza = newPizza => {
    axios.post('https://reqres.in/api/user', newPizza)
      .then(res => {
        setPizza([res.data, ...makePizza])
        setFormValues(initialFormValues)
      })
      .catch(err => {
        debugger
      })
  }

  const inputChange = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        })
      })

    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const checkboxChange = (name, isChecked) => {
    setFormValues({
      ...formValues,
      toppings: {
        ...formValues.toppings,
        [name]: isChecked,
      }
    })
  }

  const submit = () => {
    const pizza = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      toppings: Object.keys(formValues.toppings).filter(tp => formValues.toppings[tp]),
      specialInst: formValues.specialInst.trim(),
    }

    postNewPizza(pizza)
  }

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => {
      setDisabled(!valid)
    })
  }, [formValues])
  
console.log(formValues)

  return (
    <div className="App">
      <header>
        <h1>Lambda Pizza</h1>
      </header>

      <div className='nav-links'>
        <button><Link to='/'>Home</Link></button>
        <button><Link to='/pizza'>Customize Your Pizza</Link></button>
      </div>

      <Form
        values={formValues}
        inputChange={inputChange}
        checkboxChange={checkboxChange}
        submit={submit}
        disabled={disabled}
        errors={formErrors}
      />

      {
        makePizza.map(pizza => {
          return (
            <Pizza key={pizza.id} details={pizza} />
          )
        })
      }

      <Route path='/pizza'>
        <Pizza props={makePizza} />
      </Route>
    </div>
  );
};


export default App;
