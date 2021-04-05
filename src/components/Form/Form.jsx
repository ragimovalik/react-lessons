import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  form__wrap: {
    width: 500,
    margin: 10,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  form__label: {
    display: 'flex',
    width: 400,
    justifyContent: 'space-between',

    marginBottom: 10,
    padding: 5,
  },
  form__input: {
    width: 270,
  },
  form__btn: {
    margin: '0 auto',
    width: 200,
    padding: 5,
  },
});

const Form = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.form__wrap}>
        <form>
          <fieldset className={classes.form}>
            <label className={classes.form__label}>
              <span>Name:</span>
              <input className={classes.form__input} type="text" />
            </label>
            <label className={classes.form__label}>
              <span>Phone number:</span>
              <input className={classes.form__input} type="tel" />
            </label>
            <label className={classes.form__label}>
              <span>Email:</span>
              <input className={classes.form__input} type="email" />
            </label>
            <input className={classes.form__btn} type="submit" />
          </fieldset>
        </form>
      </div>

      <div className={classes.form__wrap}>
        <form>
          <fieldset>
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
