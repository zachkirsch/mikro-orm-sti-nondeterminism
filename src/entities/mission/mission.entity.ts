import { Entity, Enum, Opt, PrimaryKey } from "@mikro-orm/postgresql";

@Entity({ discriminatorColumn: "mission_type", abstract: true })
export abstract class Mission {
  @Enum()
  mission_type!: Opt<
    | "provider_availability_mission"
    | "provider_in_network_mission"
    | "provider_booking_mission"
  >;

  @PrimaryKey()
  id!: string;
}
