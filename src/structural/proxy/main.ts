import { SystemUserProxy } from './system-user/system-user-proxy';

async function clientCode(): Promise<void> {
  const user = new SystemUserProxy('Augusto', 'augustopvedana');
  console.log('Isso vai levar 2 segundos');
  console.log(await user.getAdresses());

  console.log('Isso vai se repetir (CACHE)');
  for (let i = 0; i < 5; i++) {
    console.log(await user.getAdresses());
  }
}

clientCode();
