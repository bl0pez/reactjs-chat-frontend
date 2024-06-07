import { Separator } from "@/components/ui/separator";
import { SidebarChatItem } from "./SidebarChatItem";
import { useAuthContext, useChatContext } from "@/hooks";

export const Sidebar = () => {
  const { logout, user } = useAuthContext();
  const { chatState } = useChatContext();

  return (
    <aside className="flex flex-col shadow w-72">
      <div className="py-4 px-3 border-b border-gray-200">
        <h2 className="text-xl font-semibold">
          Chat de <span className="text-primary">Socket.io</span>
        </h2>
      </div>
      {/* chats */}
      <div className="flex-auto">
        {chatState.users.filter(u => u.id !== user?.id).map((user) => (
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
