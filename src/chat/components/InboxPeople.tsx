import { Separator } from "@/components/ui/separator";
import { Message } from "./Message";
import { TextMessage } from "./TextMessage";

export const InboxPeople = () => {
  const msgs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

  return (
    <>
      <div className="flex-1 p-4 gap-3 flex flex-col overflow-y-auto">
        {msgs.map((msg, index) =>
          msg % 2 ? (
            <Message key={index} text="hola mundo 2" position="start" />
          ) : (
            <Message key={index} text="Hi sadasd a das " position="end" />
          )
        )}

        {/* {isLoading && <TypingLoader />} */}
      </div>

      <Separator />

      <TextMessage
        onSendMessage={(message) => console.log(message)}
        placeholder="Type a message..."
        disableCorrections
      />
    </>
  );
};
