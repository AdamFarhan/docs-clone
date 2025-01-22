import { type ColorResult, SketchPicker } from "react-color";

import { useEditorStore } from "@/store/use-editor-store";
import {
  DropdownMenu,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { HighlighterIcon } from "lucide-react";
import { ToolbarDropdownTrigger } from "../ToolbarDropdownTrigger";

export const HighlightColorChanger = () => {
  const { editor } = useEditorStore();
  const value = editor?.getAttributes("highlight").color || "#000000";

  const onChange = (color: ColorResult) => {
    editor?.chain().focus().setHighlight({ color: color.hex }).run();
  };

  return (
    <DropdownMenu>
      <ToolbarDropdownTrigger
        icon={HighlighterIcon}
        tooltip="Hightlight Color"
      />
      <DropdownMenuContent className="p-0">
        <SketchPicker color={value} onChange={onChange} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
