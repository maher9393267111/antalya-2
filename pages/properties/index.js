import Header from "../../components/shared/Header"
import PropertiesCard from "../../components/shared/PropertiesCard"
import { fadeIn } from "../../components/shared/Variant"
import FilterCard from "../../components/shared/FilterCard"
import PropertiesSearch from "../../components/shared/PropertiesSearch"
import { featuredProperties as PropertiesHero } from "../../components/data/FeaturedProperties"
import { Properties } from "../../components/data/Propertiesdata"
import Link from "next/link"
import { SearchFilters } from "../../components/data/Propertiesdata"
import { motion } from "framer-motion"

import React ,{useState,useEffect} from "react";
import { getDocuments , getDocumentsOrder } from "@/functions/firebase/getData";
import ProductsMain from "@/components/admin/product/products";
import { useAuth } from "@/functions/context";
import Loader from "@/components/common/Loader";
import { orderBy } from "@firebase/firestore";
import arrow from "../../public/650adcad05bc07eb4bae8dbf_arrow.svg";
import Image from "next/image"
import Layout from "@/components/layout";

function Categories() {


  const {pageLoading, setPageLoading} = useAuth()
  const [products, setProducts] = useState([]);
  // const [loacding, setLoading] = useState(true);
  
  useEffect(() => {
    const getProperties = async () => {
     // setLoading(true);
     setPageLoading(true)
      setProducts([]);
      const data = await getDocumentsOrder(
        "property",
        orderBy("timeStamp", "asc"),
        null ,
        
        
        
       
      );
  
      console.log(data, "fetch Propertirs 3====>>>>");
      setProducts(data);
      setPageLoading(false)
    //  setLoading(false);
    };
    getProperties();
  }, []);
  
  
  
  if(pageLoading) {
    return <Loader/>
  }
  





  return (
    <Layout>

   
    <div>
      <Header
					summaryText={null}
					title={'تصفح جميع العقارات'}
					description={'تصفح جميع العقارات'}
					image={'https://real-estate-webapp-zaptek.vercel.app/background-Images/categories-bg.jpg'}
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


      <section className="px-[5%] pt-[50px] py-[60px] md:pt-[80px] md:pb-[150px]">
        <div className="section-content max-w-[1200px] mx-auto">
          <div className="section-body">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {products?.map(property => (
                    <Link href={`/properties/details/${property.id}`} key={property.id}>
                      <PropertiesCard property={property} />
                    </Link>
                ))}
            </div>
          </div>
        </div>
      </section>






      {/* <section className="px-[5%] py-[30px] ">
        <div className="section-content max-w-[1200px] mx-auto">
            <div className="section-body">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 items-start justify-start">
                <PropertiesSearch />

                {SearchFilters?.map(filter => (
                  <motion.div 
                    variants={fadeIn("up", 0.5, 0)}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0 }}
                    key={filter.id}   
                    className="col-span-1"
                  >
                    <FilterCard filter={filter}/>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
      </section>

      <section className="px-[5%] pt-[50px] py-[60px] md:pt-[80px] md:pb-[150px]">
        <div className="section-content max-w-[1200px] mx-auto">
          <div className="section-body">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {Properties?.map(property => (
                    <Link href={`/properties/details/${property.id}`} key={property.id}>
                      <PropertiesCard property={property} />
                    </Link>
                ))}
            </div>
          </div>
        </div>
      </section> */}


    </div>
    </Layout>
  )
}

export default Categories