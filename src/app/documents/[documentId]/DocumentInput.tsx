import { toast } from "sonner";
import { useMutation } from "convex/react";
import { BsCloudCheck, BsCloudSlash } from "react-icons/bs";
import React, { useRef, useState } from "react";

import { useDebounce } from "@/hooks/use-debounce";
import { useStatus } from "@liveblocks/react";

import { Id } from "../../../../convex/_generated/dataModel";
import { api } from "../../../../convex/_generated/api";
import { LoaderIcon } from "lucide-react";

interface Props {
  title: string;
  id: Id<"documents">;
}

export const DocumentInput = ({ id, title }: Props) => {
  const status = useStatus();

  const [value, setValue] = useState(title);
  const [isPending, setIsPending] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const mutate = useMutation(api.documents.updateById);

  const debouncedUpdate = useDebounce((newValue: string) => {
    if (newValue === title) return;

    setIsPending(true);
    mutate({ id, title: newValue })
      .then(() => {
        toast.success("Document updated");
      })
      .catch(() => {
        toast.error("Something went wrong");
      })
      .finally(() => {
        setIsPending(false);
      });
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value === title) return;

    setIsPending(true);
    mutate({ id, title: value })
      .then(() => {
        toast.success("Document updated");
        setIsEditing(false);
      })
      .catch(() => {
        toast.error("Something went wrong");
      })
      .finally(() => {
        setIsPending(false);
      });
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    debouncedUpdate(newValue);
  };

  const isLoading =
    isPending || status === "connecting" || status === "reconnecting";
  const isError = status === "disconnected";

  return (
    <div className="flex items-center gap-2">
      {isEditing ? (
        <form className="relative w-fit max-w-[50ch]" onSubmit={handleSubmit}>
          <span className="invisible whitespace-pre px-1.5 text-lg">
            {value || " "}
          </span>
          <input
            ref={inputRef}
            value={value}
            onChange={onChange}
            onBlur={() => setIsEditing(false)}
            className="absolute inset-0 text-lg text-black px-1.5 bg-transparent truncate"
          />
        </form>
      ) : (
        <span
          onClick={() => {
            setIsEditing(true);
            setTimeout(() => {
              inputRef.current?.focus();
            }, 0);
          }}
          className="text-lg px-1.5 cursor-pointer truncate"
        >
          {title}
        </span>
      )}

      {!isError && !isLoading && <BsCloudCheck className="size-4" />}
      {isLoading && (
        <LoaderIcon className="size-4 animate-spin text-muted-foreground" />
      )}
      {isError && <BsCloudSlash className="size-4" />}
    </div>
  );
};
