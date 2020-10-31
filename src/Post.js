import React, { useCallback, useRef, useState } from 'react';
import PropTypes from 'prop-types';

const Post = ({ coverImage, author, tag, countryCode, title, text, link }) => {
    const [isExpanded, setExpanded] = useState(false);
    const textRef = useRef(null);

    const renderTrimString = useCallback((inputText) => {
        let res = !isExpanded ? inputText.substring(0, 444) : inputText;

        if (res[res.length] === ' ') {
            res = res.substring(0, res.length - 1);
        }

        return (
            <div>{ res }
                { !isExpanded && (
                    <span className="post__read-more__button"
                          onClick={ () => setExpanded(!isExpanded) }>... more
                    </span>
                ) }
            </div>
        );
    }, [textRef, isExpanded, text]);

    return (
        <div className="post">
            <div className="post__title">
                { title }
            </div>
            <div>
                <div className="post__image">
                    <img src={ coverImage }/>
                </div>
            </div>
            <div className="post__header">
                <strong>{ author } { '  ' }</strong>{ tag }
                <div className="post__header__country">
                    { countryCode }
                </div>
            </div>
            <div className="post__text">
                <div ref={ textRef }
                     className={ `post__text-content ${ isExpanded === true ? 'post__text-content__expanded' : '' }` }>
                    { renderTrimString(text) }
                </div>
            </div>
            <div className="post__social-block">
                <ul>
                    <li>
                        <a href={`https://www.facebook.com/sharer/sharer.php?u=${link}`} target="_blank">
                            <i className="fa fa-facebook" aria-hidden="true"/>
                        </a>
                    </li>
                </ul>
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
