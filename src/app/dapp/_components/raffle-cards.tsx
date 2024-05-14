import Image from "next/image";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import { getEthPriceInDollar } from "~/lib/ethUtils";
import { getActiveRaffles } from "~/server/queries";

export async function ActiveRaffleCards() {
  const raffles = await getActiveRaffles();

  const ethPrice = await getEthPriceInDollar();
  // ^ set it up so it gets updated every 10 minutes

  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {raffles.map((item) => (
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
              <p>
                Tickets remaining: {item.participantCount}/
                {item.maxParticipants}
              </p>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col gap-1">
            <p>Ticket price: ${(item.ticketPrice * ethPrice).toFixed(2)}</p>
            <Button className="w-full">
              Enter Raffle ({item.ticketPrice}{" "}
              {item.currency === "1" ? "ETH" : "BNB"})
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
