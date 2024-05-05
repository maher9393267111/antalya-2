import Logo from "./navbar/Logo";
import { Categories, Locations } from "../data/Propertiesdata";
import Link from 'next/link'
import Image from 'next/image'
import { navigationLinks } from "../data/NavLinks";
import FooterLinks from "../footer/FooterLinks";

const Footer = () => {
  return (
    <footer className="px-[5%] pt-[50px] pb-[30px]">
      <div className="section-content max-w-[1200px] mx-auto">
        <div className="grid gap-12 custom-lg:gap-[60px] custom-sm:gap-[50px] custom-lg:grid-cols-2">
          <div className="grid gap-9 custom-sm:grid-cols-3 md:order-2">
            <FooterLinks header={'Navigation'} links={navigationLinks} />
            <FooterLinks header={'Categories'} links={Categories} />
            <FooterLinks header={'Locations'} links={Locations} />
          </div>

          <div className="flex flex-col max-w-[90%] md:max-w-[70%] custom-lg:max-w-none md:order-1">
            <div>
              <Logo />
              <p className="text-[21px] mt-[1.5rem] mb-[10px] text-[#202125] ">
                Ready to elevate your real estate business online? Use Property template.
              </p>
            </div>
            <div className="mt-[30px] pt-[30px] border-t-[1px]">
              <h5 className="text-[15px] text-primary mb-[10px] font-bold">
                Find us
              </h5>
              <div className="flex gap-5">
                <figure className="w-[22px]">
                  <Link
                    href={`https://twitter.com/home`}
                    target='_blank'
                  >
                    <Image 
                    src={'/icons/twitter-icon.png'}
                    alt="twitter icon"
                    className="block w-full"
                    width={240}
                    height={240}
                  />
                  </Link>
                </figure>
                <figure className="w-[22px]">
                  <Link
                    href={`https://web.facebook.com/`}
                    target='_blank'
                  >
                    <Image 
                    src={'/icons/fb-icon.png'}
                    alt="fb icon"
                    className="block w-full"
                    width={240}
                    height={240}
                  />
                  </Link>
                </figure>
                <figure className="w-[22px]">
                  <Link
                    href={`https://www.instagram.com/`}
                    target='_blank'
                  >
                    <Image 
                    src={'/icons/instagram-icon.png'}
                    alt="instagram icon"
                    className="block w-full"
                    width={100}
                    height={100}
                  />
                  </Link>
                </figure>
                <figure className="w-[22px]">
                  <Link
                    href={`https://www.linkedin.com/`}
                    target='_blank'
                  >
                    <Image 
                    src={'/icons/linkedIn-icon.png'}
                    alt="linkedin icon"
                    className="block w-full"
                    width={100}
                    height={100}
                  />
                  </Link>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;