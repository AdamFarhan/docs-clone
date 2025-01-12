import { Link2Icon } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  DropdownMenu,
  DropdownMenuContent,
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
import { ToolbarDropdownTrigger } from "../ToolbarDropdownTrigger";

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
      <ToolbarDropdownTrigger icon={Link2Icon} tooltip="Add Link" />
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
