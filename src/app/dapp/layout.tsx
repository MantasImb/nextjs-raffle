import { TopNav } from "./_components/top-nav";

export default function DappLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <TopNav />
      {children}
    </main>
  );
}
