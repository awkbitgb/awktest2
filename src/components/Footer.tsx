export function Footer(props: any) {
  return (
    <div className="m-0 mx-auto">
      <div className="max-h-[unset] sm:aspect-[16/9]">
        <div className="pt-[177%] sm:pt-[56.25%] relative max-h-[unset] m-0">
          {props.t1}
          {props.t2}
          <div className="absolute top-0 h-full w-full flex flex-col justify-end sm:pl-[24px] lg:pl-[105px] 2xl:pl-[6vw]">
            <p className="text-pink-300 font-ubuntuRegular text-xl 2xl:text-[1.3vw] font-normal text-center sm:text-start mb-4 sm:mb-0">
              {props.t3}
            </p>
            <div className="flex h-10 sm:h-[48px] lg:h-[3.5vw] items-end justify-center sm:justify-start gap-10 sm:gap-4 mb-24 sm:mb-12 sm:mb-0 lg:mb-[3.2vw]">
              <div className="w-widthSocialIcon lg:w-[3.5vw]">
                <a
                  href={props.t4}
                  className="cursor-pointer"
                  target="_blank"
                  aria-label="Go to Awkbit's Twitter page"
                >
                  {props.t5}
                </a>
              </div>
              <div className="w-widthSocialIcon lg:w-[3.5vw]">
                <a
                  href={props.t6}
                  className="cursor-pointer"
                  target="_blank"
                  aria-label="Go to Awkbit's Linkedin page"
                >
                  {props.t7}
                </a>
              </div>
              <div className="w-widthSocialIcon lg:w-[3.5vw]">
                <a
                  href={props.t8}
                  className="cursor-pointer"
                  target="_blank"
                  aria-label="Go to Awkbit's Medium page"
                >
                  {props.t9}
                </a>
              </div>
            </div>
            <p className="text-white font-ubuntuLight text-base 2xl:text-[1.2vw] font-light lg:mb-52 text-center sm:text-start mb-16 sm:mb-28 lg:mb-[14vw]">
              {props.t10}
              <span className="text-awkbit-pink text-pink-500 cursor-pointer">
                <a href={props.t11} aria-label="Go to Homepage">
                  {props.t12}
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
