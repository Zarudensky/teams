export interface PlayersResponse  {
  players: Array<PlayerInfo>;
}

export interface PlayerInfo {
  id: string;
  name: string;
  surname: string;
  isSelected: boolean;
}

export interface Player {
  id: string;
  name: string;
  surname: string;
  isSelected: boolean;
}

export const PLAYERS: Player[] = [
  {id: 'p1', name: 'Stas', surname: 'Zarudensky', isSelected: false},
  {id: 'p2', name: 'Dima', surname: 'Zarudensky', isSelected: false},
  {id: 'p3', name: 'Alex', surname: 'Chernokun', isSelected: false},
  {id: 'p4', name: 'Player_D', surname: 'Player_D', isSelected: false},
  {id: 'p5', name: 'Player_E', surname: 'Player_E', isSelected: false},
  {id: 'p6', name: 'Player_F', surname: 'Player_F', isSelected: false},
  {id: 'p7', name: 'Player_G', surname: 'Player_G', isSelected: false},
  {id: 'p8', name: 'Player_H', surname: 'Player_H', isSelected: false},
  {id: 'p9', name: 'Player_I', surname: 'Player_I', isSelected: false},
  {id: 'p10', name: 'Player_J', surname: 'Player_J', isSelected: false},
  {id: 'p11', name: 'Player_K', surname: 'Player_K', isSelected: false},
  {id: 'p12', name: 'Player_L', surname: 'Player_L', isSelected: false},
  {id: 'p13', name: 'Player_M', surname: 'Player_M', isSelected: false},
  {id: 'p14', name: 'Player_N', surname: 'Player_N', isSelected: false},
  {id: 'p15', name: 'Player_O', surname: 'Player_O', isSelected: false},
  {id: 'p16', name: 'Player_P', surname: 'Player_P', isSelected: false},
  {id: 'p17', name: 'Player_R', surname: 'Player_R', isSelected: false},
  {id: 'p18', name: 'Player_S', surname: 'Player_S', isSelected: false},
  {id: 'p19', name: 'Player_T', surname: 'Player_T', isSelected: false},
  {id: 'p20', name: 'Player_U', surname: 'Player_U', isSelected: false}
];
