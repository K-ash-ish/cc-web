import ProgramBanner from "@/components/ProgramBanner";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ClipboardCheck,
  LocateFixed,
  User,
  Users,
} from "lucide-react";
function Classroom() {
  const boards = ["mp", "icse", "cbse"];

  const classroom = [
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
    <div className="  bg-white rounded-md  md:px-4 p-2  md:min-h-[400px] min-h-[500px] md:w-5/6 w-11/12 mx-auto my-4 flex flex-col justify-around gap-2">
      <h1 className="text-2xl font-semibold underline underline-offset-1 ">
        Classroom Program:
      </h1>
      <div className=" flex md:flex-row  md:justify-between md:items-center flex-col items-center mb-2 capitalize text-xl">
        <p className="my-2 md:w-1/2 font-thin italic">
          {" "}
          about your service here
        </p>
        <div className="flex flex-row items-center gap-1">
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
        elements={classroom}
      />

      <h1 className="text-2xl   capitalize font-medium p-2 my-2  rounded-md">
        Material based on boards:
      </h1>
      <div className="flex md:flex-row md:justify-around md:items-center md:flex-auto flex-col justify-around flex-1 rounded-md my-4 ">
        {boards?.map((board, i) => (
          <Link
            key={i}
            to={`/courses/${board}`}
            className="uppercase font-semibold text-2xl md:min-h-40 min-h-24 py-2 md:w-40 card flex md:flex-col md:justify-evenly md:items-center flex-col items-center bg-slate-900 rounded-md text-white hover:bg-slate-50 hover:duration-200 hover:text-black"
          >
            <img
              src={`/${board}board.png`}
              className="object-contain w-20 h-20"
              height={80}
              width={80}
            />
            {board}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Classroom;
