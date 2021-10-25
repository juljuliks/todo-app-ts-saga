export interface ITodo {
  id?: number;
  userId?: number;
  body: string;
  completed?: boolean;
}

export interface IProfile {
  id: number;
  name: string;
}
