import { ArrowUpRight, Mail, MapPin, PhoneCallIcon } from "lucide-react";
import { useLoaderData } from "react-router-dom";

function Footer() {
  const contactDetails = useLoaderData(); //data from database

  return (
    <footer className="bg-white md:min-h-[220px] flex md:flex-row flex-col md:gap-0 gap-3 md:justify-evenly md:items-start md:border-none border-2 border-dashed border-orange-200 rounded-2xl py-4 px-2 md:px-0 md:py-2 md:my-0 my-4 mx-2    ">
      <div className=" flex justify-around items-center md:flex-col md:justify-normal md:items-start  gap-3 capitalize ">
        <div className="  md:flex md:justify-start  ">
          <img
            src="/unnamed.webp"
            alt="logo"
            className="max-w-full max-h-full align-middle  object-contain "
            width={80}
            height={80}
          />
        </div>
        <div>
          <h3 className="uppercase text-xl font-bold text-[#f89035] ">
            gurukul Classes
          </h3>
          <p className="font-thin  md:w-4/6">
            Some line Lorem ipsum dolor sit amet consectetur{" "}
          </p>
        </div>
      </div>

      <div className="md:flex md:flex-col md:items-start  md:max-w-[40%]  gap-3 capitalize ">
        <h3 className="text-xl font-bold md:block hidden text-[#F89035] ">
          Contact us
        </h3>
        <ul className="  flex flex-col md:gap-3 gap-2  text-sm md:text-base ">
          <li className="lowercase flex items-center  md:gap-2 ">
            <Mail
              color="#f89035"
              size={16}
              className="hidden md:inline-block"
            />
            {contactDetails[0]?.email}{" "}
          </li>
          <li className="flex items-center gap-2">
            <PhoneCallIcon
              color="#f89035"
              size={16}
              className="hidden md:inline-block"
            />
            +91 {contactDetails[0]?.mobile_number}
          </li>
          <li className=" flex items-center gap-2">
            <MapPin
              color="#f89035"
              size={16}
              className="hidden md:inline-block"
            />
            <p className="md:w-5/6 ">{contactDetails[0]?.address}</p>
          </li>
        </ul>
      </div>
      <div className="flex  justify-center md:flex-col md:justify-normal items-start  gap-3 capitalize">
        <h3 className="text-xl font-bold md:block hidden text-[#f89035] ">
          Follow us
        </h3>
        <ul className="flex justify-around  w-full  flex-wrap md:flex-col md:gap-2 ">
          {contactDetails[0]?.social_link?.map((social, i) => {
            return (
              <a
                target="_blank"
                href={social.url}
                key={i}
                className="font-semibold flex items-center justify-center gap-1 underline decoration-orange-200 underline-offset-2 "
              >
                {social.title}
                <ArrowUpRight size={10} className="text-blue-400 " />
              </a>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
