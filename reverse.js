// const str = "Temitope";
// const reversedString = str.split("").reduce((acc, char) => char + acc, "");
// console.log(reversedString);


// const str = "Temitope";
// const reversedString = str.split("").reverse().join('');
// console.log(reversedString)

// mapping in Javascript, an Array of products
const products = [
    {title: "Television", id: 1},
    {title: "Radio", id: 2},
    {title: "theatre", id: 3}
]

//mapping the products 

const listItems = products.map(product =>
    <li key={product.id}>
    {product.title}
    </li>
);
console.log(listItems);

return (
    <ul>{listItems}</ul>
)
