import { ImageIcon, Link2Icon, SearchIcon, UploadIcon } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { useEditorStore } from "@/store/use-editor-store";
import { useState } from "react";

const formSchema = z.object({
  url: z.string().url().min(1),
});

export const ImageBuilder = () => {
  const { editor } = useEditorStore();
  const [dialogOpen, setDialogOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    editor?.chain().focus().setImage({ src: values.url }).run();
    setDialogOpen(false);
    form.reset();
  }

  const onUpload = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";

    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        onSubmit({ url: imageUrl });
      }
    };

    input.click();
  };

  return (
    <>
      <DropdownMenu
        onOpenChange={(open) => {
          if (open) {
            form.setValue("url", editor?.getAttributes("link").href || "");
            form.clearErrors("url");
          }
        }}
      >
        <DropdownMenuTrigger asChild>
          <button className="h-7 min-w-7 shrink-0 flex flex-col items-center justify-center rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm">
            <ImageIcon className="size-4" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={onUpload}>
            <UploadIcon className="size-4 mr-2" />
            Upload
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setDialogOpen(true)}>
            <SearchIcon className="size-4 mr-2" />
            Paste image url
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Insert Image URL</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex gap-x-2 items-start w-full"
              id="imageUploadForm"
            >
              <FormField
                control={form.control}
                name="url"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input placeholder="Insert image URL" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
          <DialogFooter>
            <Button type="submit" form="imageUploadForm">
              Insert
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
