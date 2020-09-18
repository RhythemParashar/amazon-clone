import React from 'react';
import './Home.css';
import Product from '../Product/Product';

const Home = () => {
    return (
        <div className='home'>
            <div className='home__container'>
                <img
                    className='home__image'
                    src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
                    alt=''
                />
                <div className='home__containerBelow'>
                    <div className='home__row'>
                        <Product
                            id={1234566}
                            title='The Lean Startup'
                            price={249.99}
                            image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg'
                            rating={5}
                        />

                        <Product
                            id={2145647}
                            title='OnePlus 8 (Glacial Green 6GB RAM+128GB Storage)'
                            price={44999.99}
                            image='https://m.media-amazon.com/images/I/619iTNHSCGL._AC_UL320_.jpg'
                            rating={5}
                        />
                    </div>

                    <div className='home__row'>
                        <Product
                            id={3425234}
                            title='JBL PartyBox 100 Portable Bluetooth Party Speaker with Bass Boost and Dynamic Light Show (160 Watts, Black)'
                            price={19999.99}
                            image='https://m.media-amazon.com/images/I/81a-xiedCKL._AC_UY218_.jpg'
                            rating={5}
                        />
                        <Product
                            id={1243253}
                            title='OnePlus Buds (White)'
                            price={3499.99}
                            image='https://m.media-amazon.com/images/I/61IgqbMF98L._AC_UY218_.jpg'
                            rating={5}
                        />
                        <Product
                            id={1243555}
                            title='OnePlus Bullets Wireless Z in-Ear Bluetooth Earphones with Mic (Mint)'
                            price={1999.99}
                            image='https://m.media-amazon.com/images/I/516sOjFfchL._AC_UY218_.jpg'
                            rating={5}
                        />
                    </div>

                    <div className='home__row'>
                        <Product
                            id={5464642}
                            title='Sony MHC-V02 Home Audio Portable Party Speaker with Bluetooth, Karaoke and Jet Bass Booster'
                            price={19999.99}
                            image='https://images-eu.ssl-images-amazon.com/images/I/41li7U9vzhL._AC_SY200_.jpg'
                            rating={5}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
