import React, { Component } from 'react';
import classes from './ContactData.module.css';
import Button from '../../../components/UI/Button/Button';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Name',
          required: true
        },
        value: '',
        valid: false
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Street',
          required: true
        },
        value: '',
        valid: false
      },
      city: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'City',
          required: true
        },
        value: '',
        valid: false
      },
      zipCode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Zip Code',
          minLength: '5',
          maxLength: '5',
          required: true
        },
        value: '',
        valid: false
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Email',
          required: true
        },
        value: '',
        valid: false
      },
      phone: {
        elementType: 'input',
        elementConfig: {
          type: 'tel',
          placeholder: 'Phone Number',
          required: true
        },
        value: '',
        valid: false
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            { value: 'dine-in', displayValue: 'Dine-In' },
            { value: 'delivery', displayValue: 'Delivery' },
            { value: 'take-out', displayValue: 'Take Out' }
          ]
        },
        value: 'dine-in',
        valid: true
      }
    },
    loading: false
  };

  checkValidity(value, rules) {
    let isValid = true;
    if (!rules) {
      return true;
    }
    if (rules.valid) {
      // isValid changes to true or false depending on empty string
      isValid = value.trim() !== '';
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength;
    }
    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength;
    }
    return isValid;
  }

  orderHandler = event => {
    // stops the page from reloading
    event.preventDefault();
    this.setState({ loading: true });
    const formData = {};
    for (let formElementId in this.state.orderForm) {
      // extract key value pair from state
      formData[formElementId] = this.state.orderForm[formElementId].value;
    }
    const order = {
      ingredients: this.props.ingredients,
      // price would be checked on server to stop manipulation
      price: this.props.price,
      orderData: formData
    };
    axios
      .post('/orders.json', order)
      .then(response => {
        this.setState({ loading: false });
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({ loading: false });
      });
  };

  inputChangedHandler = (event, inputId) => {
    // copying state
    const updatedOrderForm = { ...this.state.orderForm };
    // copy state with nested elements accessible
    const updatedFormNestedElements = { ...updatedOrderForm[inputId] };
    // assigning the user input to the nest elements value
    updatedFormNestedElements.value = event.target.value;
    // changing valid to true
    updatedFormNestedElements.valid = this.checkValidity(
      updatedFormNestedElements.value
    );
    // copying values to order form
    updatedOrderForm[inputId] = updatedFormNestedElements;
    // updating state with order form
    this.setState({ orderForm: updatedOrderForm });
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key]
      });
    }

    let form = (
      <form onSubmit={this.orderHandler}>
        {formElementsArray.map(formElement => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            changed={event => this.inputChangedHandler(event, formElement.id)}
          />
        ))}
        <Button btnType='Success'>ORDER</Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Information</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
