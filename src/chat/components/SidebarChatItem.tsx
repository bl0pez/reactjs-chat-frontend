import clsx from "clsx";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { useChatContext } from "@/hooks";
import { User } from "@/interfaces";

interface Props {
  user: User;
}

export const SidebarChatItem = ({ user }: Props) => {
  const { chatState, dispatch } = useChatContext();

  const handleChatClick = () => {
    dispatch({ type: "SelectChat", payload: { id: user.id! } });
  };

  return (
    <div
      className={clsx(
        "cursor-pointer transition-all bg-white",
        chatState.chatActive === user.id && "bg-gray-200"
      )}
      onClick={handleChatClick}
    >
      <div className="flex gap-2 items-center py-2 px-3">
        <Avatar
          className={clsx(
            "border-2",
            user.online ? "border-green-500" : "border-red-500"
          )}
        >
          {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
          <AvatarFallback>
            {user!
              .name!.split(" ")
              .map((name) => name[0].toUpperCase())
              .join("")}
          </AvatarFallback>
        </Avatar>
        <h3>{user?.name}</h3>
      </div>
      <Separator />
    </div>
  );
};
