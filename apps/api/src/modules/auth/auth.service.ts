import { Injectable } from "@nestjs/common";

import { UsersService } from "../users/users.service";

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  findAdminByEmail(email: string) {
    return this.usersService.findByEmail(email);
  }
}
