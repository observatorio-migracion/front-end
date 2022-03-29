/* eslint max-classes-per-file: ["error", 8] */
// classes needed to consume the API
export class Thumbnail {
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

export class Large {
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

export class Medium {
  name: string | undefined;

  hash: string| undefined;

  ext: string | undefined;

  mime: string | undefined;

  width: number | undefined;

  height: number | undefined;

  size: number | undefined;

  path?: string | undefined;

  url: string | undefined;
}

export class Small {
  name: string | undefined;

  hash: string | undefined;

  ext: string | undefined;

  mime: string | undefined;

  width: number| undefined;

  height: number| undefined;

  size: number|undefined;

  path?: string | undefined;

  url: string|undefined;
}

export class Formats {
  thumbnail: Thumbnail |undefined;

  large: Large |undefined;

  medium: Medium |undefined;

  small: Small |undefined;
}

export class Miniatura {
  id: string|undefined;

  name: string|undefined;

  alternativeText: string|undefined;

  caption: string|undefined;

  width: number|undefined;

  height: number|undefined;

  formats: Formats|undefined;

  hash: string|undefined;

  ext: string|undefined;

  mime: string|undefined;

  size: number|undefined;

  url: string|undefined;

  previewUrl?: string|undefined;

  provider: string|undefined;

  providerMetadata?: string|undefined;

  createdAt: Date|undefined;

  updatedAt: Date|undefined;
}

export class Categoria {
  id: string|undefined;

  nombre: string|undefined;

  published_at: Date|undefined;

  createdAt: Date|undefined;

  updatedAt: Date|undefined;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  imagen: any | undefined;
}

export class Post {
  id: string|undefined;

  titulo: string|undefined;

  contenido: string|undefined;

  descripcion: string|undefined;

  published_at: Date|undefined;

  createdAt: Date|undefined;

  updatedAt: Date|undefined;

  miniatura: Miniatura|undefined;

  categorias: Categoria[]|undefined;
}
