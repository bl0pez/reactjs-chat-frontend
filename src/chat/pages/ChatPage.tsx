import { useChat } from "@/hooks/useChat";
import { ChatSelect } from "../components/ChatSelect";
import { InboxPeople } from "../components/InboxPeople";

export default function ChatPage() {

  const { chatState } = useChat();

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