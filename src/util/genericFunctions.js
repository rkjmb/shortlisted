
const getCanidateById = (candidates, id) => {
    if (!candidates) return null;
    return candidates.filter(c => c.id == id)[0]
}

const filterByKeyAndValue = (candidates, key, value, searchText) => {
    if (searchText.match((/[.?^:${}()|[\]/\\]/g))) {
        return [];
    }
    if (!candidates) return [];
    return candidates.filter(c => c[key] === value && c.name.match(new RegExp(searchText, 'i')))
}

export { getCanidateById, filterByKeyAndValue }