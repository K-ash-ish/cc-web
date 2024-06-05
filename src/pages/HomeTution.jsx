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
      title: "Limited Batch Size",
    },

    {
      icon: <User className="text-amber-500" size={30} />,
      title: "Limited Batch Size",
    },

    {
      icon: <Users className="text-amber-500" size={30} />,
      title: "Limited Batch Size",
    },
    {
      icon: <LocateFixed className="text-amber-500" size={30} />,
      title: "Limited Batch Size",
    },
  ];
  return (
    <div className="  bg-white rounded-md  md:px-4 py-4 p-2   md:min-h-[500px] md:w-5/6 w-11/12 mx-auto my-4 flex flex-col justify-around gap-2">
      <h1 className="text-2xl font-semibold underline underline-offset-1 ">
        Home Tution Service:
      </h1>
      <div className=" flex md:flex-row  md:justify-between md:items-center flex-col items-center mb-2 capitalize text-xl">
        <p className="my-2 md:w-1/2 font-thin italic">
          {" "}
          about your service here
        </p>
        <div className="flex flex-row items-center flex-wrap gap-1">
          At locations:{"  "}
          <div className="font-semibold flex flex-row items-center gap-2">
            <span>Indore | Bhopal | Jabalpur</span>
            <Link
              to=""
              className=" font-thin my-2 text-center underline flex items-center justify-center text-blue-500"
            >
              Contact <ArrowUpRight size={10} />
            </Link>
          </div>
        </div>
      </div>

      <ProgramBanner
        title={"Benefits of Classroom Program"}
        description={`Classroom programs are the most popular methods of learning opted by
        students who believe in perfection and who look forward to close, power
        packed interactions to attain complete learning in one go. This is
        extremely successful and result oriented because of strong Peer group,
        personal attention and round the clock availability of mentors.`}
        elements={homeTution}
      />
    </div>
  );
}

export default HomeTution;
