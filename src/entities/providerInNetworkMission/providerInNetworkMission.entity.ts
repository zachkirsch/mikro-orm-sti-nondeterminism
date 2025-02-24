import { Entity } from "@mikro-orm/postgresql";
import { Mission } from "../mission/mission.entity";

@Entity()
export class ProviderInNetworkMission extends Mission {}
