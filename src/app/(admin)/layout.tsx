// This layout is a nested layout — NO html/body tags.
// The root app/layout.tsx provides those.
// This just passes children through as the route group boundary.
export default function AdminGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
