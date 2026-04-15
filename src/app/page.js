import { FaPlus } from "react-icons/fa";
import friends from "../../public/friends.json";
import FriendCard from "@/components/FriendCard";

export default async function Home() {
  const totalFriends = friends.length;

  const onTrackCount = friends.filter(
    (friend) => friend.status.toLowerCase() === "on-track",
  ).length;

  const needAttentionCount = friends.filter(
    (friend) =>
      friend.status.toLowerCase() === "overdue" ||
      friend.status.toLowerCase() === "almost due",
  ).length;

  return (
    <div className="space-y-6 mb-20">
      <div className="text-center mt-16 mb-10 space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1F2937]">
          Friends to keep close in your life
        </h1>
        <p className="text-[#64748B] max-w-xl mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <button className="bg-[#244D3F] text-white px-6 py-3 rounded-md hover:bg-[#19362c] flex justify-center items-center gap-1 mx-auto cursor-pointer">
          <FaPlus />
          Add a Friend
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-white p-8 rounded-lg shadow-sm space-y-2 text-center">
          <h1 className="text-[#244D3F] font-semibold text-3xl">
            {totalFriends}
          </h1>
          <p className="text-[#64748B]">Total Friends</p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-sm space-y-2 text-center">
          <h1 className="text-[#244D3F] font-semibold text-3xl">
            {onTrackCount}
          </h1>
          <p className="text-[#64748B]">On Track</p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-sm space-y-2 text-center">
          <h1 className="text-[#244D3F] font-semibold text-3xl">
            {needAttentionCount}
          </h1>
          <p className="text-[#64748B]">Need Attention</p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-sm space-y-2 text-center">
          <h1 className="text-[#244D3F] font-semibold text-3xl">12</h1>
          <p className="text-[#64748B]">Interactions This Month</p>
        </div>
      </div>

      <div className="divider"></div>

      <div>
        <h1 className="font-semibold text-2xl text-[#1F2937] mb-4">
          Your Friends
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      </div>
    </div>
  );
}
