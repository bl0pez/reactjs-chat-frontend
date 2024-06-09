import clsx from "clsx";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { useChatContext } from "@/hooks";
import { Message, User } from "@/interfaces";
import { fetchConToken, firstTwoLetters, userNameSplit } from "@/helpers";

interface Props {
  user: User;
}

export const SidebarChatItem = ({ user }: Props) => {
  const { chatState, dispatch } = useChatContext();

  const handleChatClick = async() => {

    if (chatState.chatActive === user.id) return;

    dispatch({ type: "SelectChat", payload: { id: user.id! } });

    // Cargar mensajes del chat seleccionado
    const { data, errorMessage } = await fetchConToken<Message[]>({
      endpoint: `message/${user.id}`,
      method: 'GET'
    });

    if (errorMessage) return;

    dispatch({ type: "LoadMessages", payload: data! })
  };

  return (
    <div
      className={clsx(
        "cursor-pointer transition-all bg-white border-b-2 md:border-b-0 md:border-r-2",
        chatState.chatActive === user.id && "border-primary"
      )}
      onClick={handleChatClick}
    >
      <div className="flex gap-2 flex-col md:flex-row items-center py-2 px-3">
        <Avatar
          className={clsx(
            "border-2",
            user.online ? "border-green-500" : "border-red-500"
          )}
        >
          {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
          <AvatarFallback>
            {firstTwoLetters(user.name!)}
          </AvatarFallback>
        </Avatar>
        <h3 className="text-sm w-24 text-center md:w-auto md:text-left truncate">{userNameSplit(user.name!)}</h3>
      </div>
      <Separator />
    </div>
  );
};
