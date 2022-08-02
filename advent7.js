export default function contains(store, product) {
  return Object.values(store).some(item => typeof item === "object" ? contains(item, product) : item === product);
};