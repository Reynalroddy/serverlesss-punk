
require('dotenv').config();

const Airtable = require('airtable-node');
 
const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base('appkVW6LwERpgjxx3')
  .table('products')
 
  exports.handler = async (event,context)=>{
try {
    const data = await airtable.list()

    const{records} = data
    console.log(data)
    const prods = records.map((prod)=>{
        const {id} = prod
const{name,image,description,price} = prod.fields
const url = image[0].url

return {id,name,url,price}

    })

    return {
        headers:{'Access-Control-Allow-Origin':'*'},
            statusCode:200,
            body:JSON.stringify(prods)
        }

} catch (error) {
    
    return {
        headers:{'Access-Control-Allow-Origin':'*'},
            statusCode:500,
            body:'general server error'
        }
}
   
    
    }