export const DOM_ELEMENT = document.getElementById('root');

export const API_URL = DOM_ELEMENT.dataset.apiUrl;
export const API_CATEGORIES = DOM_ELEMENT.dataset.apiCategories;

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

export const categoriesTransformer = (inputData) => {
    let listOfCategories = [];

    if (!Array.isArray(inputData)) {
        return listOfCategories;
    }

    listOfCategories = inputData.map(({ count, id, name, slug }) => {
        return {
            id: id,
            slug: slug,
            label: name,
            count: count
        };
    }).filter((item) => item.slug !== 'uncategorized');

    return listOfCategories;
};

export const extractPostFromRaw = (post) => {
    const tags = extractTags(post);
    return {
        coverImage: post._embedded['wp:featuredmedia'][0]['source_url'],
        title: post.title.rendered,
        countryCode: tags.country,
        author: tags.author,
        tag: post.excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, ''),
        text: post.content.rendered,
        favorite: true,
        link: post.link,
        categoryId: post.categories[0],
        id: post.id
    };
};

const extractTags = (post) => {
    const defaultTags = {
        author: 'Unknown author',
        country: 'Unknown country'
    };

    return {
        author: post.meta.author ? post.meta.author[0] : defaultTags.author,
        country: post.meta.country_name ? post.meta.country_name[0] : defaultTags.country
    };
};

export const fetchPosts = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    return postTransformer(data);
};

export const fetchCategories = async () => {
    const response = await fetch(API_CATEGORIES);
    const data = await response.json();
    return categoriesTransformer(data);
};
