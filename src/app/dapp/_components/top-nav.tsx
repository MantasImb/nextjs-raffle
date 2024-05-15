import { Button } from "~/components/ui/button";
import ConnectButton from "./wallet-connect-button";

export function TopNav() {
  return (
    <nav className="sticky top-0 flex items-center justify-between border-b-2 bg-slate-950 px-4 py-2">
      <div className="text-4xl">LOGO</div>
      <div className="flex items-center gap-4">
        <div>
          <p>Wallet connected: 0x456...abc</p>
          <p>Chain: Ethereum Mainnet</p>
        </div>
        {/* <Button>Connect Wallet</Button> */}
        <ConnectButton />
      </div>
    </nav>
  );
}
