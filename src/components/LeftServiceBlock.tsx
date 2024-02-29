export function LeftServiceBlock(props: any) {
  return (
    <div className="container mx-auto">
      <div className="flex px-7 md:p-10 mb-8 lg:mb-0 md:flex-row-reverse flex-col items-center justify-center gap-y-8 md:gap-x-16 lg:gap-x-36 2xl:mb-[6vw] 2xl:gap-x-[8vw]">
        <div className="flex w-full justify-end items-center md:hidden">
          {props.t1}
        </div>
        <div className="w-full md:w-1/2 flex">
          <div className="flex flex-col items-start text-left">
            <h1 className="uppercase font-museoModernoRegular text-featureTitleMobile smallScreen:text-featureTitle text-purple-100 2xl:text-[3vw] 2xl:leading-[2.5vw]">
              {props.t2}
            </h1>
            <p className="mt-2 md:mt-3.5 text-pink-300 font-ubuntuRegular text-lg md:text-xl smallScreen:text-featureSubtitle mb-4 md:mb-8 uppercase 2xl:text-[1.5vw] 2xl:mt-[1vw] 2xl:mb-[2vw]">
              {props.t3}
            </p>
            <p className="font-ubuntuRegular leading-6 text-purple-100 text-lg smallScreen:text-2xl 2xl:text-[1.5vw] 2xl:leading-[1.5vw]">
              {props.t4}
            </p>
            <p className="font-ubuntuLight font-light leading-6 smallScreen:w-maxWidthText text-awkbit-grayText text-lg smallScreen:text-2xl 2xl:text-[1.5vw] 2xl:leading-[1.5vw] 2xl:w-[34vw]">
              {props.t5}
            </p>
          </div>
        </div>
        <div className="md:w-1/2 justify-start items-center hidden md:flex">
          {props.t6}
        </div>
      </div>
    </div>
  );
}
