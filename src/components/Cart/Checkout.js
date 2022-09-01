import { useRef, useState} from 'react';
import classes from './Checkout.module.css';

const Checkout = (props) => {

    const [formValuesValid, setFormValuesValid] = useState({
        name: true,
        street: true,
        postalCode: true,
        city: true
    })

    const nameRef = useRef();
    const streetRef = useRef();
    const postalCodeRef = useRef();
    const cityRef = useRef();

    const isEmpty = value => value.trim() === '';
    const isFiveChar = value => value.trim().length === 5;

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameRef.current.value;
    const enteredStreet = streetRef.current.value;
    const enteredPostalCode = postalCodeRef.current.value;
    const enteredCity = cityRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalCodeIsValid = isFiveChar(enteredPostalCode);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormValuesValid({
        name: enteredNameIsValid,
        street: enteredStreetIsValid,
        postalCode: enteredPostalCodeIsValid,
        city: enteredCityIsValid

    })

    const formIsValid = enteredNameIsValid && enteredStreetIsValid && enteredPostalCodeIsValid && enteredCityIsValid;

    if (!formIsValid){
        return;
    }

    props.onConfirm({
        name: enteredName,
        street: enteredStreet,
        postalCode: enteredPostalCode,
        city: enteredCity
    })
  };

  const controlClasses = (value) => {
   return `${classes.control} ${value? '' : classes.invalid}`
  }

  return (
    <form  onSubmit={confirmHandler}>
      <div className={controlClasses(formValuesValid.name)}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameRef}/>
        {!formValuesValid.name && <p>Please enter valid name</p>}
      </div>
      <div className={controlClasses(formValuesValid.street)}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetRef}/>
        {!formValuesValid.street && <p>Please enter valid street</p>}
      </div>
      <div className={controlClasses(formValuesValid.postalCode)}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalCodeRef}/>
        {!formValuesValid.postalCode && <p>Please enter valid postal</p>}
      </div>
      <div className={controlClasses(formValuesValid.city)}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityRef}/>
        {!formValuesValid.city && <p>Please enter valid city</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;