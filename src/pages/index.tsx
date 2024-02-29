import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Image from "next/image";
export default function Page() {
  return (
    <>
      <Header
        t1={
          <Image
            src="/backgroundHero.png"
            width={1512}
            height={982}
            alt=""
            className="absolute top-0 w-full h-full object-cover object-center max-h-[unset] hidden sm:block"
          />
        }
        t2={
          <Image
            src="/backgroundHeroMobile.png"
            width={428}
            height={799}
            alt=""
            className="absolute top-0 w-full h-full object-center max-h-[unset] block sm:hidden"
          />
        }
        t3="/"
        t4={
          <Image
            src="/logoMobile.svg"
            width={126}
            height={50}
            alt="logo"
            className="object-center lg:mb-11 z-40"
          />
        }
        t5="/"
        t6={
          <Image
            src="/logo.svg"
            width={233}
            height={92}
            alt="logo"
            className="w-[14vw]"
          />
        }
        t7={
          <>
            we <br className="inline-block" /> arri{" "}
            <br className="inline-block" /> ved
          </>
        }
        t8="test"
        t9={
          <>
            I&#xb4;m looking for a{" "}
            <span className="uppercase text-pink-400 text-awkbit-pink font-normal text-[20px] sm:text-textHero font-ubuntu">
              <br className="sm:hidden uppercase" />
              BUNCH OF CODERS
            </span>
          </>
        }
        t10="contact us"
        t11={
          <Image
            src="/sloth.svg"
            width={1361}
            height={1090}
            alt="sloth"
            className="sm:hidden absolute -top-[147%] sm:-top-1/4 -left-16 sm:left-[42%] max-w-[600px] sm:max-w-full h-[700px] sm:h-auto w-[600px] sm:w-full"
          />
        }
        t12={
          <>
            I&#xb4;m looking for a{" "}
            <span className="uppercase text-awkbit-pink font-normal text-[20px] sm:text-textHero font-ubuntu">
              <br className="sm:hidden uppercase" />
              BUNCH OF CODERS
            </span>
          </>
        }
        t13="contact us"
      />
      <Footer
        t1={
          <Image
            src="/footer.svg"
            width={1512}
            height={720}
            alt=""
            className="absolute bottom-0 w-full object-cover object-center max-h-[unset] hidden sm:block"
          />
        }
        t2={
          <Image
            src="/footerMobile.svg"
            width={428}
            height={720}
            alt=""
            className="absolute top-0 w-full h-full object-cover object-center max-h-[unset] block sm:hidden"
          />
        }
        t3="Join on Social"
        t4="https://twitter.com/AwkbitV2"
        t5={
          <Image
            src="/twitter.svg"
            width={24}
            height={19}
            alt="footer"
            className="sm:w-7 lg:w-[2vw]"
          />
        }
        t6="https://www.linkedin.com/company/awkbit"
        t7={
          <Image
            src="/linkedin.svg"
            width={20}
            height={21}
            alt="footer"
            className="sm:w-7 lg:w-[2vw]"
          />
        }
        t8="https://awkbit.medium.com/"
        t9={
          <Image
            src="/medium.svg"
            width={25}
            height={14}
            alt="footer"
            className="sm:w-7 lg:w-[2vw]"
          />
        }
        t10={
          <>
            Copyright &#xa9; 2023 All rights reserved{" "}
            <br className="smallScreen:hidden" /> | Powered by
          </>
        }
        t11="/"
        t12="Awkbit"
      />
    </>
  );
}
