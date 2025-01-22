"use client";

import {
  BoldIcon,
  ItalicIcon,
  ListTodoIcon,
  LucideIcon,
  MessageSquarePlusIcon,
  PrinterIcon,
  Redo2Icon,
  RemoveFormattingIcon,
  SpellCheckIcon,
  UnderlineIcon,
  Undo2Icon,
} from "lucide-react";
import React from "react";

import { useEditorStore } from "@/store/use-editor-store";
import { Separator } from "@/components/ui/separator";

import { ToolbarButton } from "./ToolbarButton";
import { FontFamilyChanger } from "./menus/FontFamilyChanger";
import { HeadingLevelChanger } from "./menus/HeadingLevelChanger";
import { TextColorChanger } from "./menus/TextColorChanger";
import { HighlightColorChanger } from "./menus/HighlightColorChanger";
import { LinkBuilder } from "./menus/LinkBuilder";
import { ImageBuilder } from "./menus/ImageBuilder";
import { AlignChanger } from "./menus/AlignChanger";
import { ListBuilder } from "./menus/ListBuilder";
import { FontSizeChanger } from "./menus/FontSizeChanger";
import { LineHeightChanger } from "./menus/LineHeightChanger";

export const Toolbar = () => {
  const { editor } = useEditorStore();
  const sections: {
    label: string;
    icon: LucideIcon;
    onClick: () => void;
    isActive?: boolean;
  }[][] = [
    [
      {
        label: "Undo",
        icon: Undo2Icon,
        onClick: () => editor?.chain().focus().undo().run(),
      },
      {
        label: "Redo",
        icon: Redo2Icon,
        onClick: () => editor?.chain().focus().redo().run(),
      },
      {
        label: "Print",
        icon: PrinterIcon,
        onClick: () => window.print(),
      },
      {
        label: "Spell Check",
        icon: SpellCheckIcon,
        onClick: () => {
          const current = editor?.view.dom.getAttribute("spellcheck");
          editor?.view.dom.setAttribute(
            "spellcheck",
            current === "false" ? "true" : "false"
          );
          editor?.view.focus();
        },
      },
    ],
    [
      {
        label: "Bold",
        icon: BoldIcon,
        isActive: editor?.isActive("bold"),
        onClick: () => editor?.chain().focus().toggleBold().run(),
      },
      {
        label: "Italics",
        icon: ItalicIcon,
        isActive: editor?.isActive("italic"),
        onClick: () => editor?.chain().focus().toggleItalic().run(),
      },
      {
        label: "Underline",
        icon: UnderlineIcon,
        isActive: editor?.isActive("underline"),
        onClick: () => editor?.chain().focus().toggleUnderline().run(),
      },
    ],
    [
      {
        label: "Add Comment",
        icon: MessageSquarePlusIcon,
        isActive: editor?.isActive("liveblocksCommentMark"),
        onClick: () => editor?.chain().focus().addPendingComment().run(),
      },
      {
        label: "Add List",
        icon: ListTodoIcon,
        isActive: editor?.isActive("taskList"),
        onClick: () => editor?.chain().focus().toggleTaskList().run(),
      },
      {
        label: "Clear Formatting",
        icon: RemoveFormattingIcon,
        onClick: () => editor?.chain().focus().unsetAllMarks().run(),
      },
    ],
  ];

  return (
    <div className="bg-[#F1F4F9] dark:bg-muted px-2.5 py-0.5 rounded-[24px] min-h-[40px] flex items-center gap-x-0.5 overflow-x-auto">
      {sections[0].map((item) => (
        <ToolbarButton key={item.label} {...item} />
      ))}
      <Separator
        orientation="vertical"
        className="h-6 bg-neutral-300 dark:bg-neutral-600"
      />
      <FontFamilyChanger />
      <Separator
        orientation="vertical"
        className="h-6 bg-neutral-300 dark:bg-neutral-600"
      />
      <HeadingLevelChanger />
      <Separator
        orientation="vertical"
        className="h-6 bg-neutral-300 dark:bg-neutral-600"
      />
      <FontSizeChanger />
      <Separator
        orientation="vertical"
        className="h-6 bg-neutral-300 dark:bg-neutral-600"
      />
      {sections[1].map((item) => (
        <ToolbarButton key={item.label} {...item} />
      ))}
      <Separator
        orientation="vertical"
        className="h-6 bg-neutral-300 dark:bg-neutral-600"
      />
      <TextColorChanger />
      <HighlightColorChanger />
      <Separator
        orientation="vertical"
        className="h-6 bg-neutral-300 dark:bg-neutral-600"
      />
      <LinkBuilder />
      <ImageBuilder />
      <AlignChanger />
      <LineHeightChanger />
      <ListBuilder />
      {sections[2].map((item) => (
        <ToolbarButton key={item.label} {...item} />
      ))}
    </div>
  );
};
