export interface Large {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path: null;
  url: string;
}

export interface Formats {
  thumbnail: Large;
  large: Large;
  medium: Large;
  small: Large;
}

export interface Imagenes {
  id: string;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  providerMetadata: null;
  createdAt: string;
  updatedAt: string;
}

export interface Activity {
  id: string;
  nombre: string;
  fecha: Date;
  descripcion: string;
  published_at: string;
  createdAt: string;
  updatedAt: string;
  imagenes: Imagenes[];
  reunion: string;
}
