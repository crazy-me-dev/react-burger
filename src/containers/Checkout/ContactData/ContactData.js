import React, { Component } from 'react';
import classes from './ContactData.module.css';
import Button from '../../../components/UI/Button/Button';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    address: {
      street: '',
      city: '',
      state: '',
      zipcode: ''
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
      price: this.props.price,
      customer: {
        name: this.state.name,
        address: {
          street: 'jlkj',
          city: 'Nowhere',
          zipCode: '98777'
        },
        email: 'test@test.com',
        phone: 555555555
      },
      deliveryMethod: 'UberEats'
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
        <input
          className={classes.Input}
          type='text'
          name='name'
          placeholder='Your Name'
        />
        <input
          className={classes.Input}
          type='email'
          name='email'
          placeholder='Your Email'
        />
        <input
          className={classes.Input}
          type='text'
          name='phone'
          placeholder='Phone Number'
        />
        <input
          className={classes.Input}
          type='text'
          name='street'
          placeholder='Address'
        />
        <input
          className={classes.Input}
          type='text'
          name='city'
          placeholder='City'
        />
        <input
          className={classes.Input}
          type='text'
          name='state'
          placeholder='State'
        />
        <input
          className={classes.Input}
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
