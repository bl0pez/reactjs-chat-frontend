import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export const Sidebar = () => {
  return (
    <aside className="flex flex-col shadow">
      <div className="py-1 px-3">
        <h2 className="">Chat</h2>
      </div>
      {/* chats */}
      <div className="flex-auto">
        <Separator />
        <div className="flex gap-2 items-center py-2 px-3">
          <Avatar className="border-2 border-red-500">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h3>Some random name</h3>
        </div>
        <Separator />
      </div>

      <div className="py-1 px-3">
        <Button className="text-red-500 bg-transparent w-full hover:bg-red-500 hover:text-white">
          Salir
        </Button>
      </div>
    </aside>
  );
};
