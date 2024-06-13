const product={
    title:"Pen",
    price:10.00,
    company:"Cello",
    colour:"Black"
}

console.log(product["title"]);
console.log(product["price"]);
product["price"]=product["price"]+1;
console.log(product["price"]);
console.log(product.company);