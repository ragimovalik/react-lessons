import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';

const useStyles = createUseStyles({
  form__wrap: {
    width: 500,
    margin: 10,
  },
  form__title: {
    textTransform: 'capitalize',
  },
});

const FormRadio = ({ optionsTitle, options, property, onChange }) => {
  const classes = useStyles();

  return (
    <fieldset className={classes.form__wrap}>
      <legend className={classes.form__title}>{optionsTitle}</legend>
      {options.map(option => {
        return (
          <label key={option}>
            <span>{option}</span>
            <input
              type="radio"
              name={optionsTitle}
              value={option}
              checked={property === option}
              onChange={onChange}
            />
          </label>
        );
      })}
    </fieldset>
  );
};

FormRadio.propTypes = {
  optionsTitle: PropTypes.string,
  property: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
};

export default FormRadio;
