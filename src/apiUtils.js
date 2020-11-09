export const API_URL = document.getElementById('root').dataset.apiUrl;

export const postTransformer = (data) => {
    const listOfPosts = [];

    if (!data) {
        return [];
    }

    for (let post of data) {
        if (!post) {
            continue;
        }

        listOfPosts.push(extractPostFromRaw(post));
    }

    return listOfPosts;
};

export const extractPostFromRaw = (post) => {
    const tags = extractTags(post);
    return {
        coverImage: post._embedded['wp:featuredmedia'][0]['source_url'],
        title: post.title.rendered,
        countryCode: tags[0].name,
        author: tags[1].name,
        tag: post.excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, ''),
        text: post.content.rendered,
        favorite: true,
        link: post.link
    };
};

const extractTags = (post) => {
    const listOfTags = [
        {
            name: 'Unknown country'
        },
        {
            name: 'Unknown author'
        }
    ];

    if (!post._embedded) {
        return listOfTags;
    }

    if (!post._embedded['wp:term']) {
        return listOfTags;
    }

    if (post._embedded['wp:term'].length < 2) {
        return listOfTags;
    }

    if (post._embedded['wp:term'][1].length < 2) {
        return listOfTags;
    }

    return [
        {
            name: post._embedded['wp:term'][1][0].name,
        },
        {
            name: post._embedded['wp:term'][1][1].name,
        }
    ];
};

export const fetchPosts = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    return postTransformer(data);
};
