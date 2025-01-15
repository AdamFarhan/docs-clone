import { Navbar } from "./components/navbar/Navbar";
import { TemplateGallery } from "./components/template-gallery/TemplateGallery";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-white dark:bg-black p-4">
        <Navbar />
      </div>
      <div className="mt-16">
        <TemplateGallery />
      </div>
    </div>
  );
};

export default HomePage;
