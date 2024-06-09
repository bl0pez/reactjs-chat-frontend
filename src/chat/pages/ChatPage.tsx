import { useChatContext } from "@/hooks";
import { ChatSelect } from "../components/ChatSelect";
import { Suspense } from "react";
import { InboxPeopleLazy } from "../components/InboxPeople";
import { LazySpinner } from "../components/LazySpinner";

export default function ChatPage() {
  const { chatState } = useChatContext();

  return (
    <div className="flex flex-col w-full gap-2 h-full">
      {chatState.chatActive ? (
        <Suspense fallback={<LazySpinner />}>
          <InboxPeopleLazy />
        </Suspense>
      ) : (
        <ChatSelect />
      )}
    </div>
  );
}
