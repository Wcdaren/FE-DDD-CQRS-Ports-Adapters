/**
 * id*	integer($int32)
firstname*	string
lastname*	string
email*	string
phone	string
nullable: true
user_hash	string
nullable: true
channel	string
 */
export enum Channel {
  web = 'web',
  pos = 'pos',
}
export interface User {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phone?: string;
  user_hash?: string;
  channel: Channel;
}

