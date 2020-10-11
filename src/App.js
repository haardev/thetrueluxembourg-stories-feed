import React from 'react';
import logo from './logo.svg';
import './App.css';
import cover from './cover.png';
import Post from './Post';

function App() {
    const data = [
        {
            coverImage: 'https://scontent-bru2-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/120905141_949896912171028_8125290894200982431_n.jpg?_nc_ht=scontent-bru2-1.cdninstagram.com&_nc_cat=104&_nc_ohc=3_OJ0VdAbBwAX_-vfsL&oh=b23470c3659f00df08ef719fc3121df9&oe=5FA7BA6B',
            title: 'some title',
            author: 'Milen Gardev',
            countryCode: 'BG',
            tag: 'Custom text weq eq eq',
            text: 'eqeqeq eeq eq',
            favorite: true
        },
        {
            coverImage: 'https://scontent-bru2-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/120905141_949896912171028_8125290894200982431_n.jpg?_nc_ht=scontent-bru2-1.cdninstagram.com&_nc_cat=104&_nc_ohc=3_OJ0VdAbBwAX_-vfsL&oh=b23470c3659f00df08ef719fc3121df9&oe=5FA7BA6B',
            title: 'some title',
            author: 'Milen Gardev',
            countryCode: 'BG',
            tag: 'Custom text weq eq eq',
            text: 'eqeqeq eeq eq',
            favorite: true
        },
        {
            coverImage: 'https://scontent-bru2-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/120905141_949896912171028_8125290894200982431_n.jpg?_nc_ht=scontent-bru2-1.cdninstagram.com&_nc_cat=104&_nc_ohc=3_OJ0VdAbBwAX_-vfsL&oh=b23470c3659f00df08ef719fc3121df9&oe=5FA7BA6B',
            title: 'some title',
            author: 'Milen Gardev',
            countryCode: 'BG',
            tag: 'Custom text weq eq eq',
            text: 'eqeqeq eeq eq',
            favorite: true
        }
    ];
    return (
        <div className="App">
            <header className="App-header">
                <img src={ cover } className="App-logo" alt="logo"/>
                <div className="App-header-title">TSome teq hear text
                    TSome teq hear text
                    TSome teq hear text
                    TSome teq hear text
                </div>
            </header>
            <div className="container">
                <div className="container__title">Explore the world of personalities</div>
                <div className="container__subheading">
                    Give me some expression to have my meaning of life
                </div>
                <hr/>
                <div className="content-container">
                    <div className="post-container">
                        { data.map((item) => <Post { ...item } />) }
                    </div>
                    <div className="post-filter">
                        <div>
                            Places
                        </div>
                        <div>
                            People
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
