import React, {useState, useEffect} from 'react';

import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselCard from '../components/CarouselCard';
import Footer from '../components/Footer';

import useInitialState from '../hooks/useinitialState'

import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initialState';

const App = () => {
const initialState = useInitialState(API);
console.log(initialState)
    return(
        <div className="App">
        <Header/>
        <Search/>
        {initialState.mylist.length > 0 &&
            (<Categories title='Mi Lista'>
                <Carousel>
                {initialState.mylist.map(item =>
                    <CarouselCard key={item.id} {...item}/>
                )}
                </Carousel>
            </Categories>)
        }

        <Categories title='Más Vistos'>
            <Carousel>
                {initialState.trends.map(item =>
                    <CarouselCard key={item.id} {...item}/>
                )}
            </Carousel>
        </Categories>

        <Categories title='Series Originales'>
            <Carousel>
                {initialState.originals.map(item =>
                    <CarouselCard key={item.id} {...item}/>
                )}
            </Carousel>
        </Categories>


        <Footer/>
    </div>
    );
}

export default App;