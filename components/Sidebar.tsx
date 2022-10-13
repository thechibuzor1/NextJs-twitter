import React, { useEffect } from "react";
import SidebarRow from "./SidebarRow";
import {
  HomeIcon,
  HashtagIcon,
  BellIcon,
  BookmarkIcon,
  CollectionIcon,
  DotsCircleHorizontalIcon,
  MailIcon,
  UserIcon,
} from "@heroicons/react/outline";
import { useSession, signIn, signOut } from "next-auth/react";
import { toast } from "react-hot-toast";

function Sidebar() {
  const { data: session } = useSession();
  useEffect(() => {
    toast("Not Signed in? Click the account icon to sign in.", {
      icon: "🧍",
    });
  }, []);

  return (
    <div className="flex flex-col col-span-2 items-center px-4 md:items-start">
      <img
        className="m-3 h-10 w-10"
        src="https:///links.papareact.com/drq"
        alt=""
      />
      <SidebarRow Icon={HomeIcon} title="home" />
      <SidebarRow Icon={HashtagIcon} title="Explore" />
      <SidebarRow Icon={BellIcon} title="Notification" />
      <SidebarRow Icon={MailIcon} title="Messages" />
      <SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
      <SidebarRow Icon={CollectionIcon} title="Lists" />
      <SidebarRow
        onClick={session ? signOut : signIn}
        Icon={UserIcon}
        title={session ? "Sign out" : "Sign in"}
      />

      <SidebarRow Icon={DotsCircleHorizontalIcon} title="More" />
    </div>
  );
}

export default Sidebar;
