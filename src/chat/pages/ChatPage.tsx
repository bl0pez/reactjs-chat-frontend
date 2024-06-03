import { ChatSelect } from "../components/ChatSelect";
import { InboxPeople } from "../components/InboxPeople";

export default function ChatPage() {

  return (
    <div className="flex flex-col w-full gap-2 h-full">
      <ChatSelect />
        {/* <InboxPeople /> */}
    </div>
  );
}