const result = document.querySelector('.result')

const fetchData = async ()=>{
try {
    const res = await axios.get('/api/3-z')
    const {data} = res

    const dis = data.map((prod)=>{
        const {url,name,price,id} = prod
return `<a href="product.html?id=${id}" class="product">
<img
src="${url}"
alt="${name}"
/>
<div class="info">
<h5>${name}</h5>
<h5 class="price">$${price}</h5>
</div>
</a>`
}).join("")
console.log(dis)
result.innerHTML = dis;
    }
 catch (error) {
    console.log(error)
}


}
fetchData()