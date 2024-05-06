import Image from "next/image";
import Gallery from "../../../components/PropertiesDetails/Gallery";
import AllProperties from "../../../components/PropertiesDetails/AllProperties";
import arrow from "../../../public/650adcad05bc07eb4bae8dbf_arrow.svg";
import Link from "next/link";
// import SwiperComponent from '../../../components/PropertiesDetails/SwiperComponent'
import { LiaBedSolid } from "react-icons/lia";
import parse from "html-react-parser";
import {
	PiBathtubLight,
	PiCarDuotone,
	PiTree,
	PiSwimmingPoolThin,
	PiDoorOpen,
} from "react-icons/pi";
import { BsPlusSquare } from "react-icons/bs";
import { GiCctvCamera } from "react-icons/gi";
import { MdOutlineLocalLaundryService } from "react-icons/md";
import { RiParkingBoxLine } from "react-icons/ri";
import { CiForkAndKnife } from "react-icons/ci";
import { useRouter } from "next/router";
import { Properties } from "../../..//components/data/Propertiesdata";
import { featuredProperties } from "../../../components/data/FeaturedProperties.js"

import { FiWifi } from "react-icons/fi";
import Header from "../../../components/shared/Header";
import Nopage from "../../../components/shared/Nopage";

import HeaderSummary from "../../../components/shared/HeaderSummary";
import list2 from "../../../public/listing-2.jpg";
import list3 from "../../../public/listing-3.jpg";
import list4 from "../../../public/listing-4.jpg";
import list5 from "../../../public/listing-5.jpg";
import PictureGallery from "../../../components/PropertiesDetails/PictureGallery.js";
// import SwiperComponent from '../../../components/PropertiesDetails/SwiperComponent'

import { getDocument } from '@/functions/firebase/getData';
import Loader from '@/components/common/Loader';
import { useAuth } from '@/functions/context';


import React ,{useState ,useEffect ,useRef} from 'react';
import Layout from "@/components/layout";

