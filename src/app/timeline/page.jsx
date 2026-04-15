"use client";

import { useContext, useState } from "react";
import Image from "next/image";
import { TimelineContext } from "@/context/TimelineContext";
import callIcon from "../../assets/call.png";
import textIcon from "../../assets/text.png";
import videoIcon from "../../assets/video.png";

export default function TimelinePage() {
    const { activities } = useContext(TimelineContext);
    const [filter, setFilter] = useState("All Activities");

    const getIcon = (filterType) => {
        if (filterType === "Text") {
            return textIcon
        };
        if (filterType === "Video") {
            return videoIcon
        };
        if (filterType === "Call") {
            return callIcon
        };
    };

    const filteredActivities = activities.filter((activity) => {
        if (filter === "All Activities") {
            return true
        };

        return activity.type === filter;
    });

    return (
        <div className="max-w-4xl mx-auto py-12 px-6">
            <h1 className="text-[#1F2937] font-bold text-4xl mb-6">Timeline</h1>

            <div className="mb-8">
                <select
                    className="select select-bordered w-full max-w-xs border-[#E9E9E9] text-[#64748B]"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                >
                    <option>All Activities</option>
                    <option>Call</option>
                    <option>Text</option>
                    <option>Video</option>
                </select>
            </div>

            <div className="space-y-4">
                {filteredActivities.length === 0 ? (
                    <div className="w-full flex justify-center items-center mt-16"><p className="text-gray-500">No activities found.</p></div>
                ) : (
                    filteredActivities.map((activity) => (
                        <div
                            key={activity.id}
                            className="flex items-center gap-6 p-4 border border-[#E9E9E9] rounded-xl bg-white shadow-sm"
                        >
                            <div className="w-10 h-10 relative flex items-center justify-center">
                                <Image
                                    src={getIcon(activity.type)}
                                    alt={activity.type}
                                    width={40}
                                    height={40}
                                    className="object-contain"
                                />
                            </div>
                            <div>
                                <h3 className="text-[#1F2937] font-medium text-lg">
                                    <span className="font-semibold">{activity.type}</span> <span className="text-[#64748B] text-base font-normal">with {activity.friendName}</span>
                                </h3>
                                <p className="text-[#64748B] text-sm text-left">{activity.date}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
