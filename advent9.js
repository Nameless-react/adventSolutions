function groupBy(collection, it) {
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
}

console.log(groupBy([6.1, 4.2, 6.3], Math.floor))
console.log(groupBy(["one", "two", "three"], "length"))
console.log(groupBy([{age: 23}, {age: 24}], 'age'))
console.log(groupBy(
    [1397639141184, 1363223700000],
    timestamp => new Date(timestamp).getFullYear()
  ))
console.log(groupBy([
    { title: 'JavaScript: The Good Parts', rating: 8 },
    { title: 'Aprendiendo Git', rating: 10 },
    { title: 'Clean Code', rating: 9 },
  ], 'rating'))
