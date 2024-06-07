import { SocketContext } from "@/context/SocketContext";
import { useContext } from "react";

export const useSocketContext = () => useContext(SocketContext);