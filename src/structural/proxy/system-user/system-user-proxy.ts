import { AdminUser } from './admin-user';
import {
  SystemUserProtocol,
  SystemUserAddressProtocol,
} from './system-user-protocol';

export class SystemUserProxy implements SystemUserProtocol {
  private realUser: SystemUserProtocol | null = null;
  private realUserAdresses: SystemUserAddressProtocol[] | null = null;

  constructor(public firstName: string, public userName: string) {}

  private createUser(): SystemUserProtocol {
    if (this.realUser === null) {
      this.realUser = new AdminUser(this.firstName, this.userName);
    }
    return this.realUser;
  }

  async getAdresses(): Promise<SystemUserAddressProtocol[]> {
    this.realUser = this.createUser();

    if (this.realUserAdresses === null) {
      this.realUserAdresses = await this.realUser.getAdresses();
    }
    return this.realUserAdresses;
  }
}
