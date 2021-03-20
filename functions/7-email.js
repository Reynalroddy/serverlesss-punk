require('dotenv').config();
const nodemailer = require('nodemailer')
const {HOST,PORT,USER,PASS} = process.env
const transporter = nodemailer.createTransport({
    service:'gmail',
    port:PORT,
    secure: false, // upgrade later with STARTTLS
    auth: {
      user: USER,
      pass: PASS
    }
  });

exports.handler = async (event,context)=>{


    // const method =event.httpMethod;
   /*  if (method !== POST){

        return {
            headers:{'Access-Control-Allow-Origin':'*'},
                statusCode:405,
                body:'only post request is allowed'
            }

    } */

    // const {name,email,message,subject} = event.body
    console.log(JSON.parse(event.body),'x')
const res = JSON.parse(event.body)
const {name,email,message,subject} = res
console.log(name,email,subject,message)
/*     if(!name || !email||!message|| !subject){

        return {
          
                statusCode:400,
                body:'provide all values'
            }
    } */
    


const data = {

from: `darcoders77@gmail.com`,

to:"dolapoajayi28@gmail.com",

subject: "pass",

html:`guy`

}
/* 
try {
    
    await transporter.sendMail({...data})
    return {
        headers:{
            'Access-Control-Allow-Origin': '*'
        },
            statusCode:200,
            body:'success'
        }


} catch (error) {
    
    return {

            statusCode:400,
            body:'error'
        }
}
 */
return {
    headers:{
        'Access-Control-Allow-Origin': '*'
    },
        statusCode:200,
        body:'success'
}



    }
