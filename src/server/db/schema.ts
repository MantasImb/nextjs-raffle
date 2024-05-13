// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  index,
  integer,
  pgEnum,
  pgTableCreator,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `nextjs-raffle_${name}`);

const roleEnum = pgEnum("role", ["user", "admin", "influencer"]);

export const users = createTable("user", {
  id: serial("id").primaryKey(),
  nickname: varchar("nickname").notNull(),
  email: varchar("email").notNull().unique(),
  image: varchar("image").notNull(),
  role: roleEnum("role").notNull().default("user"),
  createdAt: timestamp("created_at").default(sql`now()`),
  ethereumAddress: varchar("ethereum_address").notNull().unique(),
  // ^ could do a check to see if the address is valid, but drizzleORM doesn't support that yet
});

export const raffles = createTable("raffle", {
  id: serial("id").primaryKey(),
  name: varchar("name").notNull(),
  chain: varchar("chain").notNull(),
  currency: varchar("currency").notNull(),
  ticketPrice: varchar("ticket_price").notNull(),
  prize: varchar("prize").notNull(),
  image: varchar("image").notNull(),
  startDate: timestamp("start_date").notNull(),
  participantCount: integer("participant_count").notNull().default(0),
  maxParticipants: integer("max_participants").notNull(),
  // below are filled after the raffle ends
  winnerId: integer("winner_id").references(() => users.id),
  endDate: timestamp("end_date"),
  txHash: varchar("tx_hash"),
  videoOfDraw: varchar("video"),
});

export const tickets = createTable("ticket", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  userWalletAddress: varchar("user_wallet_address").notNull(),
  raffleId: integer("raffle_id")
    .references(() => raffles.id)
    .notNull(),
  txHash: varchar("tx_hash").notNull(),
  createdAt: timestamp("created_at").default(sql`now()`),
});
