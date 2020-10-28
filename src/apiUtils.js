export const API_URL = document.getElementById('root').dataset.apiUrl;

export const postTransformer = (data) => {
    const listOfPosts = [];

    if (!data) {
        return [];
    }

    for (let post of data) {
        listOfPosts.push(extractPostFromRaw(post));
    }

    return listOfPosts;
};

export const extractPostFromRaw = (post) => {
    return {
        coverImage: post._embedded['wp:featuredmedia'][0]['source_url'],
        title: post.title.rendered,
        author: post._embedded['wp:term'][1][1].name,
        countryCode: post._embedded['wp:term'][1][0].name,
        tag: post.excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, ''),
        text: post.content.rendered.replace(/<\/?[^>]+(>|$)/g, ''),
        favorite: true
    };
};

export const fetchPosts = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    return postTransformer(data);
};
