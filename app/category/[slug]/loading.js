import { ShoppingBasket } from "lucide-react";

export default function Loading() {
  return (
    <div className="bg-black min-h-screen">
    <div className="flex items-center justify-center h-[60vh] ">
      <ShoppingBasket className="h-12 w-12 text-amber-300 animate-pulse" />
    </div>
    </div>
  );
}
