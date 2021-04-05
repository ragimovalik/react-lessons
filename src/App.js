import { useState } from 'react';
// import Header from './components/Header';
import Section from './components/Section';
import PageTitle from './components/PageTitle';
import Products from './components/Products';
// import Form from './components/Form';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);

  console.log(products);

  const handleSubmit = newProduct =>
    setProducts(prevState => [...prevState, newProduct]);

  return (
    <>
      <PageTitle />
      {/* <Header /> */}
      <Section sectionTitle={'Title for Form'}>
        <Products onSubmit={handleSubmit} />
      </Section>
    </>
  );
};

export default App;

/*
  <div className="shop">
    <Header />

    <div className="body">
      <Menu />
      <Content />
    </div>
    <Footer />
  </div>
*/
