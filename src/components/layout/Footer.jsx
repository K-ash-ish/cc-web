function Footer() {
  const socialMedia = [
    {
      link: "somelink",
      at: "youtube",
    },
    {
      link: "somelink",
      at: "facebook",
    },
    {
      link: "somelink",
      at: "linkedin",
    },
  ];
  const contactDetails = {
    mobile: "123456789",
    email: "someemail@email.com",
    addres: "Some line Lorem ipsum dolor sit amet consectetur ",
  };
  return (
    <footer className="md:min-h-[320px] flex md:flex-row flex-col md:gap-0 gap-3 md:justify-evenly md:items-center  mx-2  border-2 ">
      <div className="flex justify-around items-center md:flex-col md:justify-normal md:items-start  gap-3 capitalize ">
        <div className="  md:flex bg-white   md:justify-start  ">
          <img
            src="unnamed.webp"
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

      <div className="md:flex md:flex-col md:items-start  gap-3 capitalize ">
        <h3 className="text-xl font-bold md:block hidden text-[#F89035] ">
          Contact us
        </h3>
        <ul className="flex justify-around md:flex-col gap-3  ">
          <li className="lowercase">
            <span className="font-semibold md:inline hidden capitalize pr-1 ">
              Email:
            </span>
            {contactDetails?.email}{" "}
            <span className="md:hidden inline text-orange-400">|</span>
          </li>
          <li className="">
            <span className="font-semibold md:inline hidden capitalize pr-1 ">
              Mobile:
            </span>
            +91 {contactDetails?.mobile}{" "}
            <span className="md:hidden inline text-orange-400">|</span>
          </li>
          <li className="md:w-4/6 flex-1">
            <span className="font-semibold md:inline hidden capitalize pr-1 ">
              Address:
            </span>
            {contactDetails?.addres}
          </li>
        </ul>
      </div>
      <div className="flex  justify-center md:flex-col md:justify-normal items-start  gap-3 capitalize">
        <h3 className="text-xl font-bold md:block hidden text-[#f89035] ">
          Follow us
        </h3>
        <ul className="flex justify-around  w-full  flex-wrap md:flex-col md:gap-2 ">
          {socialMedia?.map((social, i) => {
            return (
              <a href={social?.link} key={i} className="">
                {social.at}
              </a>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
