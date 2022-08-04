export default function checkIsSameTree(treeA, treeB) {
    const isSameTree = (nodeA, nodeB) => {
        const entriesA = Object.keys(nodeA).sort();
        const entriesB = Object.keys(nodeB).sort();

        return entriesA.every((key, index) => {
            if (key !== entriesB[index] || (typeof nodeA[key] !== "object" && typeof nodeB[key] !== "object") && nodeA[key] !== nodeB[key]) return false;
            
            return nodeA[key] && nodeB[key] && typeof nodeA[key] === "object" && typeof nodeB[key] === "object" ? isSameTree(nodeA[key], nodeB[key]) : true;
        })
    }
    return isSameTree(treeA, treeB);
};  



//* Hay otras maneras mas resumidas para hacerlo, pero siento que para las personas que no esten tan metidas en la recurisividad les resultara un poco dificil (me incluyo) leer:
// const checkIsSameTree = (treeA, treeB) =>
//   (!treeA && !treeB) ||
//   (treeA?.value === treeB?.value &&
//     checkIsSameTree(treeA.left, treeB.left) &&
//     checkIsSameTree(treeA.right, treeB.right));
