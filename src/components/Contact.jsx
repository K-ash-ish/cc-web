import React from "react";
import FormFieldComp from "./FormField";
import { Form } from "./ui/form";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";

function Contact() {
  const form = useForm({
    defaultValues: {
      bio: "",
      name: "",
      userHandle: "",
      pictureUrl: "",
    },
  });

  return (
    <section className="     flex  min-h-[80%]  md:w-5/6 md:mx-auto md:my-4  ">
      <div className=" md:flex md:flex-col md:justify-evenly  md:w-1/2 ">
        <div className="  md:flex md:flex-col bg-white   md: items-center w-full  ">
          <img
            src="unnamed.webp"
            alt="logo"
            className="max-w-full max-h-full align-middle  object-contain "
            width={80}
            height={80}
          />
          <p className="font-thin  text-center ">
            Some line Lorem ipsum dolor sit amet consectetur{" "}
          </p>
        </div>
        <div className="md:flex md:flex-col gap-4">
          <h1 className="text-center text-3xl font-semibold ">
            Ready to Take the First Step?
          </h1>
          <p className="px-2 text-xl font-thin leading-loose">
            We invite you to contact us today for a free consultation to discuss
            your academic goals and explore how{" "}
            <span className="text-[#f89035] font-semibold [text-shadow:_4px_3px_10px_rgb(0_0_0_/_25%)]">
              Gurukul Classes
            </span>{" "}
            can help you achieve them. Let's embark on this journey to success
            together!
          </p>
        </div>
      </div>
      <div className="w-1/2 justify-around md:flex md:flex-col">
        <div className="w-1/2 mx-auto ">
          <Form {...form}>
            <form className="space-y-4 my-4">
              <FormFieldComp form={form} fieldName="Name" required={true} />
              <FormFieldComp form={form} fieldName="Class" required={true} />
              <FormFieldComp form={form} fieldName="Board" required={true} />

              <FormFieldComp
                form={form}
                fieldName="Mobile Number"
                required={true}
              />
            </form>
            <Button>Submit</Button>
          </Form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
