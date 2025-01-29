"use client";

import { Preloaded, usePreloadedQuery } from "convex/react";

import { Editor } from "./components/Editor";
import { Toolbar } from "./components/toolbar/Toolbar";
import { Navbar } from "./Navbar";
import { Room } from "./Room";
import { api } from "../../../../convex/_generated/api";

interface Props {
  initialDocument: Preloaded<typeof api.documents.getById>;
}

export const Document = ({ initialDocument }: Props) => {
  const document = usePreloadedQuery(initialDocument);

  return (
    <Room>
      <div className="min-h-screen bg-[#FAFBFD] dark:bg-black">
        <div className="flex flex-col px-4 pt-2 gap-y-2 fixed top-0 left-0 right-0 z-10 bg-[#FAFBFD] dark:bg-black print:hidden">
          <Navbar data={document} />
          <Toolbar />
        </div>
        <div className="pt-[114px] print:pt-0">
          <Editor />
        </div>
      </div>
    </Room>
  );
};
