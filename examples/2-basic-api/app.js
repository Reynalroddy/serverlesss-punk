const result = document.querySelector('.result')

const fetchData = async ()=>{

    try {
       
const res = await axios.get("/api/2-basicapi")
const {data} = res;
console.log(data)
const dis = data.map((item)=>{
const {name,price,image:{url}} = item;
      return `<article class="product">
    <img
  src="${url}"
  alt="${name}"
/>
<div class="info">
  <h5>${name}</h5>
  <h5 class="price">$${price}</h5>
</div>
</article>`
}).join("")
console.log(dis)
result.innerHTML = dis
    }  
    catch (error) {
  result.innerHTML = "error fettching product"
}
}
fetchData()