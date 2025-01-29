import { format } from "date-fns";
import { SiGoogledocs } from "react-icons/si";
import { Building2Icon, CircleUserIcon } from "lucide-react";
import { useRouter } from "next/navigation";

import { TableCell, TableRow } from "@/components/ui/table";

import { Doc } from "../../../../../convex/_generated/dataModel";
import { DocumentMenu } from "./DocumentMenu";

interface Props {
  document: Doc<"documents">;
}
export const DocumentRow = ({ document }: Props) => {
  const router = useRouter();
  const onNewTabClick = (id: string) => {
    window.open(`/documents/${id}`, "_blank");
  };

  const onRowClick = () => {
    router.push(`/documents/${document._id}`);
  };

  return (
    <TableRow className="cursor-pointer">
      <TableCell className="w-[50px]" onClick={onRowClick}>
        <SiGoogledocs className="size-6 fill-blue-500" />
      </TableCell>
      <TableCell className="font-medium md:w-[45%]" onClick={onRowClick}>
        {document.title}
      </TableCell>
      <TableCell
        className="text-muted-foreground hidden md:flex items-center gap-2"
        onClick={onRowClick}
      >
        {document.organizationId ? (
          <Building2Icon className="size-4" />
        ) : (
          <CircleUserIcon className="size-4" />
        )}
        {document.organizationId ? "Organization" : "Personal"}
      </TableCell>
      <TableCell
        className="text-muted-foreground hidden md:table-cell"
        onClick={onRowClick}
      >
        {format(new Date(document._creationTime), "MMM dd, yyyy")}
      </TableCell>
      <TableCell className="flex justify-end">
        <DocumentMenu
          documentId={document._id}
          title={document.title}
          onNewTab={onNewTabClick}
        />
      </TableCell>
    </TableRow>
  );
};
