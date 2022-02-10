export class Contact {
  numberList: any;

  constructor(
        public id: string,
        public titulo: string,
        public descripcion: string,
        public correo: string,
        public lugar: string,
        public horario: string,
        public web: string,
        public numero: string,
        public publishedAt: string,
        public createdAt: string,
        public updatedAt: string,
        public gps: string,
  ) {}
}
