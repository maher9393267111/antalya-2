import Header from "../components/shared/Header";
import FAQ from "../components/FAQ/FAQ";
import { faqdata } from "../components/data/faqdata";
import { motion } from "framer-motion";
import { fadeIn } from "../components/variants";
import HeaderSummary from "../components/shared/HeaderSummary";
import Layout from "@/components/layout";
import { useRef } from "react";
import { useAuth } from "@/functions/context";
import Loader from "@/components/common/Loader";
function Contact() {

  const {pageLoading, setPageLoading} = useAuth()
   
  const nameRef = useRef(null);
  const mailRef = useRef(null);
  const mobileRef = useRef(null);
  const descriptionRef = useRef(null);

  function Submit(e) {
	e.preventDefault();
	const formEle = document.querySelector("form");
	const name = nameRef?.current?.value;
	const phone = mobileRef?.current?.value;
	const email = mailRef?.current?.value;
	const desc = descriptionRef?.current?.value;

	console.log(name, phone, email, desc);

	// pushing data to google sheet

	// const formDatab = new FormData(formEle);
	const formDatab = formEle;
	console.log(formDatab, "body");

	

	setPageLoading(true);

	fetch("/api/contact", {
	  method: "POST",
	  headers: { "Content-Type": "application/json" },

	  body: JSON.stringify({
		name: name,
		email: email,
		
		desc:'ارجو التواصل',

		phone: phone,
		type:"contact"
	  }),
	})
	  .then((res) => res.json())
	  .then((data) => {
		setPageLoading(false);
		console.log(data);
		alert("شكرا لك سنتواصل معكم قريبا");
		// clear the form
		try {
		  nameRef.current.value = "";
		  mailRef.current.value = "";
		  if (mobileRef.current) mobileRef.current.value = "";
		  descriptionRef.current.value = "";
		} catch (error) {
		  console.log(error);
		}
	  })
	  .catch((error) => {
		setPageLoading(false);
		console.log(error);
	  });
  }




  
  if(pageLoading ){
    return <Loader/>
}





	return (
    <Layout>

  
		<>
			<Header image={"/contact-bg.jpg"} summaryText={"Contact us"} styles={"mt-0"}>
				<div className="display-1 shimmer arabic  text-3xl md:text-5xl !shadow- relative -top-8 text-whit font-bold max-w-2xl mx-auto ">
        تحدث مع أحد المتخصصين في العقارات
				</div>
			</Header>
			<motion.div
				variants={fadeIn("up", 0.5, 0)}
				initial="offscreen"
				whileInView="onscreen"
				viewport={{ once: true, amount: 0 }}
				className="general-margin my-20">
				<div  className="  flex justify-center items-center">
					<form 
           onSubmit={(e) => Submit(e)}
          
          className="w-[70%] font-semibold">
						<div className="flex flex-col md:flex-row">
							<div className="flex arabic  flex-col mr-5 w-full">
								<label>الاسم</label>
								<input
                    name="Name"
                    ref={nameRef}
                    required={true}
									type="text"
									placeholder="John Doe"
									className="p-3 border border-slate-300 rounded my-3 w-full focus:outline-blue-500 outline-2"
								/>
							</div>
							<div className="flex arabic  flex-col w-full ">
								<label>الايميل</label>
								<input
                    name="Email"
                    ref={mailRef}
                    required={true}
									type="email"
									placeholder="contact@email.com"
									className="p-3 border border-slate-300 rounded my-3 w-full focus:outline-blue-500 outline-2"
								/>
							</div>
						</div>
						<div className="flex flex-col md:flex-row">
							<div className="flex arabic  flex-col mr-5 w-full">
								<label>رقم الهاتف</label>
								<input
                    name="Phone"
                    ref={mobileRef}
                    required={true}
									type="tel"
									placeholder="+1 345-678"
									className="p-3 border border-slate-300 rounded my-3 w-full focus:outline-blue-500 outline-2"
								/>
							</div>
							{/* <div className="flex arabic  flex-col w-full">
								<label>الشركة</label>
								<input
									type="text"
									placeholder="Add Company"
									className="p-3 border border-slate-300 rounded my-3 w-full focus:outline-blue-500 outline-2"
								/>
							</div> */}
						</div>
						<div className="flex arabic  flex-col w-full">
							<label>الرسالة</label>
							<textarea
                  name="Phone"
                  ref={descriptionRef}
                  required={true}
								placeholder="Please type your message here..."
								className="p-3 arabic border border-slate-300 rounded my-3 w-full focus:outline-blue-500 outline-2"
							/>
						</div>
						<div>
							<button className="w-full arabic  my-3 btn-secondary">
								ارسال 
							</button>
						</div>
					</form>
				</div>

				{/* FAQ
				<motion.div 
					variants={fadeIn("up", 0.5, 0)}
					initial="offscreen"
					whileInView="onscreen"
					viewport={{ once: true, amount: 0 }}
				
				className="flex flex-col justify-center items-center mt-20 mb-10">
					<HeaderSummary
						containerBorder="border-primary"
						textColor="text-primary"
						dotBgColor="bg-primary"
						summaryText="FAQ"
					/>
					<h1 className="">Frequently asked questions</h1>
				</motion.div>
				<motion.div
					variants={fadeIn("up", 0.5, 0)}
					initial="offscreen"
					whileInView="onscreen"
					viewport={{ once: true, amount: 0 }}
					className="grid sm:grid-cols-1">
					{faqdata.map((faq, index) => {
						return (
							<FAQ key={index} question={faq.questions} answer={faq.answers} />
						);
					})}
				</motion.div>
				<p className="py-10">
					Didn’t find what you were looking for? Visit our Support Center or
					learn more about Event Template
				</p> */}
			</motion.div>
		</>
    </Layout>
	);
}

export default Contact;