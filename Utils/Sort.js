export const SortByTitle = (array) => {
    return array.sort((a, b) => {
        return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
    });
};

export const SortByName = (array) => {
    return array.sort((a, b) => {
        return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
    });
};
