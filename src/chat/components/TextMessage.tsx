import { useContext, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SocketContext } from "@/context/SocketContext";
import { useAuthContext, useChatContext } from "@/hooks";

interface Props {
  placeholder: string;
  disableCorrections?: boolean;
}

export const TextMessage = ({
  placeholder,
  disableCorrections,
}: Props) => {
  const [message, setMessage] = useState("");
  const { socket } = useContext(SocketContext);
  const { user } = useAuthContext();
  const { chatState } = useChatContext();

  const handleSendMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (message.trim().length === 0) return;

    socket?.emit("private-message", {
      from: user?.id,
      to: chatState?.chatActive,
      message,
    })

    setMessage("");
  };

  return (
    <form
      className="flex flex-row items-center h-16 bg-white w-full px-4"
      onSubmit={handleSendMessage}
    >
      <div className="flex-grow">
        <div className="relative w-full">
          <Input
            placeholder={placeholder}
            type="text"
            autoFocus
            name="message"
            className="flex w-full border rounded-xl text-gray-800 focus:outline-none focus:border-indigo-300 pl-4 h-10"
            autoComplete={disableCorrections ? "off" : "on"}
            autoCorrect={disableCorrections ? "off" : "on"}
            spellCheck={disableCorrections ? "false" : "true"}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
      </div>

      <div className="ml-4">
        <Button>
          <span>Enviar</span>
          <i className="fa-regular fa-paper-plane"></i>
        </Button>
      </div>
    </form>
  );
};
