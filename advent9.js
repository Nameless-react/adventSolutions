export default function groupBy(collection, it) {
    let newCollection = {};
    
    collection.forEach(item => typeof it === "function" ? newCollection[it(item)] = [...(newCollection[it(item)] || []), item] : newCollection[item[it]] = [...(newCollection[item[it]] || []), item])
    return newCollection; 
};