import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import clsx from "clsx";

interface Props {
  text: string;
  position?: "start" | "end";
}

export const Message = ({ text, position }: Props) => {
  return (
    <div className={`flex flex-row items-center justify-${position} gap-3`}>
      {position === "start" && (
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      )}
      <div
        className={clsx(
          "relative text-sm pt-3 pb-2 px-4 shadow rounded-xl",
          { "bg-black bg-opacity-25": position === "start" },
          { "bg-primary text-white": position === "end" }
        )}
      >
        {text}
      </div>
    </div>
  );
};
