const passw = "bbvh hors bgbq pxjm";
const email = "noreply.springworthbooks@gmail.com";


import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.gmail.com",

  secure: true, // use SSL
  auth: {
    // user: "itesa.getViral@gmail.com",
    // pass: "rtspkviskcrhorey",

    user: email, // generated ethereal user
    pass: passw, // generated ethereal password
  },
});

async function sendProperty({ name, email, phone, desc ,property}) {
    console.log("SEND????????" ,name ,email ,phone ,desc)
    const defaultYear = new Date().getFullYear();
  const emailOptions = {
    form: email,
    //halilazyz@gmail.com
    to: "basma94ghanem@gmail.com",
    subject: `Contact Message from ${email}`,
    html: `<body style="background: #f3f4f6; padding:0 5px;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px 0; font-family:Trebuchet MS;">
    <div style="text-align: center; margin-bottom: 20px;">
     <h1 style="color: #000; text-transform: uppercase; font-size: 30px;">لديك رسالة اتصال جديدة من موقع الويب الخاص بك</h1>
    </div>
    <div style="padding: 10px; border-radius:5px; background:#fff; -webkit-box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.3); -moz-box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.3); box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.3);">
        <h2 style="text-align: center; text-transform: uppercase; color: teal;">New message</h2>
        <p style="font-size:1rem;"><strong> الاسم: </strong> ${name}</p>
        <p style="font-size:1rem;"><strong> الايميل: </strong> ${email}</p>
        <p style="font-size:1rem;"><strong> رقم الهاتف: </strong> ${phone}</p>
        
        <p style="font-size:1rem;"><strong>الرسالة: </strong> ${desc}</p>
        <p style="font-size:1rem;"><strong>اسم العقار: </strong> ${property}</p>
    
    
    </div>
    </div>
    
    <footer style="text-align: center; padding: 5px 0; color: #000; font-size: 1rem;">
    <h2>Site name</h2>
    <p>© ${defaultYear} All rights reserved</p>
    </footer>
    </body>`
  
  };


  return transporter.sendMail(emailOptions);
}


async function sendContact({ name, email, phone, desc}) {
  console.log("SEND????????" ,name ,email ,phone ,desc)
  const defaultYear = new Date().getFullYear();
const emailOptions = {
  form: email,
  //halilazyz@gmail.com
  to:"halilazyz@gmail.com", 
  //"basma94ghanem@gmail.com",
  subject: `Contact Message from ${email}`,
  html: `<body style="background: #f3f4f6; padding:0 5px;">
  <div style="max-width: 600px; margin: 0 auto; padding: 20px 0; font-family:Trebuchet MS;">
  <div style="text-align: center; margin-bottom: 20px;">
   <h1 style="color: #000; text-transform: uppercase; font-size: 30px;">لديك رسالة اتصال جديدة من موقع الويب الخاص بك</h1>
  </div>
  <div style="padding: 10px; border-radius:5px; background:#fff; -webkit-box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.3); -moz-box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.3); box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.3);">
      <h2 style="text-align: center; text-transform: uppercase; color: teal;">New message</h2>
      <p style="font-size:1rem;"><strong> الاسم: </strong> ${name}</p>
      <p style="font-size:1rem;"><strong> الايميل: </strong> ${email}</p>
      <p style="font-size:1rem;"><strong> رقم الهاتف: </strong> ${phone}</p>
      
      <p style="font-size:1rem;"><strong>الرسالة: </strong> ${desc}</p>
    
  
  
  </div>
  </div>
  
  <footer style="text-align: center; padding: 5px 0; color: #000; font-size: 1rem;">
  <h2>Site name</h2>
  <p>© ${defaultYear} All rights reserved</p>
  </footer>
  </body>`

};


return transporter.sendMail(emailOptions);
}




export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log("DATA-,", req.body);
    const emailRes = req.body.type === 'property' ?  await sendProperty(req.body) :   await sendContact(req.body);
    if (emailRes.messageId) {
      return res.status(200).json({ message: `Email sent successfuly` });
    }

    return res.status(400).json({ message: "Error sending email" });
  }

  return res
    .status(400)
    .json({ message: `Incorrect method: ${req.method}. Did you mean POST?` });
}