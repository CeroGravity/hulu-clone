import {
  HomeIcon,
  CollectionIcon,
  BadgeCheckIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import { useRouter } from "next/router";
import HeaderItem from "./HeaderItem";

function Header() {
  const router = useRouter();

  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl space-x-5">
        <HeaderItem Icon={HomeIcon} title="home" />
        <HeaderItem Icon={LightningBoltIcon} title="trending" />
        <HeaderItem Icon={BadgeCheckIcon} title="verified" />
        <HeaderItem Icon={CollectionIcon} title="collections" />
        <HeaderItem Icon={SearchIcon} title="search" />
        <HeaderItem Icon={UserIcon} title="account" />
      </div>

      <Image
        onClick={() => router.push(`/`)}
        className="object-contain"
        src="/hulu.svg"
        alt="app-logo"
        width={200}
        height={100}
      />
    </header>
  );
}

export default Header;
