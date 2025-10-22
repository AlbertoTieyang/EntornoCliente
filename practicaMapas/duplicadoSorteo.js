const list = [1, 2, 3, 5, 6, 2];
const listNoCopy = new Set (list);
/* for (let i = 0; i < list.length; i++) {
    listNoCopy.add(list[i]);
} */
console.log(listNoCopy); 