import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import AppRoutes from './components/AppRoutes/AppRoutes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import * as serviceWorker from './serviceWorker';

const Root = () => {
    return (
      <>
        <Router>
          <Header />
          <AppRoutes />
          <Footer />
        </Router>
      </>
    );
}

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
