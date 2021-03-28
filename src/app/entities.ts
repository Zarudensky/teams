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