import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  sectionBox: {
    width: 600,
    textAlign: 'center',
  },
  sectionTitle: {
    marginBottom: 20,
  },
});

const Section = ({ children, sectionTitle }) => {
  const classes = useStyles();

  return (
    <section className={classes.sectionBox}>
      <h3 className={classes.sectionTitle}>{sectionTitle}</h3>
      {children}
    </section>
  );
};

export default Section;
