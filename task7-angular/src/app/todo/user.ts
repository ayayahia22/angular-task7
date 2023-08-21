export interface User {
  password: any;
  id: number;
  name: string;
  avatar: string;
  username: string;
}
export interface post{
  userId:number;

  id:number;
  title:string;
  completed:string;
}
export interface todo {
  isEditing: boolean;
  userId:number;

  id:number;
  task:string;
  completed:boolean;
}
