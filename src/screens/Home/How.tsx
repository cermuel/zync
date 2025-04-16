import how from "../../assets/how.svg";
import { FaUsersCog } from "react-icons/fa";
import { TbRocket } from "react-icons/tb";
import { FaUsersRays } from "react-icons/fa6";
const How = () => {
  return (
    <main
      id="how"
      className="w-full px-14 h-auto mb-40 p-4 flex flex-col justify-start gap-20 items-center"
    >
      <h1 className="underline font-semibold text-xl">How It Works</h1>
      <ul className="grid grid-cols-3 gap-6 w-full relative pt-24">
        <div className="absolute flex justify-center w-full items-center left-0 max-lg:hidden">
          <img src={how} className="w-[70%]" alt="" />
        </div>
        {/* {features.map((feature, index) => (
          <li
            key={index}
            className="w-full aspect-video p-5 flex gap-3 items-start rounded-xl bg-[#737cde3f]"
          >
            {feature.icon}
            <div className="flex-1 space-y-4">
              <h1 className="font-semibold text-lg text-white">
                {feature.title}
              </h1>
              <p className="text-white/80 text-sm">{feature.description}</p>
            </div>
          </li>
        ))} */}
        <li className="w-full flex items-center flex-col pl-2">
          <div className="max-w-[200px] flex flex-col items-center text-center pr-4">
            <FaUsersCog size={50} color="#737cde" />
            <h1 className="font-bold text-xl">Create or Join a Workspace</h1>
          </div>
        </li>
        <li className="w-full flex items-center flex-col pl-2">
          <div className="max-w-[200px] flex flex-col items-center text-center pl-4">
            <FaUsersRays size={50} color="#737cde" />
            <h1 className="font-bold text-xl"> Plan, Assign & Collaborate</h1>
          </div>
        </li>
        <li className="w-full flex items-center flex-col pl-2">
          <div className="max-w-[200px] flex flex-col items-center text-center pr-4">
            <TbRocket size={50} color="#737cde" />

            <h1 className="font-bold text-xl">Share, Review & Ship</h1>
          </div>
        </li>
      </ul>
    </main>
  );
};

export default How;
