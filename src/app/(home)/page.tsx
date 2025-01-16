"use client";
import { usePaginatedQuery } from "convex/react";

import { Navbar } from "./components/navbar/Navbar";
import { TemplateGallery } from "./components/template-gallery/TemplateGallery";
import { DocumentsTable } from "./components/documents-table/DocumentsTable";

import { api } from "../../../convex/_generated/api";

const HomePage = () => {
  const { results, status, loadMore } = usePaginatedQuery(
    api.documents.get,
    {},
    { initialNumItems: 5 }
  );

  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-white dark:bg-black p-4">
        <Navbar />
      </div>
      <div className="mt-16">
        <TemplateGallery />
        <DocumentsTable
          documents={results}
          loadMore={loadMore}
          status={status}
        />
      </div>
    </div>
  );
};

export default HomePage;
