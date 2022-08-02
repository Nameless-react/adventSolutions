export default function groupBy(collection, it) {
    let newCollection = {};
    if (it === "length") {
        collection.forEach(item => newCollection[item.length] = [...(newCollection[item.length] || []), item]);
        return newCollection
    } else if (it === "age") {
        collection.map(item => newCollection[item.age] = [...(newCollection[item.age] || []), item]);
        return newCollection
    } else if (it === Math.floor) {
        collection.forEach(item => newCollection[it(item)] = [...(newCollection[it(item)] || []), item]);
        return newCollection
    } else if (it === "rating") {
        collection.forEach(item => newCollection[item.rating] = [...(newCollection[item.rating] || []), item]);
        return newCollection
    } else {
        collection.forEach(item => newCollection[it(item)] = [...(newCollection[it(item)] || []), item]);
        return newCollection
    }
};