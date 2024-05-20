import FormFieldComp from "./FormField";
import { Form } from "./ui/form";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const formSchema = z.object({
  name: z.string({
    required_error: "FullName is required.",
    invalid_type_error: "Name must be a string.",
  }),
  class: z.string({
    required_error: "Student current class is required.",
  }),
  board: z.string({
    required_error: "Student Board is required.",
  }),
  mobileNumber: z.string({
    required_error: "Student Mobile/Whatsapp Number is required.",
  }),
  email: z.string({
    required_error: "Email is required.",
    invalid_type_error: "Please enter a valid email",
  }),
});
function Contact() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      class: "",
      board: "",
      mobileNumber: "",
      email: "",
    },
  });

  function onSubmit(values) {
    const mutations = [
      {
        create: {
          _type: "student_form_data",
          name: values.name,
          class: values.class,
          board: values.board,
          mobile_number: values.mobileNumber,
          email: values.email,
        },
      },
    ];
    console.log(JSON.stringify({ mutations }));
    console.log(import.meta.env.REACT_AUTHORIZATION_TOKEN);
    fetch(`https://5wzoxlfe.api.sanity.io/v2024-05-20/data/mutate/production`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_AUTHORIZATION_TOKEN}`,
      },
      body: JSON.stringify({ mutations }),
    })
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  }

  return (
    <section className="bg-white rounded-md flex flex-col items-center  md:flex-row gap-2 md:px-4  md:min-h-[600px] md:w-5/6  w-full  mx-auto my-4  ">
      <div className="  flex  flex-col gap-4 md:gap-0 md:justify-evenly md:my-0 my-2  md:w-1/2 w-full   md:h-[400px]">
        <div className="  flex flex-col  items-center w-full  ">
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
      <div className="md:w-1/2 w-11/12 border-2 md:border-none my-4 md:my-4 rounded-2xl py-4 md:py-0 justify-around md:flex md:flex-col">
        <div className="md:w-1/2 w-11/12 mx-auto ">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 my-4"
            >
              <FormFieldComp
                form={form}
                type={"text"}
                label="Name"
                name="name"
                required={true}
              />
              <FormFieldComp
                type={"string"}
                form={form}
                label="Class"
                name="class"
                required={true}
              />
              <FormFieldComp
                type={"text"}
                form={form}
                label="Board"
                name="board"
                required={true}
              />
              <FormFieldComp
                type={"tel"}
                form={form}
                label="Mobile Number"
                name="mobileNumber"
                required={true}
              />
              <FormFieldComp
                type={"email"}
                form={form}
                label="Email"
                name="email"
                required={true}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
