import React, { useEffect, useState } from 'react';
import './App.css';
import cover from './cover.png';
import Post from './Post';
import { fetchPosts } from './apiUtils';

function App() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const data = [
        {
            coverImage: 'https://scontent-bru2-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/120905141_949896912171028_8125290894200982431_n.jpg?_nc_ht=scontent-bru2-1.cdninstagram.com&_nc_cat=104&_nc_ohc=3_OJ0VdAbBwAX_-vfsL&oh=b23470c3659f00df08ef719fc3121df9&oe=5FA7BA6B',
            title: 'some title',
            author: 'Milen Gardev',
            countryCode: 'BG',
            tag: 'Custom text weq eq eq',
            text: '\n' +
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit mattis felis, nec ullamcorper ex finibus at. Proin ornare ut turpis id aliquam. Etiam ut orci eu lacus eleifend consectetur vitae sit amet odio. Pellentesque odio mauris, egestas eget aliquam vitae, consequat in nisl. Integer vitae arcu ipsum. Maecenas laoreet et justo nec consectetur. Maecenas at dignissim sem. Donec eu dui et augue pellentesque congue eget id felis. Sed tincidunt felis ipsum.\n' +
                '\n' +
                'Nam laoreet dui eget ex tristique accumsan. Aenean velit lacus, faucibus vel dolor quis, vulputate dictum est. Nunc id efficitur ex, nec scelerisque quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur lobortis nulla nec ipsum ullamcorper, quis lacinia ante vestibulum. In feugiat massa non enim tempus sodales. Nunc id leo non eros commodo faucibus in eget libero. Pellentesque vitae massa finibus, porta tortor in, gravida turpis. Aliquam at eros vel lectus suscipit hendrerit. Aliquam vehicula purus vel eros auctor ultrices. Proin in nisi sagittis, vestibulum est a, aliquam tellus. Sed in est in nulla tempus posuere.\n' +
                '\n' +
                'Donec ut erat efficitur ex placerat ornare vel nec libero. Aliquam erat volutpat. In cursus tellus nibh, vel feugiat erat molestie a. Curabitur eu mauris vel tellus ullamcorper facilisis eget eu nibh. Aliquam ac arcu a ipsum pharetra semper et eget dolor. Nam aliquet pretium odio vel vestibulum. Suspendisse potenti. In non sagittis ipsum. Curabitur rutrum ligula eu ligula consectetur sagittis. Donec vitae purus ex. Praesent condimentum purus a malesuada feugiat. Donec volutpat dignissim nunc, id vulputate felis tincidunt blandit. Vestibulum sagittis libero eget purus pellentesque condimentum.',
            favorite: true
        },
        {
            coverImage: 'https://scontent-bru2-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/120905141_949896912171028_8125290894200982431_n.jpg?_nc_ht=scontent-bru2-1.cdninstagram.com&_nc_cat=104&_nc_ohc=3_OJ0VdAbBwAX_-vfsL&oh=b23470c3659f00df08ef719fc3121df9&oe=5FA7BA6B',
            title: 'some title',
            author: 'Milen Gardev',
            countryCode: 'BG',
            tag: 'Custom text weq eq eq',
            text: '\n' +
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit mattis felis, nec ullamcorper ex finibus at. Proin ornare ut turpis id aliquam. Etiam ut orci eu lacus eleifend consectetur vitae sit amet odio. Pellentesque odio mauris, egestas eget aliquam vitae, consequat in nisl. Integer vitae arcu ipsum. Maecenas laoreet et justo nec consectetur. Maecenas at dignissim sem. Donec eu dui et augue pellentesque congue eget id felis. Sed tincidunt felis ipsum.\n' +
                '\n' +
                'Nam laoreet dui eget ex tristique accumsan. Aenean velit lacus, faucibus vel dolor quis, vulputate dictum est. Nunc id efficitur ex, nec scelerisque quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur lobortis nulla nec ipsum ullamcorper, quis lacinia ante vestibulum. In feugiat massa non enim tempus sodales. Nunc id leo non eros commodo faucibus in eget libero. Pellentesque vitae massa finibus, porta tortor in, gravida turpis. Aliquam at eros vel lectus suscipit hendrerit. Aliquam vehicula purus vel eros auctor ultrices. Proin in nisi sagittis, vestibulum est a, aliquam tellus. Sed in est in nulla tempus posuere.\n' +
                '\n' +
                'Donec ut erat efficitur ex placerat ornare vel nec libero. Aliquam erat volutpat. In cursus tellus nibh, vel feugiat erat molestie a. Curabitur eu mauris vel tellus ullamcorper facilisis eget eu nibh. Aliquam ac arcu a ipsum pharetra semper et eget dolor. Nam aliquet pretium odio vel vestibulum. Suspendisse potenti. In non sagittis ipsum. Curabitur rutrum ligula eu ligula consectetur sagittis. Donec vitae purus ex. Praesent condimentum purus a malesuada feugiat. Donec volutpat dignissim nunc, id vulputate felis tincidunt blandit. Vestibulum sagittis libero eget purus pellentesque condimentum.',
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

    useEffect(() => {
        const handler = async () => {
            const posts = await fetchPosts();
            setPosts(posts);
        }
        handler();
    }, []);
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
                <div className="container__title">
                    Explore the world of personalities
                </div>
                <div className="container__subheading">
                    Give me some expression to have my meaning of life
                </div>
                <div className="content-container">
                    <div className="post-container">
                        { posts.map((item,index) => <Post key={index} { ...item } />) }
                    </div>
                    <div className="post-filter">
                        <div className="post-filter__category">
                            Places
                        </div>
                        <div className="post-filter__category">
                            People
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
