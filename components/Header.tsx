import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header>
      <div className="flex items-center space-x-2 md:space-x-10">
        <Image
          src={"/Netflix_logo.svg"}
          alt={"Netflix 2015 logo"}
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />

        <ul className="hidden space-x-4 md:flex">
            <li className="header-link">Home</li>
            <li className="header-link">TV Shows</li>
            <li className="header-link">Movies</li>
            <li className="header-link">New & Popular</li>
            <li className="header-link">My List</li>
        </ul>
      </div>
      <div className=""></div>
    </header>
  );
};

export default Header;
