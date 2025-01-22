import { MinusIcon, PlusIcon } from "lucide-react";

import { useEditorStore } from "@/store/use-editor-store";

import React, { useState } from "react";
import { ToolbarButton } from "../ToolbarButton";

export const FontSizeChanger = () => {
  const { editor } = useEditorStore();

  const currentFontSize = editor?.getAttributes("textStyle").fontSize
    ? editor?.getAttributes("textStyle").fontSize.replace("px", "")
    : "16";

  const [fontSize, setFontSize] = useState(currentFontSize);
  const [inputValue, setInputValue] = useState(fontSize);
  const [isEditing, setIsEditing] = useState(false);

  const updateFontSize = (newSize: string) => {
    const size = parseInt(newSize);
    if (!isNaN(size) && size > 0) {
      console.log({ size, inputValue, test: `${size}px` });
      editor?.chain().focus().setFontSize(`${size}px`).run();
      setFontSize(newSize);
      setInputValue(newSize);
      setIsEditing(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputBlur = () => {
    updateFontSize(inputValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.currentTarget.blur();
      editor?.commands.focus();
    }
  };

  const increment = () => {
    const newSize = parseInt(fontSize) + 2;
    updateFontSize(newSize.toString());
  };

  const decrement = () => {
    const newSize = parseInt(fontSize) - 2;
    if (newSize > 0) {
      updateFontSize(newSize.toString());
    }
  };
  return (
    <div className="flex items-center gap-x-0.5">
      <ToolbarButton
        icon={MinusIcon}
        onClick={decrement}
        label="Decrease font size"
      />
      {isEditing ? (
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onKeyDown={handleKeyDown}
          className="h-7 w-10 text-sm text-center rounded-sm border border-neutral-400 bg-transparent focus:outline-none focus:ring-0"
        />
      ) : (
        <button
          className="h-7 w-10 text-sm text-center rounded-sm border border-neutral-400 dark:border-neutral-600 hover:bg-neutral-200/80"
          onClick={() => {
            setIsEditing(true);
            setFontSize(currentFontSize);
          }}
        >
          {currentFontSize}
        </button>
      )}
      <ToolbarButton
        icon={PlusIcon}
        onClick={increment}
        label="Increase font size"
      />
    </div>
  );
};