function PropertyDetail() {


    const [property, setProperty] = useState({});
    
  //  const [loacding, setLoading] = useState(false);
    const {pageLoading, setPageLoading} = useAuth()
  
    const router = useRouter();
    
    const propertyId = router.query.propertyId;
    
  console.log("IDDD" , property)

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
		property: property?.title,
		desc:'ارجو التواصل',

		phone: phone,
		type:"property"
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





  
    useEffect(() => {
      const getProduct = async () => {
       // setLoading(true);
       setPageLoading(true)
        //setProduct({});
        const data = await getDocument("property", propertyId);
        console.log(data, "fetch categories ====>>> 🎭🎭🎭>", data);
        setProperty(data);
        setPageLoading(false)
       // setLoading(false);
      };
  
      if (propertyId) getProduct();
    }, [propertyId]);
  

    if(pageLoading  || !property){
        return <Loader/>
    }








	
	// const { propertyId } = router.query;
	// const id = parseInt(propertyId);

	// const property = Properties.find((property) => property.id === id);
	// const description =
	// 	"Modern and bright, this downtown apartment offers proximity to the finest restaurants and entertainment";
	// if (property) {
		return (
			<Layout>

			
			<>
				<Header
					summaryText={property.sellprice}
					title={property.title}
					description={property?.title}
					image={property?.images?.length && property?.images[0]}
					cutout>
					
					<a href="https://wtspee.com/905385809972" target="_blank">
						<button className=" arabic btn-primary rounded-md mt-[60px] flex mx-auto gap-3 group">
						تواصل معنا

          

							<figure className="w-[13px] group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-all">
								<Image src={arrow} alt="arrow" className="block w-full" />
							</figure>

              

						</button>
				
        </a>
					

				</Header>
				<div className="general-margin mt-20">
				{/* Gallery */}
				<div className="my-20 mx-3 md:mx-10 rounded-md">
					<PictureGallery images={property?.images} />
				</div>
					{/* properties details */}
					<div dir="rtl" className="flex flex-col lg:flex-row justify-start items-center gap-10">
						<div className="lg:w-[60%] md:w-[100%] sm:w-[100%]">
							<div className="">
								<HeaderSummary
									containerBorder="border-primary"
									textColor="text-primary"
									dotBgColor="bg-primary"
									summaryText="تفاصيل العقار"
								/>
							</div>

							<div className="text-red-500 flex justify-between items-center lg:w-[80%] md:w-[80%] sm:w-full my-8">
								<div className="text-primary flex justify-center items-center gap-3">
									<LiaBedSolid size={30} />
									<p className="arabic text-primary">{property.beds} سرير</p>
								</div>
								<div className="text-primary flex justify-center items-center gap-3">
									<PiBathtubLight size={30} />
									<p className="arabic text-primary">{property.paths} حمام</p>
								</div>
								<div className="text-primary flex justify-center items-center gap-3">
									<BsPlusSquare size={30} />{" "}
									<p className="arabic text-primary">{property.space}m2 المساحة</p>
								</div>
								<div className="text-primary flex justify-center items-center gap-3">
									<PiCarDuotone size={30} />{" "}
									<p className="arabic text-primary">
										{property.parks} حديقة
									</p>
								</div>
							</div>
							<hr className="my-10" />

							<div>
	{/* -desck parse						 */}

	{property?.desc &&
<div className="arabic">

{parse(property?.desc)}
</div>

	}

								<hr className="my-12" />
								<div>
									<HeaderSummary
										containerBorder="border-primary"
										textColor="text-primary"
										dotBgColor="bg-primary"
										summaryText="مزايا العقار"
									/>
								</div>
								<div className="grid arabic grid-cols-3 gap-y-[10%]">
									
{property?.garden &&
									<div className="text-primary flex justify-start items-center gap-3">
										<PiTree size={30} />
										<p className=" arabic text-primary">حديقة</p>
				
									</div>
 }

{property?.camera &&
									<div className="text-primary flex justify-start items-center gap-3">
										<GiCctvCamera size={30} />
										<p className= " arabic text-primary">كاميرات مراقبة</p>
									</div>
}

{property?.laundry &&

									<div className="text-primary flex justify-start items-center gap-3">
										<MdOutlineLocalLaundryService size={30} />
										<p className=" arabic text-primary">غسالة</p>
									</div>

}

{property?.wifi &&
									<div className="text-primary flex justify-start items-center gap-3">
										<FiWifi size={30} />{" "}
										<p className=" arabic text-primary">انترنت</p>
									</div>

}


{property?.pool &&

									<div className="text-primary flex justify-start items-center gap-3">
										<PiSwimmingPoolThin size={30} />
										<p className=" arabic text-primary">مسبح</p>
									</div>

}

{property?.garage &&

									<div className="text-primary flex justify-start items-center gap-3">
										<RiParkingBoxLine size={30} />
										<p className=" arabic text-primary">كراج سيارات</p>
									</div>

}


{property?.jacu &&
									<div className="text-primary flex justify-start items-center gap-3">
										<PiBathtubLight size={30} />
										<p className=" arabic text-primary">جاكوزي</p>
									</div>

}

{property?.elevator &&
									<div className="text-primary flex justify-start items-center gap-3">
										<PiDoorOpen size={30} />
										<p className=" arabic text-primary">مصعد</p>
									</div>

}

{property?.dishwasher &&
									<div className="text-primary flex justify-start items-center gap-3">
										<CiForkAndKnife size={30} />
										<p className=" arabic text-primary"> غسالة صحون </p>
									</div>

}
								</div>
							</div>
						</div>

						{/* Pricing Card */}
						<div className="lg:w-[35%] md:w-full sm:w-full border p-8 rounded-md shadow-md">
							<div className="p-x-5">
								<div className="flex gap-2 items-center">
									<p className="bg-red-500 arabic font-semibold text-white p-2 rounded-lg w-fit my-4">
										سعر البيع
									</p>
									<p>{property.sellprice}$</p>
								</div>

								<div className="flex gap-2 items-center">
									<p className="bg-red-500 arabic font-semibold text-white p-2 rounded-lg w-fit my-4">
										سعر الايجار
									</p>
									<p>{property.rentprice}$</p>
								</div>


								<hr className="mt-4" />
								<div>
									<h3 className=" arabic my-4">تواصل معنا</h3>
									<p className="arabic">
										للحصول على المزيد من المعلومات
									</p>
								</div>
								<div>
									<form
									 onSubmit={(e) => Submit(e)}
									
									className="w-full mt-4">
										<input
										    name="name"
											ref={nameRef}
											required={true}
											className="border p-2 py-4 rounded w-full"
											type="text"
											placeholder="John Doe"
										/>{" "}
										<br />
										<input
										    name="Email"
											ref={mailRef}
											required={true}
											className="border p-2 py-4 rounded my-5 w-full"
											type="text"
											placeholder="contact@gmail.com"
										/>{" "}
										<br />
										<input
										    name="Phone"
											ref={mobileRef}
											required={true}
											className="border p-2 rounded w-full py-4"
											type="text"
											placeholder="+1 345-678"
										/>{" "}
										<br /> <br />
										<button className=" arabic justify-center border w-full text-center py-4 btn-secondary">
											ارسال الى الايميل
										</button>
										{/* 90 538 580 99 72⁩ */}
										<button className=" arabic justify-center mt-4 border w-full text-center py-4 btn-secondary">


<a href="https://wtspee.com/905385809972" target="_blank">

											تواصل وتس اب

											</a>
										</button>



									</form>
								</div>
							</div>
						</div>
					</div>

					{/* Browse all properties */}
					<div className="mt-32">
						{/* <div className="grid lg:grid-cols-2 md:grid-cols-1 sm-max:grid-cols-1 gap-5">
							{featuredProperties.map((property, index) => (
								<AllProperties
									key={index}
									id={property.id}
									propertyImage={property.propertyImage}
									bed={property.bed}
									status={property.status}
									price={property.price}
									name={property.name}
									location={property.location}
									bath={property.bath}
									sqft={property.sqft}
									featured={property.featured}
								/>
							))}
						</div> */}

						<Link
							href={"/properties"}
							className="btn-secondary arabic mx-auto w-fit flex justify-center mt-20 mb-44 ">
							تصفح كافة العقارات
						</Link>
					</div>
					{/* <SwiperComponent /> */}
				</div>
			</>



			</Layout>
		);

}

export default PropertyDetail;
