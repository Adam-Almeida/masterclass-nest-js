import { randomUUID } from 'node:crypto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { MembersTeamRepository } from '../members-team-repository';

@Injectable()
export class PrismaMembersTeamRepository implements MembersTeamRepository {
  constructor(private prisma: PrismaService) {}
  async create(name: string, memberFunction: string): Promise<void> {
    await this.prisma.memberToTeam.create({
      data: {
        id: randomUUID(),
        name,
        function: memberFunction,
      },
    });
  }
}
