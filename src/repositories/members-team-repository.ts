export abstract class MembersTeamRepository {
  abstract create(name: string, memberFunction: string): Promise<void>;
}
