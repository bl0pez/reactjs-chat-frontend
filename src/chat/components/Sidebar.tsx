import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { SidebarChatItem } from "./SidebarChatItem";
import { useAuthContext, useChatContext } from "@/hooks";
import { RiSettings2Line } from "react-icons/ri";

export const Sidebar = () => {
  const { user, logout } = useAuthContext();
  const { chatState } = useChatContext();

  return (
    <aside className="flex flex-col shadow md:w-72 fixed bg-white z-10 w-full md:sticky">
      <div className="py-4 px-3 border-b border-gray-200 flex justify-between items-center">
        <h2 className="text-xl font-semibold">
          Chat de <span className="text-primary">Socket.io</span>
        </h2>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="p-2 rounded-full transition-all hover:bg-accent hover:text-accent-foreground">
              <RiSettings2Line className="text-xl" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>
              Opciones
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer" onClick={logout}>
              Cerrar sesión
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {/* chats */}
      <div className="flex-auto flex gap-2 md:block overflow-x-auto">
        {chatState.users
          .filter((u) => u.id !== user?.id)
          .map((user) => (
            <SidebarChatItem key={user.id} user={user} />
          ))}
      </div>

      <Separator />
    </aside>
  );
};
