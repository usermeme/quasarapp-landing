import { redirect, ROUTES } from "@/features/navigation";

export default function IndexPage() {
  redirect(ROUTES.ABOUT);
}
