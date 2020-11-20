import React, { useEffect, useState } from 'react';
import './App.css';
import cover from './cover.png';
import Post from './Post';
import { fetchPosts } from './apiUtils';
import FilterBar from './FilterBar';

function App() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const handler = async () => {
            setLoading(true);
            const posts = await fetchPosts();
            setPosts(posts);
            setLoading(false);
        };
        handler();
    }, []);

    //TODO: Wrap this into a component

    return (
        <div className="App">
            <div className="container">
                <div className="content-container">
                    <div className="post-container">
                        { loading && <h3>Loading stories...</h3> }
                        { posts.map((item, index) => <Post key={ index } { ...item } />) }
                    </div>
                    <FilterBar />
                </div>
            </div>
        </div>
    );
}

export default App;
