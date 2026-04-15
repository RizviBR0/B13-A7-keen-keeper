import Image from "next/image";
import friends from "../../../public/friends.json";
import { TbBellZ } from "react-icons/tb";
import { PiArchiveBold } from "react-icons/pi";
import { BiTrash } from "react-icons/bi";
import ActionButtons from "@/components/ActionButtons";

const page = async ({ params }) => {
    const { id } = await params;
    const expectedFriend = friends.find(f => f.id === Number(id));

    let statusColor = "";

    if (expectedFriend.status.toLowerCase() == "overdue") {
        statusColor = "bg-[#EF4444]";
    } else if (expectedFriend.status.toLowerCase() == "almost due") {
        statusColor = "bg-[#EFAD44]";
    } else if (expectedFriend.status.toLowerCase() == "on-track") {
        statusColor = "bg-[#244D3F]";
    }

    return (
        <div className="my-8 sm:my-12 md:my-16 lg:my-20 flex lg:flex-row flex-col gap-6 w-full">
            <div className="space-y-4 lg:max-w-sm w-full">
                <div className="shadow-md rounded-lg bg-white p-6 flex justify-center items-center gap-2 flex-col">
                    <Image className="rounded-full" src={expectedFriend.picture} width={80} height={80} alt={expectedFriend.name} />

                    <div className="text-center space-y-2">
                        <h1 className="font-semibold text-xl text-[#1F2937]">{expectedFriend.name}</h1>
                        <p className="text-[#64748B] text-xs">{expectedFriend.days_since_contact}d ago</p>

                        <span className={`badge ${statusColor} text-white rounded-full mr-2`}>
                            {expectedFriend.status}
                        </span>

                        <div className="space-x-2 flex-wrap">
                            {expectedFriend.tags.map((tag, idx) => (
                                <span key={idx} className="badge badge-soft bg-[#CBFADB] text-[#244D3F] rounded-full mr-2 uppercase">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <p className="font-medium text-[#64748B] italic">&quot;{expectedFriend.bio}&quot;</p>
                        <p className="text-sm text-[#64748B] font-normal">Email: {expectedFriend.email}</p>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <button className="btn bg-white text-[#1F2937]"><TbBellZ />Snooze 2 weeks</button>
                    <button className="btn bg-white text-[#1F2937]"><PiArchiveBold />Archive</button>
                    <button className="btn bg-white text-[#EF4444]"><BiTrash />Delete</button>
                </div>
            </div>

            <div className="flex-1 space-y-6">
                <div className="flex gap-6 md:flex-row flex-col">
                    <div className="bg-white p-8 rounded-lg shadow-sm space-y-2 text-center w-full">
                        <h1 className="text-[#244D3F] font-semibold text-3xl">
                            {expectedFriend.days_since_contact}
                        </h1>
                        <p className="text-[#64748B]">Days Since Contact</p>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow-sm space-y-2 text-center w-full">
                        <h1 className="text-[#244D3F] font-semibold text-3xl">
                            {expectedFriend.goal}
                        </h1>
                        <p className="text-[#64748B]">Goal (Days)</p>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow-sm space-y-2 text-center w-full">
                        <h1 className="text-[#244D3F] font-semibold text-3xl">
                            {expectedFriend.next_due_date}
                        </h1>
                        <p className="text-[#64748B]">Next Due</p>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-sm space-y-2 w-full">
                    <div className="flex justify-between items-center">
                        <h1 className="text-[#244D3F] font-medium text-xl">
                            Relationship Goal
                        </h1>
                        <button className="btn">Edit</button>
                    </div>
                    <p className="text-[#64748B] text-lg">Connect every <span className="font-bold text-[#1F2937]">30 days</span></p>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-sm space-y-4 w-full">
                    <h1 className="text-[#244D3F] font-medium text-xl">
                        Quick Check-In
                    </h1>
                    <ActionButtons friendName={expectedFriend.name} />
                </div>
            </div>
        </div>
    );
};

export default page;