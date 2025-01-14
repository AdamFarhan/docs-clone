import Image from "next/image";
import Link from "next/link";
import { DocumentInput } from "./DocumentInput";
import { DocumentMenu } from "./DocumentMenu";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      <div className="flex gap-2 items-center">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={64} height={36} />
        </Link>
        <div className="flex flex-col">
          <DocumentInput />
          <DocumentMenu />
        </div>
      </div>
    </nav>
  );
};
