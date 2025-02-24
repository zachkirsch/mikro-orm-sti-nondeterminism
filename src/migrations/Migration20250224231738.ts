import { Migration } from '@mikro-orm/migrations';

export class Migration20250224231738 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table "mission" ("id" varchar(255) not null, "mission_type" text check ("mission_type" in ('provider_availability_mission', 'provider_booking_mission', 'provider_in_network_mission')) not null, constraint "mission_pkey" primary key ("id"));`);
    this.addSql(`create index "mission_mission_type_index" on "mission" ("mission_type");`);
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists "mission" cascade;`);
  }

}
