import { Separator } from "@/components/ui/separator";
import { Message } from "./Message";
import { TextMessage } from "./TextMessage";
import { useAuthContext, useChatContext } from "@/hooks";
import { lazy } from "react";

export default function InboxPeople() {
  const { chatState } = useChatContext();
  const { user } = useAuthContext();

  return (
    <>
      <div
        id="messages"
        className="flex-1 p-4 gap-4 flex flex-col overflow-y-auto"
      >
        {chatState.messages.map((msg) =>
          msg.from === user?.id ? (
            <Message
              key={msg.id}
              text={msg.message}
              date={msg.createdAt}
              position="end"
            />
          ) : (
            <Message
              key={msg.id}
              text={msg.message}
              date={msg.createdAt}
              position="start"
            />
          )
        )}

        {/* {isLoading && <TypingLoader />} */}
      </div>

      <Separator />

      <TextMessage placeholder="Type a message..." disableCorrections />
    </>
  );
}

export const InboxPeopleLazy = lazy(() => import("./InboxPeople"));
