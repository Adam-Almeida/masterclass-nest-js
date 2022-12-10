import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { MembersTeamRepository } from './repositories/members-team-repository';
import { PrismaMembersTeamRepository } from './repositories/prisma/prisma-members-team-repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    PrismaService,
    {
      provide: MembersTeamRepository,
      useClass: PrismaMembersTeamRepository,
    },
  ],
})
export class AppModule {}
