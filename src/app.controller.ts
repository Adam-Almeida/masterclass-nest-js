import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateMemberTeam } from './dtos/create-member-team';
import { MembersTeamRepository } from './repositories/members-team-repository';

@Controller('app')
export class AppController {
  constructor(private membersTeamRepository: MembersTeamRepository) {}

  @Post('member')
  async getHello(@Body() body: CreateMemberTeam) {
    const { name, function: memberFunction } = body;

    await this.membersTeamRepository.create(name, memberFunction);
  }
}
