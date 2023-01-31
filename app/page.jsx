import { Plus_Jakarta_Sans } from "@next/font/google";
import UserCardNotifications from "@/components/UserCardNotifications";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "800"],
});

export default function Home() {
  return (
    <main
      className={`${jakarta.className}  rounded-xl bg-white font-medium lg:p-4`}
    >
      <UserCardNotifications />
    </main>
  );
}
