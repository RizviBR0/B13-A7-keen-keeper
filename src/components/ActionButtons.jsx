"use client";

import { useContext } from "react";
import { TimelineContext } from "@/context/TimelineContext";
import { PiPhoneCallBold } from "react-icons/pi";
import { LuMessageSquareMore } from "react-icons/lu";
import { RiVideoOnLine } from "react-icons/ri";

const ActionButtons = ({ friendName }) => {
    const { addActivity } = useContext(TimelineContext);

    return (
        <div className="flex gap-4 flex-col sm:flex-row">
            <button
                onClick={() => addActivity("Call", friendName)}
                className="bg-[#F8FAFC] border border-[#E9E9E9] rounded-lg p-4 gap-2 text-lg text-[#1F2937] w-full flex flex-col justify-center items-center cursor-pointer hover:bg-[#edeff3]"
            >
                <PiPhoneCallBold className="font-bold text-3xl text-[#1F2937]" />Call
            </button>
            <button
                onClick={() => addActivity("Text", friendName)}
                className="bg-[#F8FAFC] border border-[#E9E9E9] rounded-lg p-4 gap-2 text-lg text-[#1F2937] w-full flex flex-col justify-center items-center cursor-pointer hover:bg-[#edeff3]"
            >
                <LuMessageSquareMore className="font-bold text-3xl text-[#1F2937]" />Text
            </button>
            <button
                onClick={() => addActivity("Video", friendName)}
                className="bg-[#F8FAFC] border border-[#E9E9E9] rounded-lg p-4 gap-2 text-lg text-[#1F2937] w-full flex flex-col justify-center items-center cursor-pointer hover:bg-[#edeff3]"
            >
                <RiVideoOnLine className="font-bold text-3xl text-[#1F2937]" />Video
            </button>
        </div>
    );
};

export default ActionButtons;