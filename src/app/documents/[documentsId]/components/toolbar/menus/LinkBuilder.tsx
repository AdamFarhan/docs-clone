import { Link2Icon } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  DropdownMenu,
  DropdownMenuContent,
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
import { useEditorStore } from "@/store/use-editor-store";

const formSchema = z.object({
  url: z.string().url().min(1),
});

export const LinkBuilder = () => {
  const { editor } = useEditorStore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    editor
      ?.chain()
      .focus()
      .extendMarkRange("link")
      .setLink({ href: values.url })
      .run();
  }

  return (
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
          <Link2Icon className="size-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-2.5">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex gap-x-2 items-start"
          >
            <FormField
              control={form.control}
              name="url"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="https://example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Apply</Button>
          </form>
        </Form>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
