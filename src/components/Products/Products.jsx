import { useState } from 'react';
import { createUseStyles } from 'react-jss';
import FormRadio from './FormRadio';

const useStyles = createUseStyles({
  productForm: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    display: 'flex',
  },
  input: {
    flex: 1,
    marginLeft: 10,
  },
  error: {
    color: 'red',
  },
  fieldset: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  form__error: {
    color: 'red',
    textTransform: 'uppercase',
  },
});

const initialState = {
  name: '',
  price: '',
  count: '',
  color: 'white',
  image: 'phone',
  insurance: false,
  software: false,
};

const Products = ({ onSubmit }) => {
  const classes = useStyles();
  const [state, setState] = useState(initialState);
  const [error, setError] = useState('');
  const { name, price, count, color, image, insurance, software } = state;

  const handleChange = e => {
    setState(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCheckboxChange = e => {
    setState(prevState => ({
      ...prevState,
      [e.target.name]: e.target.checked,
    }));
  };

  const submitHandler = e => {
    e.preventDefault();

    const hasEmptyField = Object.values(state).some(item => !item);

    if (hasEmptyField) {
      setError('Fields are required');
      return;
    }

    const idSetter = `id-${Math.ceil(Math.random() * 100000)}`;

    const newItem = {
      id: idSetter,
      name,
      price: Number(price),
      count: Number(count),
      color,
      image,
      insurance,
      software,
      img: image,
    };

    onSubmit(newItem);
    setState(initialState);
    setError('');
  };

  return (
    <form className={classes.productForm} onSubmit={submitHandler}>
      <label className={classes.label}>
        <span>Name:</span>
        <input
          className={classes.input}
          type="text"
          value={name}
          name="name"
          onChange={handleChange}
        />
      </label>
      <label className={classes.label}>
        <span>Price:</span>
        <input
          className={classes.input}
          type="number"
          value={price}
          name="price"
          onChange={handleChange}
        />
      </label>
      <label className={classes.label}>
        <span>Count:</span>
        <input
          className={classes.input}
          type="number"
          value={count}
          name="count"
          onChange={handleChange}
        />
      </label>

      <label className={classes.label}>
        <span>Image:</span>
        <select name="image" value={image} onChange={handleChange}>
          <option value="phone">Phone</option>
          <option value="notebook">Notebook</option>
        </select>
      </label>
      <FormRadio
        optionsTitle={'color'}
        options={['white', 'gray', 'black']}
        onChange={handleChange}
        property={color}
      />

      <label>
        <span>Advanced insurance (12M)</span>
        <input
          type="checkbox"
          checked={insurance}
          name="insurance"
          onChange={handleCheckboxChange}
        />
      </label>

      <label>
        <span>Install software</span>
        <input
          type="checkbox"
          checked={software}
          name="software"
          onChange={handleCheckboxChange}
        />
      </label>

      {error && <p className={classes.form__error}> {error}</p>}

      <input type="submit" />
    </form>
  );
};

export default Products;
