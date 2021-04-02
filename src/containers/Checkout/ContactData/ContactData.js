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
          placeholder: 'Name'
        },
        value: ''
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Street'
        },
        value: ''
      },
      city: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'City'
        },
        value: ''
      },
      zipCode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Zip Code'
        },
        value: ''
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Email'
        },
        value: ''
      },
      phone: {
        elementType: 'input',
        elementConfig: {
          type: 'number',
          placeholder: 'Phone Number'
        },
        value: ''
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
        value: ''
      }
    },
    loading: false
  };

  orderHandler = event => {
    // stops the page from reloading
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      // price would be checked on server to stop manipulation
      price: this.props.price
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

  render() {
    let form = (
      <form>
        <Input elementType='...' elementConfig='...' value='...' />
        <Input
          inputType='input'
          type='text'
          name='phone'
          placeholder='Phone Number'
        />
        <Input
          inputType='input'
          type='text'
          name='street'
          placeholder='Address'
        />
        <Input inputType='input' type='text' name='city' placeholder='City' />
        <Input
          inputType='input'
          type='text'
          name='name'
          placeholder='Your Name'
        />
        <Input inputType='input' type='text' name='state' placeholder='State' />
        <Input
          inputType='input'
          type='text'
          name='zipcode'
          placeholder='Zip Code'
        />
        <Button btnType='Success' clicked={this.orderHandler}>
          ORDER
        </Button>
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
