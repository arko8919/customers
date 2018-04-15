import React, {Component} from 'react';
// styles
import '../css/App.css';
// components
import {Header} from './header/header';
import {Section} from './section/section';
import {Footer} from './footer/footer';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <Header/>
                <Section/>
                <Footer/>
            </div>
        );
    }
}

export default App;
