import { Card, CardHeader } from "~/components/ui/card";
import { ActiveRaffleCards } from "./_components/raffle-cards";
import Image from "next/image";
import { getEthPriceInDollar, shortenAddress } from "~/lib/ethUtils";
import { getFinishedRaffles } from "~/server/queries";

export default function DApp() {
  return (
    <>
      <section className="mt-8 flex flex-col items-center justify-center gap-8 border-b-2 p-20">
        <div className="flex flex-col items-center justify-center gap-1">
          <h2 className="text-4xl">Current Raffles</h2>
          <p>Enter to win exciting prizes in our current raffles.</p>
        </div>
        <ActiveRaffleCards />
      </section>
      <FinishedRafflesSection />
    </>
  );
}

async function FinishedRafflesSection() {
  const finishedRaffles = await getFinishedRaffles();
  const ethPrice = await getEthPriceInDollar();

  if (!!!finishedRaffles.length) return null;
  return (
    <section className="flex flex-col items-center justify-center gap-8 border-b-2 p-20">
      <div className="flex flex-col items-center justify-center gap-1">
        <h2 className="text-4xl">Finished Raffles</h2>
        <p>View the winners and proof of payment of our past raffles.</p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {finishedRaffles.map((item) => (
          <Card key={item.name}>
            <CardHeader className="flex flex-row items-center justify-around gap-4">
              <Image
                src={item.image}
                alt={`${item.name} image`}
                height={100}
                width={100}
                className="rounded-full"
              />
              <div className="flex flex-col gap-1">
                <h2 className="text-2xl text-amber-300">{item.name}</h2>
                <p>
                  Prize: ${item.prize * ethPrice} of{" "}
                  {item.currency === "1" ? "ETH" : "BNB"}
                </p>
                <p>Winner: {shortenAddress(item.winnerWalletAddress!)}</p>
                <p className="text-blue-500 underline">View Proof Of Payment</p>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}

// const finishedRaffles = [
//   {
//     name: "1 Ethereum raffle",
//     chain: 1,
//     currency: 1,
//     ticketPrice: 0.025,
//     prize: 1,
//     image:
//       "https://seeklogo.com/images/E/ethereum-logo-EC6CDBA45B-seeklogo.com.png",
//     winnerWalletAddress: "0xFF05c2Bc8461622359F33dbea618bb028D943eCE",
//     transactionHash:
//       "0x8122faae0e59e86a6ace125383778c0397cac5b4abc9d845bef0af1f4e157fd6",
//     video: "https://www.youtube.com/watch?v=JGwWNGJdvx8",
//   },
//   {
//     name: "0.5 Ethereum raffle",
//     chain: 1,
//     currency: 1,
//     ticketPrice: 0.025,
//     prize: 0.5,
//     image:
//       "https://seeklogo.com/images/E/ethereum-logo-EC6CDBA45B-seeklogo.com.png",
//     winnerWalletAddress: "0xFF05c2Bc8461622359F33dbea618bb028D943eCE",
//     transactionHash:
//       "0x8122faae0e59e86a6ace125383778c0397cac5b4abc9d845bef0af1f4e157fd6",
//     video: "https://www.youtube.com/watch?v=JGwWNGJdvx8",
//   },
// ];
