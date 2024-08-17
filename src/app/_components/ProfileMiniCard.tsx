import Link from "next/link";
import React from "react";

const ProfileMiniCard = ({ user, info }: any) => {
  return (
    <Link href="/" className="flex gap-2 items-center w-fit">
      <div className="bg-lightGray w-10 h-10 rounded-xl flex items-end justify-end">
        <div className=" self-end w-2 h-2 bg-green-500 rounded-full"></div>
      </div>
      <div>
        <p>@{user}</p>
        <p className=" text-mezoGray text-sm">{info}</p>
      </div>
    </Link>
  );
};

export default ProfileMiniCard;
