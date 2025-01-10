import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useEditorStore } from "@/store/use-editor-store";
import { ChevronDown } from "lucide-react";
import { type Level } from "@tiptap/extension-heading";

export const HeadingLevelChanger = () => {
  const { editor } = useEditorStore();

  const headings = [
    { label: "Normal", value: 0, fontSize: "1rem" },
    { label: "Heading 1", value: 1, fontSize: "1.875rem" },
    { label: "Heading 2", value: 2, fontSize: "1.5rem" },
    { label: "Heading 3", value: 3, fontSize: "1.25rem" },
    { label: "Heading 4", value: 4, fontSize: "1.125rem" },
    { label: "Heading 5", value: 5, fontSize: "1rem" },
  ];

  const getCurrentHeading = () => {
    for (let level = 1; level <= 5; level++) {
      if (editor?.isActive("heading", { level })) {
        return `Heading ${level}`;
      }
    }

    return "Normal";
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="h-7 min-w-7 shrink-0 flex items-center justify-center rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm">
          <span className="truncate">{getCurrentHeading()}</span>
          <ChevronDown className="ml-2 size-4 shrink-0" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-1 flex flex-col gap-y-1">
        {headings.map((heading) => (
          <button
            key={heading.value}
            style={{ fontSize: heading.fontSize }}
            onClick={() => {
              if (heading.value === 0) {
                editor?.chain().focus().setParagraph().run();
              } else {
                editor
                  ?.chain()
                  .focus()
                  .toggleHeading({ level: heading.value as Level })
                  .run();
              }
            }}
            className={cn(
              "flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-neutral-200/80",
              ((heading.value === 0 && !editor?.isActive("heading")) ||
                editor?.isActive("heading", { level: heading.value })) &&
                "bg-neutral-200/80"
            )}
          >
            {heading.label}
          </button>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
