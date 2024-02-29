export function Header(props: any) {
  return (
    <div className="m-0 mx-auto">
      <div className="max-h-[unset] sm:aspect-[18/9]">
        <div className="pt-[177%] sm:pt-[65.25%] relative max-sm:min-h-[690px] max-h-[unset] m-0">
          {props.t1}
          {props.t2}
          <div className="absolute top-0 bottom-0 w-full">
            <div>
              <a
                href={props.t3}
                className="flex sm:hidden w-full justify-center mt-11 mb-7"
                aria-label="Go to Homepage"
              >
                {props.t4}
              </a>
            </div>
            <div className="w-full flex">
              <div className="w-1/2 flex flex-col items-end">
                <a
                  href={props.t5}
                  className="mt-[7vw] mb-[3vw] hidden sm:block z-40"
                  aria-label="Go to Homepage"
                >
                  {props.t6}
                </a>
                <h1 className="text-9xl text-white text-end text-titleHeroMobile sm:text-titleHero font-light font-medium text-white font-museoModernoLight mb-[18px] lg:mb-[2.5vw] drop-shadow-[0_0_0.2em_#f44f59]">
                  {props.t7}
                </h1>
                <p className="text-2xl mr-2.5 text-base sm:text-subtitleHero text-pink-700 text-awkbit-fuchsia font-normal uppercase font-museoModernoLight mb-[4vw]">
                  {props.t8}
                </p>
                <div className="mr-2.5 hidden sm:block">
                  <div className="mb-7 sm:mb-[1.4vw]">
                    <p className="leading-[23px] uppercase text-white text-awkbit-pinkLight font-normal text-[20px] sm:text-textHero font-ubuntuRegular text-center">
                      {props.t9}
                    </p>
                  </div>
                </div>
                <div className="pl-5 mr-2.5 hidden sm:flex">
                  <form
                    className="flex-col sm:flex-row justify-end items-end gap-4 sm:gap-[1vw] flex w-full"
                    method="post"
                  >
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Your Email"
                      className="w-full sm:w-fit text-[18px] sm:placeholder:text-textFormHero text-[22px] sm:text-textFormHero py-[0.7vw] px-[0.8vw] placeholder:font-ubuntuLight text-awkbit-pinkLight placeholder:text-awkbit-pinkLight placeholder:font-light placeholder:text-center sm:placeholder:text-start bg-awkbit-darkPurple rounded border border-awkbit-borderInput focus:ring-none focus:outline-0"
                      required={true}
                      pattern="^[^@]+@[^@]+\\.[a-zA-Z]{2,}$"
                    />
                    <button className="text-[22px] sm:text-textFormHero py-[0.7vw] px-[1.7vw] whitespace-nowrap w-full uppercase h-fit sm:w-fit text-white font-ubuntuLight bg-awkbit-fuchsiaButton rounded hover:bg-awkbit-pink z-10 border border-awkbit-fuchsiaButton">
                      {props.t10}
                    </button>
                  </form>
                </div>
              </div>
              <div className="w-1/2 max-sm:relative">{props.t11}</div>
            </div>
            <div className="sm:hidden px-5 mt-[30vw]">
              <div className="block sm:hidden">
                <div className="mb-7 sm:mb-[1.4vw]">
                  <p className="leading-[23px] uppercase text-awkbit-pinkLight font-normal text-[20px] sm:text-textHero font-ubuntuRegular text-center">
                    {props.t12}
                  </p>
                </div>
              </div>
              <div className="flex sm:hidden">
                <form
                  className="flex-col sm:flex-row justify-end items-end gap-4 sm:gap-[1vw] flex w-full"
                  method="post"
                >
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full sm:w-fit md:w-[250px] lg:w-fit placeholder:text-lg text-[22px] py-2.5 px-5 2xl:placeholder:text-textFormHero 2xl:text-textFormHero 2xl:py-[0.7vw] 2xl:px-[0.8vw] placeholder:font-ubuntuLight text-awkbit-pinkLight placeholder:text-awkbit-pinkLight placeholder:font-light placeholder:text-center sm:placeholder:text-start bg-awkbit-darkPurple rounded border border-awkbit-borderInput focus:ring-none focus:outline-0"
                    required={true}
                    pattern="^[^@]+@[^@]+\\.[a-zA-Z]{2,}$"
                  />
                  <button className="text-[22px] py-2.5 px-5 2xl:text-textFormHero 2xl:py-[0.7vw] 2xl:px-[1.7vw] whitespace-nowrap w-full uppercase h-fit sm:w-fit text-white font-ubuntuLight bg-awkbit-fuchsiaButton rounded hover:bg-awkbit-pink z-10 border border-awkbit-fuchsiaButton">
                    {props.t13}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
