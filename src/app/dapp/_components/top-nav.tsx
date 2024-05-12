import { Button } from "~/components/ui/button";

export function TopNav() {
  return (
    <nav className="flex items-center justify-between border-b-2 p-2">
      <div className="text-4xl">LOGO</div>
      <div className="flex items-center gap-4">
        <div>
          <p>Wallet connected: 0x456...abc</p>
          <p>Chain: Ethereum Mainnet</p>
        </div>
        <Button>Connect Wallet</Button>
      </div>
    </nav>
  );
}
