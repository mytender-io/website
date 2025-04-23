import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Contact() {
  return (
    <footer className="bg-[#FAFAFA] py-10 border-t z-10 relative">
      <div className="max-w-7xl overflow-x-hidden w-full mx-auto px-5 lg:px-6 flex lg:flex-row flex-col lg:justify-between gap-10 text-sm text-gray-600">
        <div className=" lg:w-[404px]">
          <div className="flex items-center gap-2 mb-2">
            <Image
              height={1}
              width={1}
              src="/favicon.svg"
              alt="Logo"
              className="h-6 w-6"
            />
            <span className="font-bold text-[#181D27]">mytender.io</span>
          </div>
          <p className="text-md text-[#535862]">
            Start streamlining your bid process today and experience incredible
            results.
          </p>
        </div>

        <div className=" lg:w-[404px]">
          <h4 className="font-semibold text-[18px] text-[#181D27] mb-4">
            Contact
          </h4>
          <ul className="space-y-3 text-md">
            <li className="flex items-center gap-2">
              <span>
                <Image
                  src="/marker.svg"
                  width={1}
                  height={1}
                  alt="image"
                  className="w-[13.33px] h-[16.67px]"
                />
              </span>{" "}
              <span>128 City Road, London, UK</span>
            </li>
            <li className="flex items-center gap-2">
              <span>
                <Image
                  src="/phone.svg"
                  width={1}
                  height={1}
                  alt="image"
                  className="w-[13.33px] h-[16.67px]"
                />
              </span>{" "}
              <span>+44 75146389911</span>
            </li>
            <li className="flex items-center gap-2">
              <span>
                <Image
                  src="/mail.svg"
                  width={1}
                  height={1}
                  alt="image"
                  className="w-[13.33px] h-[16.67px]"
                />
              </span>{" "}
              <span>hello@mytender.io</span>
            </li>
          </ul>
        </div>
        <div className="w-full lg:max-w-[310px] ">
          <h4 className="font-semibold text-[18px] text-[#181D27] mb-2">
            Subscribe
          </h4>
          <p className="mb-3 text-md">Get the latest news and updates</p>
          <div className="flex flex-col justify-center max-w-[310px] items-start sm:items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md max-w-[310px] focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white text-[#717680]"
            />
            <Link
              className="w-full max-w-[310px]"
              href="https://mytenderio.substack.com/subscribe?next=https%3A%2F%2Fsubstack.com%2F%40mytenderio&utm_source=profile-page&utm_medium=web&utm_campaign=substack_profile&just_signed_up=true"
              target="_blank"
            >
              <Button
                variant={"default"}
                className="w-full max-w-[310px]"
                aria-placeholder="Enter your email"
              >
                Subscribe
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
