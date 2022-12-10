import { Body, Controller, Get } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { randomUUID } from 'node:crypto';
import { CreateMemberTeam } from './dtos/create-member-team';

@Controller('app')
export class AppController {
  constructor(private prisma: PrismaService) {}

  @Get('member')
  async getHello(@Body() body: CreateMemberTeam) {
    const { name, function: MemberFunction } = body;

    const member = await this.prisma.memberToTeam.create({
      data: {
        id: randomUUID(),
        name,
        function: MemberFunction,
      },
    });

    return {
      member,
    };
  }
}
