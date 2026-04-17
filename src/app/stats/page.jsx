'use client';

import { TimelineContext } from "@/context/TimelineContext";
import { useContext } from "react";
import { Pie, PieChart, Tooltip } from 'recharts';
import pieImage from '../../assets/pie.svg'
import Image from "next/image";

const Page = () => {
    const { activities } = useContext(TimelineContext);

    const textCount = activities.filter(activity => activity.type === "Text").length;
    const callCount = activities.filter(activity => activity.type === "Call").length;
    const videoCount = activities.filter(activity => activity.type === "Video").length;

    const data = [
        { name: "Text", value: textCount, fill: "#7E35E1" },
        { name: "Call", value: callCount, fill: "#244D3F" },
        { name: "Video", value: videoCount, fill: "#37A163" }
    ];

    return (
        <div className="max-w-4xl mx-auto pt-12 px-6">
            <h1 className="text-[#1F2937] font-bold text-4xl mb-6">Friendship Analytics</h1>

            <div className="space-y-6 bg-white p-8 rounded-lg shadow-sm">
                <p className="text-xl font-medium text-[#244D3F]">By Interaction Type</p>

                <div className="flex justify-center items-center">
                    {activities.length === 0 ? (
                        <div className="flex flex-col justify-center items-center my-10">
                            <Image className="text-[#64748B] opacity-15 mb-3" src={pieImage} width={300} height={300} alt="Empty Pie Chart" draggable={false} />
                            <p className="text-[#64748B]">No activities to display.</p>
                        </div>
                    ) : (
                        <PieChart style={{ width: '100%', maxWidth: '350px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
                            <Pie
                                data={data}
                                innerRadius="80%"
                                outerRadius="100%"
                                // Corner radius is the rounded edge of each pie slice
                                cornerRadius={50}
                                // padding angle is the gap between each pie slice
                                paddingAngle={5}
                                dataKey="value"
                                isAnimationActive={true}
                            >
                                <Tooltip />
                            </Pie>
                        </PieChart>
                    )}
                </div>

                <div className="flex items-center justify-center gap-6 flex-wrap">
                    <div className="flex justify-center items-center gap-1">
                        <div className="rounded-full bg-[#7E35E1] w-3 h-3"></div>Text
                    </div>
                    <div className="flex justify-center items-center gap-1">
                        <div className="rounded-full bg-[#244D3F] w-3 h-3"></div>Call
                    </div>
                    <div className="flex justify-center items-center gap-1">
                        <div className="rounded-full bg-[#37A163] w-3 h-3"></div>Video
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;