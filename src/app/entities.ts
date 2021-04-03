export interface User {
  uid: string;
  email: string;
  name: string;
  roles: Roles;
}

export interface Roles {
  admin?: boolean;
  editor?: boolean; 
}

export interface TeamInfo {
  index: PlayerInfo;
}

export interface PlayerInfo {
  id: string;
  avatar: string;
  name: string;
  surname: string;
  power: string;
  status: string;
  position: string;
  attack: number;
  defense: number;
  accuracy: number;
  cc: number;
  level: number;
}