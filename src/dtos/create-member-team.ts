import { IsNotEmpty, Length } from 'class-validator';

export class CreateMemberTeam {
  @IsNotEmpty({
    message: 'O nome não pode estar em branco',
  })
  @Length(3, 100, {
    message: 'O nome precisa ter entre 3 e 100 caracteres',
  })
  name: string;

  @IsNotEmpty({
    message: 'A função não pode estar em branco',
  })
  function: string;
}
