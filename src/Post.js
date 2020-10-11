import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Post = ({ coverImage, author, tag, countryCode, title, text }) => {
    const isExpanded = useState(false);
    return (
        <div className="post">
            <div className="post__header">
                { author }| { tag }| <span>{ countryCode }</span>| Bulgaria
            </div>
            <div>
                <div className="post__image">
                    <img src={ coverImage }/>
                </div>
            </div>
            <div className="post__title">
                { title }
            </div>
            <div className="post__text">
                { text }
            </div>
            <div className="post__read-more">
                <i className="fa fa-heart" aria-hidden="true"></i>
            </div>
        </div>
    );
};

Post.propTypes = {
    coverImage: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    countryCode: PropTypes.string,
    tag: PropTypes.string,
    text: PropTypes.string,
    favorite: PropTypes.bool
};

export default Post;
