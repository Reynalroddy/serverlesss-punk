
const result = document.querySelector('.result')
const fetchProduct = async ()=>{
    try {
const id = window.location.search;
const res = await axios(`/api/3-z${id}`)
const {data} = res
const{name,description,image,price}= data.fields
console.log(data)

result.innerHTML = ` <article class="product">
<img class="product-img"
src="${image[0].url}"
alt="${name}"
/>
<div class="product-info">
  <h5 class="title">${name}</h5>
  <h5 class="price">$${price}</h5>
  <p class="desc">${description}</p>
</div>
</article>`
    } catch (error) {
        console.log(error)
    }
}

fetchProduct()