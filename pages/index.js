  import HomeHero from "../components/home/HomeHero"
  import SearchCaregory from "../components/home/SearchCaregory"
  import FilterSection from "../components/home/FilterSection"
  import PopularRealEstateSection from "../components/home/PopularRealEstateSection"
  import Testimonials from "../components/home/Testimonials"
  import LatestPropertiesSection from "../components/home/LatestPropertiesSection"
  import AboutUs from "../components/home/AboutUs"
  import BlogsSection from "../components/home/BlogsSection"

import Navbar from "@/components/layout/navbar"
import Layout from "@/components/layout"


import React ,{useState,useEffect} from "react";
import { getDocuments , getDocumentsOrder } from "@/functions/firebase/getData";
import ProductsMain from "@/components/admin/product/products";
import { useAuth } from "@/functions/context";
import Loader from "@/components/common/Loader";
import { orderBy } from "@firebase/firestore";



  export default function Home() {



    const {pageLoading, setPageLoading} = useAuth()
    const [products, setProducts] = useState([]);
    // const [loacding, setLoading] = useState(true);
    
    useEffect(() => {
      const getFeatures = async () => {
       // setLoading(true);
       setPageLoading(true)
        setProducts([]);
        const data = await getDocumentsOrder(
          "property",
          orderBy("timeStamp", "asc"),
          null ,
          2
          
          
         
        );
    
        console.log(data, "fetch Propertirs 3====>>>>");
        setProducts(data);
        setPageLoading(false)
      //  setLoading(false);
      };
      getFeatures();
    }, []);
    
    
    
    if(pageLoading) {
      return <Loader/>
    }
    





    return (
      <Layout>


   
      <div className=''>
        {/* <Navbar/> */}
        {/* <HomeHeader /> */}
        <HomeHero />

        <main className='font-semibold'>
          {/* <FilterSection /> */}
          <PopularRealEstateSection data={products} />
          {/* <SearchCaregory />
          <LatestPropertiesSection />
          <AboutUs />
          <Testimonials />
          <BlogsSection /> */}
        </main>
      </div>
      </Layout>
    )
  }
