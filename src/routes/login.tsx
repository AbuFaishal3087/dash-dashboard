import { LoginPage } from "@/pages/LoginPage";
import { createFileRoute, redirect } from "@tanstack/react-router";

const fallback = '/dashboard' as const

export const Route = createFileRoute("/login")({
  beforeLoad: ({ context, search }) => {
    if (context.auth.isLoggedIn) {
      throw redirect({ to: search.redirect || fallback });
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  return <LoginPage />;
}
