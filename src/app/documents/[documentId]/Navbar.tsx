import Image from "next/image";
import Link from "next/link";

import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

import { DocumentInput } from "./DocumentInput";
import { DocumentMenu } from "./DocumentMenu";
import { Avatars } from "./components/Avatars";
import { Inbox } from "./components/Inbox";
import { Doc } from "../../../../convex/_generated/dataModel";

interface NavbarProps {
  data: Doc<"documents">;
}
export const Navbar = ({ data }: NavbarProps) => {
  return (
    <nav className="flex items-center justify-between">
      <div className="flex gap-2 items-center">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={64} height={36} />
        </Link>
        <div className="flex flex-col">
          <DocumentInput title={data.title} id={data._id} />
          <DocumentMenu data={data} />
        </div>
      </div>
      <div className="flex gap-3 items-center pl-6">
        <Avatars />
        <Inbox />
        <OrganizationSwitcher
          afterCreateOrganizationUrl="/"
          afterLeaveOrganizationUrl="/"
          afterSelectOrganizationUrl="/"
          afterSelectPersonalUrl="/"
        />
        <UserButton
          appearance={{
            elements: {
              userButtonAvatarBox: {
                height: "48px",
                width: "48px",
              },
            },
          }}
        />
      </div>
    </nav>
  );
};
