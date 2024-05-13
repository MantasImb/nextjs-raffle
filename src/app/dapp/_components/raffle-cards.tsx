import Image from "next/image";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import { getEthPriceInDollar } from "~/lib/ethUtils";

const mockData = [
  {
    name: "2 Ethereum raffle",
    chain: 1,
    currency: 1,
    ticketPrice: 0.025,
    prize: 2,
    image:
      "https://seeklogo.com/images/E/ethereum-logo-EC6CDBA45B-seeklogo.com.png",
    startDate: "2024-05-01T00:00:00Z",
    participantCount: 25,
    maxParticipants: 100,
  },
  {
    name: "1 Ethereum raffle",
    chain: 1,
    currency: 1,
    ticketPrice: 0.025,
    prize: 1,
    image:
      "https://seeklogo.com/images/E/ethereum-logo-EC6CDBA45B-seeklogo.com.png",
    startDate: "2024-05-01T00:00:00Z",
    participantCount: 25,
    maxParticipants: 100,
  },
  {
    name: "0.5 Ethereum raffle",
    chain: 1,
    currency: 1,
    ticketPrice: 0.025,
    prize: 0.5,
    image:
      "https://seeklogo.com/images/E/ethereum-logo-EC6CDBA45B-seeklogo.com.png",
    startDate: "2024-05-01T00:00:00Z",
    participantCount: 25,
    maxParticipants: 100,
  },
];

export async function ActiveRaffleCards() {
  const ethPrice = await getEthPriceInDollar();
  // ^ set it up so it gets updated every 10 minutes

  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {mockData.map((item) => (
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
                {item.currency === 1 ? "ETH" : "BNB"}
              </p>
              <p>
                Tickets remaining: {item.participantCount}/
                {item.maxParticipants}
              </p>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col gap-1">
            <p>Ticket price: ${item.ticketPrice * ethPrice}</p>
            <Button className="w-full">
              Enter Raffle ({item.ticketPrice}{" "}
              {item.currency === 1 ? "ETH" : "BNB"})
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
