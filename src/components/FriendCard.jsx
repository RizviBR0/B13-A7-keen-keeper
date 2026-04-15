import Image from "next/image";
import Link from "next/link";

const FriendCard = ({ friend }) => {
    let statusColor = "";

    if (friend.status.toLowerCase() == "overdue") {
        statusColor = "bg-[#EF4444]";
    } else if (friend.status.toLowerCase() == "almost due") {
        statusColor = "bg-[#EFAD44]";
    } else if (friend.status.toLowerCase() == "on-track") {
        statusColor = "bg-[#244D3F]";
    }

    return (
        <Link href={`/${friend.id}`} className="shadow-md rounded-lg bg-white p-6 flex justify-center items-center gap-2 flex-col">
            <Image className="rounded-full" src={friend.picture} width={80} height={80} alt={friend.name} />

            <div className="text-center space-y-2">
                <h1 className="font-semibold text-xl text-[#1F2937]">{friend.name}</h1>
                <p className="text-[#64748B] text-xs">{friend.days_since_contact}d ago</p>

                <div className="space-x-2 flex-wrap">
                    {friend.tags.map((tag, idx) => (
                        <span key={idx} className="badge badge-soft bg-[#CBFADB] text-[#244D3F] rounded-full mr-2 uppercase">
                            {tag}
                        </span>
                    ))}
                </div>

                <span className={`badge ${statusColor} text-white rounded-full mr-2`}>
                    {friend.status}
                </span>
            </div>
        </Link>
    );
};

export default FriendCard;