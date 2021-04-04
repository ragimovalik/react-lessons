import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  form__wrap: {
    width: 500,
    marginTop: 20,
  },
});

const Form = () => {
  const classes = useStyles();

  return (
    <>
      <form action="">
        <fieldset>
          <label>
            <span>Name:</span>
            <input type="text" />
          </label>
          <label>
            <span>Phone number:</span>
            <input type="tel" />
          </label>
          <label>
            <span>Email:</span>
            <input type="email" />
          </label>
          <input type="submit" />
        </fieldset>
      </form>

      <div className={classes.form__wrap}>
        <form>
          <fieldset label="quantity">
            <legend>Quantity</legend>
            <label>
              <span>One</span>
              <input type="radio" name="quantity" />
            </label>
            <label>
              <span>Two</span>
              <input type="radio" name="quantity" />
            </label>
            <label>
              <span>Three</span>
              <input type="radio" name="quantity" />
            </label>
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default Form;
