import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const MAX_CHARACTERS_FOR_EXPAND = 444;

const Post = ({ coverImage, author, tag, countryCode, title, text, link }) => {
    const [isExpanded, setExpanded] = useState(false);
    const textRef = useRef(null);
    const htmlParsedRef = useRef(null);

    const renderTrimString = useCallback((inputText) => {
        let res;
        if (inputText.length >= MAX_CHARACTERS_FOR_EXPAND && !isExpanded) {
            res = !isExpanded ? inputText.substring(0, MAX_CHARACTERS_FOR_EXPAND) : inputText;
        }
        else {
            res = inputText;
        }

        if (res[res.length] === ' ') {
            res = res.substring(0, res.length - 1);
        }

        return (
            <div>
                <div ref={ htmlParsedRef } dangerouslySetInnerHTML={ { __html: res } }/>
            </div>
        );
    }, [isExpanded]);

    useEffect(() => {
        if (text.length < MAX_CHARACTERS_FOR_EXPAND) {
            return;
        }

        if (htmlParsedRef.current) {
            if (htmlParsedRef.current.children) {
                const lastChild = htmlParsedRef.current.children[htmlParsedRef.current.children.length - 1];
                const text = document.createElement('span');

                const renderExpand = () => {
                    return <span className="post__read-more__button"
                                 onClick={ () => setExpanded(!isExpanded) }> ... See { isExpanded ? 'less' : 'more' }
                    </span>;
                };
                ReactDOM.render(renderExpand(), text);
                lastChild.appendChild(text);
            }
        }

    }, [htmlParsedRef, isExpanded, text]);

    const handleOnCopyClipboard = (link) => {
        navigator.clipboard.writeText(link).then(() => {
            console.log('Async: Copying to clipboard was successful!');
        }, (err) => {
            console.error('Async: Could not copy text: ', err);
        });
    };

    return (
        <div className="post">
            <div className="post__title">
                { title }
            </div>
            <div>
                <div className="post__image">
                    <img src={ coverImage } alt="The True faces of Luxembourg"/>
                </div>
            </div>
            <div className="post__header">
                <strong>{ author } { '  ' }</strong>
                { tag }
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
                        <a href={ `https://www.facebook.com/sharer/sharer.php?u=${ link }` }
                           rel="noopener noreferrer"
                           target="_blank">
                            <i className="fa fa-facebook" aria-hidden="true"/>
                        </a>
                    </li>
                    <li>
                        <a href={ `https://twitter.com/share?url=${ link }` }
                           rel="noopener noreferrer"
                           target="_blank">
                            <i className="fa fa-twitter" aria-hidden="true"/>
                        </a>
                    </li>
                    <li>
                        <i onClick={ () => handleOnCopyClipboard(link) } className="fa fa-clipboard"
                           aria-hidden="true"/>
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
