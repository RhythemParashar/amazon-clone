import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import Payment from './components/Payment/Payment';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './components/Orders/Orders';
import { useMediaQuery } from 'react-responsive';
import HeaderMob from './components/HeaderMob/HeaderMob';

const promise = loadStripe(
    'pk_test_51HSMlgI58MB4wPI90Eegtdai3QhxcKP5F1XFh85helE2URd0CnfkD83JKQDvXAa04CPaDXyeiSUfryLaGrjS1s7700dZ9qpCqj'
);

function App() {
    const [{}, dispatch] = useStateValue();

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1000px)' });

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                dispatch({
                    type: 'SET_USER',
                    user: authUser,
                });
            } else {
                dispatch({
                    type: 'SET_USER',
                    user: null,
                });
            }
        });
    }, []);

    return (
        <Router>
            <div className='app'>
                <Switch>
                    <Route path='/login'>
                        <Login />
                    </Route>

                    <Route path='/orders'>
                        {isTabletOrMobile ? <HeaderMob /> : <Header />}
                        <Orders />
                    </Route>

                    <Route path='/checkout'>
                        {isTabletOrMobile ? <HeaderMob /> : <Header />}
                        <Checkout />
                    </Route>

                    <Route path='/payment'>
                        {isTabletOrMobile ? <HeaderMob /> : <Header />}
                        <Elements stripe={promise}>
                            <Payment />
                        </Elements>
                    </Route>

                    <Route path='/'>
                        {isTabletOrMobile ? <HeaderMob /> : <Header />}
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
