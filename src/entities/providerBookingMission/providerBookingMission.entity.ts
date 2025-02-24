import { Entity } from "@mikro-orm/postgresql";
import { Mission } from "../mission/mission.entity";

@Entity()
export class ProviderBookingMission extends Mission {}
