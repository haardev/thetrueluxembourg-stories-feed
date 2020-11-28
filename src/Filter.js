export const FILTER_TYPES = {
    category: 'category',
    post: 'post'
};

export class Filter {
    value = '';
    type = '';

    constructor(value, type) {
        this.value = value;
        this.type = type;
    }

    getValues = () => {
        return {
            ...this
        };
    };
}
