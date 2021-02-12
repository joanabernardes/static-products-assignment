const url = "https://kea-alt-del.dk/t7/api/products";

fetch(url)
    .then(function (res) {
        return res.json();
    })
    .then(function(data){
        handleProductList(data);
    })

function handleProductList(data){
        console.log(data);
        data.forEach(showProduct);
    }

{/* <template id="cardTemplate">
    <article class="card">
        <h3>Item 1</h3>
        <p class="subtle">Tshirts | Nike</p>
<p class="price">DKK 1595, -</p>
        <img src="img/1542.webp" alt="">
        <button><a href="#product.html">See More...</a></button>
    </article>
  </template> */}
  
    function showProduct(product){
        console.log(product);
        //grab the template
const template = document.querySelector("#cardTemplate").content;
        //clone it
const copy = template.cloneNode(true);
        //change content
copy.querySelector(".subtle").textContent = `${product.articletype} | ${product.brandname}`;
copy.querySelector("h3").textContent = product.productdisplayname;
copy.querySelector(".price").textContent = product.price;

if(product.soldout){
    copy.querySelector("article").classList.add("card-soldOut");
}
if(product.discount){
    copy.querySelector("article").classList.add("card-onSale");
}

{/* <article class="card-onSale">
<h3>Item 1</h3>
<img src="img/1542.webp" alt="">
<div class="discounted">
  <p>Now DKK 1560,-</p>
  <p>-34%</p>
</div>
<button><a href="#product.html">See More...</a></button>
</article> */} 

// copy.querySelector(".discounted p").textContent = product.price;

    //grab parent
const parent = document.querySelector("main");
        //append
        parent.appendChild(copy);
    } 

    