"use client";

import Button from "@/components/Button";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import TextAreaField from "@/components/TextAreaField";
import { useForm } from "react-hook-form";
import { FiSend } from "react-icons/fi";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmitFn = (data: ContactFormData) => {
    console.log("Form Data Submitted:", data);
    reset();
  };

  return (
    <div className="bg-gray-50 p-8 rounded-lg">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        Send us a Message
      </h3>
      <form onSubmit={handleSubmit(onSubmitFn)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField
            lable="First Name"
            type="text"
            id="firstName"
            register={register("firstName", {
              required: "This field is required",
            })}
            error={
              typeof errors?.firstName?.message === "string"
                ? errors.firstName.message
                : ""
            }
          />
          <InputField
            lable="Last Name"
            type="text"
            id="lastName"
            register={register("lastName", {
              required: "This field is required",
            })}
            error={
              typeof errors?.lastName?.message === "string"
                ? errors.lastName.message
                : ""
            }
          />
        </div>
        <InputField
          lable="Email Address"
          type="email"
          id="email"
          register={register("email", {
            required: "This field is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
          })}
          error={
            typeof errors?.email?.message === "string"
              ? errors.email.message
              : ""
          }
        />
        <InputField
          lable="Phone Number"
          type="tel"
          id="phone"
          register={register("phone", {
            required: "This field is required",
            pattern: {
              value: /^\+?[1-9]\d{1,14}$/,
              message: "Invalid phone number",
            },
          })}
          error={
            typeof errors?.phone?.message === "string"
              ? errors.phone.message
              : ""
          }
        />

        <SelectField
          lable="Subject"
          id="subject"
          error={
            typeof errors?.subject?.message === "string"
              ? errors.subject.message
              : ""
          }
          register={register("subject", {
            required: "This field is required",
          })}
        />

        <TextAreaField
          lable="Message"
          id="message"
          register={register("message", {
            required: "This field is required",
          })}
          error={
            typeof errors?.message?.message === "string"
              ? errors.message.message
              : ""
          }
        />
        <Button
          color="blue"
          padding="py-3 px-6"
          fontWeight="font-semibold"
          customStyles="w-full flex items-center justify-center space-x-2"
          type="submit"
        >
          <FiSend className="w-4 h-4" />
          Send Message
        </Button>
      </form>
    </div>
  );
}
