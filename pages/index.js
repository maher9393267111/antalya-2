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
  export default function Home() {

    return (
      <Layout>

   
      <div className=''>
        {/* <Navbar/> */}
        {/* <HomeHeader /> */}
        <HomeHero />

        <main className='font-semibold'>
          <FilterSection />
          <PopularRealEstateSection />
          <SearchCaregory />
          <LatestPropertiesSection />
          <AboutUs />
          <Testimonials />
          <BlogsSection />
        </main>
      </div>
      </Layout>
    )
  }
