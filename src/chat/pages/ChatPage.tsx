import { useChatContext } from "@/hooks";
import { ChatSelect } from "../components/ChatSelect";
import { InboxPeople } from "../components/InboxPeople";

export default function ChatPage() {

  const { chatState } = useChatContext();

  return (
    <div className="flex flex-col w-full gap-2 h-full">
      {
        chatState.chatActive
        ? <InboxPeople />
        : <ChatSelect />
      }
    </div>
  );
}