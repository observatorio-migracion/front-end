// interfaces needed to consume the API
export interface Thumbnail {
  name: string | undefined;

  hash: string | undefined;

  ext: string | undefined;

  mime: string | undefined;

  width: number | undefined;

  height: number | undefined;

  size: number | undefined;

  path?: string | undefined;

  url: string | undefined;
}

export interface Large {
  name: string | undefined;

  hash: string | undefined;

  ext: string | undefined;

  mime: string | undefined;

  width: number | undefined;

  height: number | undefined;

  size: number | undefined;

  path?: string | undefined;

  url: string | undefined;
}

export interface Medium {
  name: string | undefined;

  hash: string | undefined;

  ext: string | undefined;

  mime: string | undefined;

  width: number | undefined;

  height: number | undefined;

  size: number | undefined;

  path?: string | undefined;

  url: string | undefined;
}

export interface Small {
  name: string | undefined;

  hash: string | undefined;

  ext: string | undefined;

  mime: string | undefined;

  width: number | undefined;

  height: number | undefined;

  size: number | undefined;

  path?: string | undefined;

  url: string | undefined;
}

export interface Formats {
  thumbnail: Thumbnail | undefined;

  large: Large | undefined;

  medium: Medium | undefined;

  small: Small | undefined;
}

export interface Miniatura {
  id: string | undefined;

  name: string | undefined;

  alternativeText: string | undefined;

  caption: string | undefined;

  width: number | undefined;

  height: number | undefined;

  formats: Formats | undefined;

  hash: string | undefined;

  ext: string | undefined;

  mime: string | undefined;

  size: number | undefined;

  url: string | undefined;

  previewUrl?: string | undefined;

  provider: string | undefined;

  providerMetadata?: string | undefined;

  createdAt: Date | undefined;

  updatedAt: Date | undefined;
}

export interface Categoria {
  id: string | undefined;

  nombre: string | undefined;

  published_at: Date | undefined;

  createdAt: Date | undefined;

  updatedAt: Date | undefined;

  imagen: any | undefined;
}

export interface Post {
  agenda: number | undefined;

  pos: string | undefined;

  fecha: Date | undefined;

  titulo: string | undefined;

  medioCom: string | undefined;

  autor: string | undefined;

  pagina: string | undefined;

  sintesis: string | undefined;

  miniatura: Miniatura | undefined;

  categorias: Categoria[] | undefined;
}
