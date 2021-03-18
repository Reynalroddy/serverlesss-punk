
const ele = document.querySelector(".result");

const fetchAnswer = async()=>{
try {
    
    //.netlify/functions/1-hello
    const res = await axios.get(`/api/1-hello`);

    const {data} = res
    console.log(data)
    ele.textContent = data
} catch (error) {
    console.log(error.response)
}


}

fetchAnswer()