import { Raleway } from "next/font/google";
import Link from "next/link";
import { BsHouses } from "react-icons/bs";

const raleway = Raleway({ variable: "--font-raleway", subsets: ["latin"] });

function Logo({
  isStacked = false,
  isTextWhite = false,
}: {
  isStacked?: boolean;
  isTextWhite?: boolean;
}) {
  return (
    <Link href="/">
      <div
        className={`flex gap-3.5 ${isStacked ? "flex-col items-center" : ""}`}
      >
        <BsHouses className={`logo-icon ${isStacked ? "!text-5xl" : ""}`} />
        <h1
          className={`${raleway.variable} ${
            isTextWhite ? "dark:text-tx-lt-primary" : "dark:text-tx-dr-primary"
          } text-2xl text-nowrap`}
        >
          <span className="font-bold">Horizon</span> <span>Haven</span>
        </h1>
      </div>
    </Link>
  );
}

export default Logo;
