export class Contact {
  numberList: NumberInfo[] | undefined;

  constructor(
    public id: string,
    public titulo: string,
    public descripcion: string,
    public correo: string,
    public lugar: string,
    public horario: string,
    public web: string,
    public numero: string,
    public published_at: string,
    public createdAt: string,
    public updatedAt: string,
    public gps: string
  ) {}
}

export interface NumberInfo{
  text : string;
  number : string;
}
