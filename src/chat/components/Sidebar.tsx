import { useAuth } from "@/hooks/useAuth";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export const Sidebar = () => {
  const { user, logout } = useAuth();

  return (
    <aside className="flex flex-col shadow w-72">
      <div className="py-1 px-3">
        <h2 className="text-xl font-semibold">
          Chat de <span className="text-primary">Socket.io</span>
        </h2>
      </div>
      {/* chats */}
      <div className="flex-auto">
        <Separator />
        <div className="flex gap-2 items-center py-2 px-3">
          <Avatar className="border-2 border-red-500">
            {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
            <AvatarFallback>
              {user!
                .name!.split(" ")
                .map((name) => name[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <h3>{user?.name}</h3>
        </div>
        <Separator />
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
