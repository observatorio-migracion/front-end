export class Contact {
    numberList: any;
    constructor(
        public id:           number,
        public titulo:       string,
        public descripcion:  string,
        public correo:       string,
        public lugar:        string,
        public horario:      string,
        public web:          string,
        public numero:       string,
        public published_at: string,
        public created_at:   string,
        public updated_at:   string,
    ){}
}
