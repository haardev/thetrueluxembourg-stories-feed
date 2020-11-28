export const convertTextToFrequencyTable = (inputText) => {
    let listOfWords = inputText.match(/\w+\s+/g);
    const transformedListOfWords = listOfWords.map((item) => item.replace(/\s+/, '').toLowerCase())
        .filter((item) => item.length > 2);

    return getFrequencyTable(transformedListOfWords);
};

export const getFrequencyTable = (listOfWords) => {
    const map = new Map();
    for (const word of listOfWords) {
        if (!map.has(word)) {
            map.set(word, {
                frequencyInDocument: 1,
                frequencyOutsideDocument: 1
            });
        }
        else {
            const current = map.get(word);
            current.frequencyInDocument = current.frequencyInDocument + 1;

            map.set(word, current);
        }
    }

    for (const word of map.keys()) {
        const current = map.get(word);
        current.frequencyInDocument = Math.sqrt(current.frequencyInDocument);
        map.set(word, current);
    }

    return map;
};

export class FrequencyTable {
    map = new Map();
    listOfSearchDocuments = [];
    rankListMap = new Map();

    constructor(rawListOfPosts) {
        this.listOfSearchDocuments = this.transformPosts(rawListOfPosts);
        this.calculateIndex();
    }

    transformPosts = (rawListOfPosts) => {
        let results = [];
        for (const post of rawListOfPosts) {
            const { tag, text, countryCode, id, title } = post;
            results.push(new SearchDocument(id, title, countryCode, tag, text));
        }

        return results;
    };

    calculateIndex = () => {
        let maps = [];
        for (const document of this.listOfSearchDocuments) {
            maps.push(document.frequencyTable);
        }

        let result = [];

        for(const mapResult of maps) {
            result = [...result, ...([...mapResult])];
        }

        const map = new Map();

        for (const item of result) {
            if(!map.has(item[0])) {
                map.set(item[0], item[1]);
            }
            else {
                const current = map.get(item[0]);
                current.frequencyOutsideDocument += 1;

                map.set(item[0], current);
            }
        }

        for(const item of map) {
            const values = item[1];
            values.rankIndex = 1 + Math.log(this.listOfSearchDocuments.length /(values.frequencyInDocument + 1));
            values.norm = 1 / Math.sqrt(values.frequencyInDocument);
            values.weightIndex = values.rankIndex * values.norm * values.frequencyInDocument;
            map.set(item[0], values);
        }

        this.rankListMap = map;
    };

    search = (searchValue) => {
        const possibleResults = [];

        for(const item of this.rankListMap) {
            if(item[0].indexOf(searchValue) >= 0) {
                possibleResults.push(item);
            }
        }

        possibleResults.sort((a, b) => (a[1].weightIndex  < b[1].weightIndex ) ? 1 : -1);

        const suggestions = [];
        for(const post of this.listOfSearchDocuments) {
            if(post.title.indexOf(searchValue) >= 0 || post.place.indexOf(searchValue) >= 0 ||  post.people.indexOf(searchValue) >= 0) {
                if(!suggestions.find((item) => post.id === item.id)) {
                    suggestions.push(post);
                }
            }

            for(const item of possibleResults) {
                if(post.frequencyTable.has(item[0])) {
                    if(!suggestions.find((item) => post.id === item.id)) {
                        suggestions.push(post);
                    }
                }
            }
        }

        return suggestions;
    };

}

export class SearchDocument {
    id = null;
    frequencyTable;
    title = '';
    place = '';
    people = '';

    constructor(id, title, place, people, text) {
        this.id = id;
        this.title = title;
        this.place = place;
        this.people = people;
        this.frequencyTable = convertTextToFrequencyTable(text);
    }
}
