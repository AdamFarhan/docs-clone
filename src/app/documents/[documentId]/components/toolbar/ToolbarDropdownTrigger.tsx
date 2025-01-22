import { DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { LucideIcon } from "lucide-react";
interface Props {
  icon: LucideIcon;
  tooltip: string;
}
export const ToolbarDropdownTrigger = ({ icon: Icon, tooltip }: Props) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <DropdownMenuTrigger asChild>
          <button className="h-7 min-w-7 shrink-0 flex gap-x-1 items-center justify-center rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm">
            <Icon className="size-4" />
          </button>
        </DropdownMenuTrigger>
      </TooltipTrigger>
      <TooltipContent>{tooltip}</TooltipContent>
    </Tooltip>
  );
};
