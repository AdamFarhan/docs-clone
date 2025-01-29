import { auth } from "@clerk/nextjs/server";
import { preloadQuery } from "convex/nextjs";
import { Document } from "./Document";
import { api } from "../../../../convex/_generated/api";
import { Id } from "../../../../convex/_generated/dataModel";

interface Props {
  params: Promise<{ documentId: Id<"documents"> }>;
}

const DocumentPage = async ({ params }: Props) => {
  const { documentId } = await params;
  const { getToken } = await auth();
  const token =
    (await getToken({
      template: "convex",
    })) ?? undefined;

  if (!token) {
    throw new Error("Unauthorized");
  }

  const initialDocument = await preloadQuery(
    api.documents.getById,
    { id: documentId },
    { token }
  );

  if (!initialDocument) {
    throw new Error("Document not found)");
  }

  return <Document initialDocument={initialDocument} />;
};

export default DocumentPage;
