import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { monthHour } from "@/helpers";
import clsx from "clsx";

interface Props {
  text: string;
  position?: "start" | "end";
  date: Date;
}

export const Message = ({ text, position, date }: Props) => {
  return (
    <div
      className={clsx(
        "flex flex-row items-center gap-3",
        { "justify-start": position === "start" },
        { "justify-end": position === "end" }
      )}
    >
      {position === "start" && (
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      )}
      <div className="flex flex-col gap-2">
        <div
          className={clsx(
            "text-sm px-2 py-2 shadow rounded-md",
            { "bg-black bg-opacity-25": position === "start" },
            { "bg-primary text-white": position === "end" }
          )}
        >
          {text}
        </div>
        <span className="text-xs text-gray-400">{monthHour(date)}</span>
      </div>
    </div>
  );
};
