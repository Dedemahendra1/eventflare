import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (

  <footer className="flex flex-col items-stretch">
    <div className="bg-neutral-200 flex min-h-[1px] w-full flex-col     max-md:max-w-full" />
    <div className="self-center w-full max-w-[1074px] mt-14 px-5 max-md:max-w-full max-md:mt-10">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[34%] max-md:w-full max-md:ml-0">
          <span className="flex flex-col items-stretch max-md:mt-10">
            <div className="text-blue-950 text-2xl font-medium">
            <Link href='/'>
               <Image 
                 src="/assets/images/logo.png"
                 alt="logo"
                 width={128}
                 height={38}
                />
            </Link>

            </div>
            <div className="text-zinc-400 text-base font-light mt-4">
              We kaboom your beauty holiday
              <br />
              instantly and memorable.
            </div>
          </span>
        </div>
        <div className="flex flex-col items-stretch w-[42%] ml-5 max-md:w-full max-md:ml-0">
          <span className="flex grow flex-col items-stretch max-md:mt-10">
            <div className="flex items-stretch justify-between gap-5">
              <span className="flex grow basis-[0%] flex-col items-stretch">
                <div className="text-blue-950 text-lg font-medium">
                  For Beginners
                </div>
                <div className="text-zinc-400 text-base font-light mt-7">
                  New Account
                </div>
                <div className="text-zinc-400 text-base font-light whitespace-nowrap mt-5">
                  Start Booking your Event
                </div>
                <div className="text-zinc-400 text-base font-light mt-4">
                  Use Payments
                </div>
              </span>
              <span className="flex grow basis-[0%] flex-col items-stretch self-start">
                <div className="text-blue-950 text-lg font-medium whitespace-nowrap">
                  Explore Us
                </div>
                <div className="text-zinc-400 text-base font-light mt-7">
                  Our Careers
                </div>
                <div className="text-zinc-400 text-base font-light mt-5">
                  Privacy
                </div>
                <div className="text-zinc-400 text-base font-light whitespace-nowrap mt-4">
                  Terms & Conditions
                </div>
              </span>
            </div>
          </span>
        </div>
        <div className="flex flex-col items-stretch w-[24%] ml-5 max-md:w-full max-md:ml-0">
          <span className="flex flex-col items-stretch max-md:mt-10">
            <div className="text-blue-950 text-lg font-medium">
              Connect Us
            </div>
            <div className="text-zinc-400 text-base font-light mt-8">
              support@eventflare.id
            </div>
            <div className="text-zinc-400 text-base font-light mt-4">
              021 - 2208 - 1996
            </div>
          </span>
        </div>
      </div>
    </div>
    <div className="text-zinc-400 text-center text-base font-light whitespace-nowrap mt-14 max-md:mt-10">
      Copyright 2024 • All rights reserved • EventFlare
    </div>
  </footer>
  )
}

export default Footer