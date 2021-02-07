// export class PostInfo{
//     constructor(public id:string, public title:string, public author:string, public date:Date, public categories:string[]){}
// }
export class PostInfo {
    constructor(public fields:Fields,
                public id:string,
                public created:number, 
                public last_edited:number){}
}

export class Fields {
    constructor(public Categorias:string[], 
                public Publicado:boolean, 
                public Descripcion: string, 
                public Miniatura:string[], 
                public Titulo:string){}
}


export interface IPostInfo {
    fields:      Fields;
    id:          string;
    created:     number;
    last_edited: number;
}

export interface IFields {
    Categorias:  string[];
    Publicado:   boolean;
    Descripcion: string;
    Miniatura:   string[];
    Titulo:      string;
}