import { ShoppingBasket } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-[60vh] bg-black">
      <ShoppingBasket className="h-12 w-12 text-amber-300 animate-wiggle" />
    </div>
  );
}
