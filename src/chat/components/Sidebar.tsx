import { useAuth } from "@/hooks/useAuth";
import { Separator } from "@/components/ui/separator";
import { useChat } from "@/hooks/useChat";
import { SidebarChatItem } from "./SidebarChatItem";

export const Sidebar = () => {
  const { logout } = useAuth();
  const { chatState } = useChat();

  return (
    <aside className="flex flex-col shadow w-72">
      <div className="py-4 px-3 border-b border-gray-200">
        <h2 className="text-xl font-semibold">
          Chat de <span className="text-primary">Socket.io</span>
        </h2>
      </div>
      {/* chats */}
      <div className="flex-auto">
        {chatState.users.map((user) => (
          <SidebarChatItem key={user.id} user={user} />
        ))}
      </div>

      <Separator />
      <button
        onClick={logout}
        className="text-red-500 cursor-pointer w-full text-left py-1 px-3 transition-colors hover:bg-red-500 hover:text-white"
      >
        Salir
      </button>
    </aside>
  );
};
