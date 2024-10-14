let setCollection = new Set();

setCollection.add(1);
setCollection.add(2);
setCollection.add(3);
setCollection.add(3);
setCollection.add(2);
setCollection.add(1);
setCollection.add(90);

setCollection.delete(3);

console.log(setCollection);

console.log(setCollection.has(4));

console.log(setCollection.keys());
console.log(setCollection.values());
