import { Award, Lock, Shield, Zap } from "lucide-react";
import Image from "next/image";
import Heading from "../ui/heading";
import Tag from "../ui/tag";

export default function SecurityAndCompliance() {
  return (
    <div className="w-full h-full py-14 lg:px-5">
      <div className="bg-[#1c1c1c] flex lg:flex-row flex-col-reverse items-center gap-20 px-5 py-14 lg:px-10 h-full w-full max-w-[1372px] m-auto lg:rounded-[20px] overflow-hidden lg:scale-93">
        <div className="w-full">
          <Image
            src="/security.jpeg"
            alt="Security and Compliance"
            width={1920}
            height={1080}
            className="w-full rounded-[20px] h-full object-cover "
          />
        </div>
        <div className="flex w-fill flex-col justify-center items-center gap-10 lg:gap-[71px]">
          <div className="flex flex-col gap-5">
            {/* <div className="flex w-fit py-2 px-[14px] justify-center items-center gap-[6px] rounded-full bg-white/10 backdrop-blur-[2px] text-white/[62%] text-base font-medium leading-[20px]">
              <Image src="/lock.svg" alt="Lock Icon" width={20} height={20} />
              Security & Compliance
            </div> */}
            <Tag
              text={"Security & Compliance"}
              color="#FFEFE5"
              textColor="#F96B13"
              iconPath="/lock.svg"
              className="bg-white/10 text-white/[62%]"
            />
            <Heading
              headingClassName={"text-white"}
              subHeadingClassName={"text-[#C0C0C0]"}
              heading="Enterprise grade security"
              subHeading="Despite our fun approach to bidding; We take security seriously. Your bid data and proprietary information are protected with industry-leading security measures."
            />
          </div>
          <div className="grid grid-cols-1 gap-10 w-full md:grid-cols-2">
            <div className="">
              <p className="inline-flex items-start text-white gap-[10px] text-lg font-semibold ">
                <Shield size={22} className="mt-1" />
                GDPR Compliant
              </p>
              <p className="text-[#8B8B8B] text-base ">
                Your data is handled accordingly to strict privacy standards.
              </p>
            </div>
            <div className="">
              <p className="inline-flex items-start text-white gap-[10px] text-lg font-semibold ">
                <Lock size={22} className="mt-1" />
                End-to-End Encryption
              </p>
              <p className="text-[#8B8B8B] text-base ">
                All your sensitive information is fully encrypted.
              </p>
            </div>
            <div className="">
              <p className="inline-flex items-start text-white gap-[10px] text-lg font-semibold ">
                <Zap size={22} className="mt-1" />
                ISO 27001 Certified
              </p>
              <p className="text-[#8B8B8B] text-base ">
                We meet international security standards.
              </p>
            </div>
            <div className="">
              <p className="inline-flex items-start text-white gap-[10px] text-lg font-semibold ">
                <Award size={22} className="mt-1" />
                CPD & IIRSM Accredited
              </p>
              <p className="text-[#8B8B8B] text-base ">
                CPD trained team so your data is never impeded by any
                operational activity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
