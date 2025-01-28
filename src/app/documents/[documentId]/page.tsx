import { Editor } from "./components/Editor";
import { Toolbar } from "./components/toolbar/Toolbar";
import { Navbar } from "./Navbar";
import { Room } from "./Room";

interface Props {
  params: Promise<{ documentId: string }>;
}

const DocumentPage = async ({ params }: Props) => {
  const { documentId } = await params;

  return (
    <Room>
      <div className="min-h-screen bg-[#FAFBFD] dark:bg-black">
        <div className="flex flex-col px-4 pt-2 gap-y-2 fixed top-0 left-0 right-0 z-10 bg-[#FAFBFD] dark:bg-black print:hidden">
          <Navbar />
          <Toolbar />
        </div>
        <div className="pt-[114px] print:pt-0">
          <Editor />
        </div>
      </div>
    </Room>
  );
};

export default DocumentPage;
