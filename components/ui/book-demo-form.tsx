"use client";
import { handleBookDemo } from "@/app/actions/bookDemo";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./button";
import { Input } from "./input";
import { Label } from "./label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./select";

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  phone: z.string().min(1, "Phone number is required"),
  company: z.string().min(1, "Company name is required"),
  title: z.string().min(1, "Title is required"),
  customerType: z.string().min(1, "Please select who you sell to"),
  revenue: z.string().min(1, "Please select your revenue"),
  teamSize: z.string().min(1, "Please select your team size"),
  referralSource: z.string().min(1, "Please select how you heard about us"),
});

const BookDemoForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    trigger,
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      customerType: "",
      revenue: "",
      teamSize: "",
      referralSource: "",
    },
  });

  const handleSelectChange = ({
    field,
    value,
  }: {
    field:
      | "firstName"
      | "lastName"
      | "email"
      | "phone"
      | "company"
      | "customerType"
      | "revenue"
      | "teamSize"
      | "referralSource";
    value: string;
  }) => {
    setValue(field, value);
    trigger(field);
  };

  const onSubmit = async (data: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    company: string;
    title: string;
    customerType: string;
    revenue: string;
    teamSize: string;
    referralSource: string;
  }) => {
    setIsSubmitting(true);

    try {
      await handleBookDemo(data);
      router.push("/personalized-demo");
    } catch (error) {
      setSubmitError("Something went wrong. Please try again.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col gap-[24px] p-[26px] py-[40px] md:py-[26px]"
    >
      <h1 className="text-left text-[20px] text-[#181D27] font-[600]">
        See mytender.io in action
      </h1>
      <div className="w-full h-[1px] bg-[#E1E1E1]" />
      <div className="flex flex-col gap-[18px] w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-[6px]">
            <Label htmlFor="firstName">
              First Name<span className="text-[#F96B13]">*</span>
            </Label>
            <Input
              id="firstName"
              type="text"
              placeholder="Enter first name"
              {...register("firstName")}
              aria-invalid={errors.firstName ? "true" : "false"}
            />
            {errors.firstName && (
              <p className="text-sm text-primary">{errors.firstName.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-[6px]">
            <Label htmlFor="lastName">
              Last Name<span className="text-[#F96B13]">*</span>
            </Label>
            <Input
              id="lastName"
              type="text"
              placeholder="Enter last name"
              {...register("lastName")}
              aria-invalid={errors.lastName ? "true" : "false"}
            />
            {errors.lastName && (
              <p className="text-sm text-primary">{errors.lastName.message}</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-[6px]">
            <Label htmlFor="email">
              Work Email<span className="text-[#F96B13]">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter work email"
              {...register("email")}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && (
              <p className="text-sm text-primary">{errors.email.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-[6px]">
            <Label htmlFor="phone">
              Phone Number<span className="text-[#F96B13]">*</span>
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Enter phone number"
              {...register("phone")}
              aria-invalid={errors.phone ? "true" : "false"}
            />
            {errors.phone && (
              <p className="text-sm text-primary">{errors.phone.message}</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-[6px]">
            <Label htmlFor="company">
              Company Name<span className="text-[#F96B13]">*</span>
            </Label>
            <Input
              id="company"
              type="text"
              placeholder="Enter company name"
              {...register("company")}
              aria-invalid={errors.company ? "true" : "false"}
            />
            {errors.company && (
              <p className="text-sm text-primary">{errors.company.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-[6px]">
            <Label htmlFor="company">
              Title<span className="text-[#F96B13]">*</span>
            </Label>
            <Input
              id="title"
              type="text"
              placeholder="Enter your title"
              {...register("title")}
              aria-invalid={errors.title ? "true" : "false"}
            />
            {errors.company && (
              <p className="text-sm text-primary">{errors.company.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-[6px]">
            <Label htmlFor="customerType">
              We primarily sell to...<span className="text-[#F96B13]">*</span>
            </Label>
            <Select
              onValueChange={(value) =>
                handleSelectChange({ field: "customerType", value })
              }
            >
              <SelectTrigger id="customerType" className="w-full">
                <SelectValue placeholder="We primarily sell to..." />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>We primarily sell to...</SelectLabel>
                  <SelectItem value="private">Private Sector</SelectItem>
                  <SelectItem value="public">Public Sector</SelectItem>
                  <SelectItem value="both">Both</SelectItem>
                  <SelectItem value="none">Neither, I am consultant</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {errors.customerType && (
              <p className="text-sm text-primary">
                {errors.customerType.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-[6px]">
            <Label htmlFor="revenue">
              Revenue<span className="text-[#F96B13]">*</span>
            </Label>
            <Select
              onValueChange={(value) =>
                handleSelectChange({ field: "revenue", value })
              }
            >
              <SelectTrigger id="revenue" className="w-full">
                <SelectValue placeholder="Annual tender revenue..." />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Annual tender revenue...</SelectLabel>
                  <SelectItem value="under1m">Under £10M</SelectItem>
                  <SelectItem value="£10-20M">£10-20M</SelectItem>
                  <SelectItem value="£20-50M">£20-50M</SelectItem>
                  <SelectItem value="£50-75M">£50-75M</SelectItem>
                  <SelectItem value="£75-100M">£75-100M</SelectItem>
                  <SelectItem value="£100+">£100+</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {errors.revenue && (
              <p className="text-sm text-primary">{errors.revenue.message}</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-[6px]">
            <Label htmlFor="teamSize">
              Team Size<span className="text-[#F96B13]">*</span>
            </Label>
            <Select
              onValueChange={(value) =>
                handleSelectChange({ field: "teamSize", value })
              }
            >
              <SelectTrigger id="teamSize" className="w-full">
                <SelectValue placeholder="Team size..." />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Team size...</SelectLabel>
                  <SelectItem value="1">Just me :)</SelectItem>
                  <SelectItem value="2-5">2-5</SelectItem>
                  <SelectItem value="6-10">6-10</SelectItem>
                  <SelectItem value="21-50">21-50</SelectItem>
                  <SelectItem value="51-100">51-100</SelectItem>
                  <SelectItem value="101-200">101-200</SelectItem>
                  <SelectItem value="201-300">201-300</SelectItem>
                  <SelectItem value="301-500">301-500</SelectItem>
                  <SelectItem value="500-plus">500+</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {errors.teamSize && (
              <p className="text-sm text-primary">{errors.teamSize.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-[6px]">
            <Label htmlFor="referralSource">
              How did you hear about us?
              <span className="text-[#F96B13]">*</span>
            </Label>
            <Select
              onValueChange={(value) =>
                handleSelectChange({ field: "referralSource", value })
              }
            >
              <SelectTrigger id="referralSource" className="w-full">
                <SelectValue placeholder="How did you hear about us?" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>How did you hear about us?</SelectLabel>
                  <SelectItem value="linkedin">LinkedIn</SelectItem>
                  <SelectItem value="google">Google</SelectItem>
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="event">Event</SelectItem>
                  <SelectItem value="friend">From a friend</SelectItem>
                  <SelectItem value="Phone">Phone Call</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {errors.referralSource && (
              <p className="text-sm text-primary">
                {errors.referralSource.message}
              </p>
            )}
          </div>
        </div>
        {submitError && (
          <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm">
            {submitError}
          </div>
        )}
      </div>

      <Button
        type="submit"
        variant="default"
        className="w-full mt-2"
        size="lg"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </Button>
      <p className="text-muted-foreground text-sm">
        By clicking "See mytender.io," you agree to the use of your data in
        accordance with mytender.io’s Privacy Notice, including for marketing
        purposes.
      </p>
    </form>
  );
};

export default BookDemoForm;
