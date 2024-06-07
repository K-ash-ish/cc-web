import ProgramBanner from "@/components/ProgramBanner";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ClipboardCheck,
  LocateFixed,
  User,
  Users,
} from "lucide-react";
function HomeTution() {
  const homeTution = [
    {
      icon: <ClipboardCheck className="text-amber-500" size={30} />,
      title: "Tailored Instruction",
    },

    {
      icon: <User className="text-amber-500" size={30} />,
      title: "One-on-One Guidance",
    },

    {
      icon: <Users className="text-amber-500" size={30} />,
      title: "Tailored Feedback",
    },
    {
      icon: <LocateFixed className="text-amber-500" size={30} />,
      title: "Supportive Mentorship",
    },
  ];
  return (
    <div className="  bg-white rounded-md  md:px-4 py-4 p-2   md:min-h-[500px] md:w-5/6 w-11/12 mx-auto my-4 flex flex-col justify-around gap-2">
      <h1 className="text-2xl font-semibold underline underline-offset-1 ">
        Home Tution Service:
      </h1>
      <div className=" flex md:flex-row  md:justify-between md:items-center flex-col items-center mb-2 capitalize text-xl">
        <p className="my-2 md:w-1/2 font-thin italic">
          "Personalized Home Tuition Services: Tailored Learning
          at Your Doorstep"
        </p>
        <div className="text-sm flex flex-row items-center flex-wrap gap-1   border border-black p-2 rounded md:border-none ">
          At locations:{"  "}
          <div className="font-semibold flex flex-row items-center gap-2">
            <span>Indore | Bhopal | Jabalpur</span>
            <Link
              to="https://forms.gle/FogDUoUc1PX7msjp9"
              target="_blank"
              className=" font-thin my-2 text-center underline flex items-center justify-center text-blue-500"
            >
              Contact <ArrowUpRight size={10} />
            </Link>
          </div>
        </div>
      </div>

      <ProgramBanner
        title={"Benefits of Classroom Program"}
        description={`Experience personalized learning and flexible scheduling with home tuition, ensuring your child's academic success and confidence. Unlock their potential with tailored instruction in the comfort of your home.`}
        elements={homeTution}
      />
    </div>
  );
}

export default HomeTution;
