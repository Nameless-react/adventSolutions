export default (store, product) => new RegExp(`[a-z\"]*\:"${product}"`, "gi").test(JSON.stringify(store));



//* Otra manera de hacerlo seria con recursividad:
// const contains = (store, product) => Object.values(store).some(item => typeof item === "object" ? contains(item, product) : item === product);