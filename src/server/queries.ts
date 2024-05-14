import "server-only";
import { db } from "./db";
import { raffles } from "./db/schema";
import { isNull, isNotNull, is, desc, asc } from "drizzle-orm";

export async function getActiveRaffles() {
  return db.query.raffles.findMany({
    where: isNull(raffles.winnerId),
  });
}

export async function getFinishedRaffles() {
  return db.query.raffles.findMany({
    where: isNotNull(raffles.winnerId),
    orderBy: [desc(raffles.endDate)],
    limit: 3,
  });
}
