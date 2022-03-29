/* eslint max-classes-per-file: ["error", 4] */
export class Large {
  constructor(
        public name: string,
        public hash: string,
        public ext: string,
        public mime: string,
        public width: number,
        public height: number,
        public size: number,
        public path: null,
        public url: string,
  ) { }
}

export class Formats {
  constructor(
        public thumbnail: Large,
        public large: Large,
        public medium: Large,
        public small: Large,
  ) { }
}

export class Imagenes {
  constructor(
        public id: string,
        public name: string,
        public alternativeText: string,
        public caption: string,
        public width: number,
        public height: number,
        public formats: Formats,
        public hash: string,
        public ext: string,
        public mime: string,
        public size: number,
        public url: string,
        public previewUrl: null,
        public provider: string,
        public providerMetadata: null,
        public createdAt: string,
        public updatedAt: string,
  ) { }
}

export class Activity {
  constructor(
        public id: string,
        public nombre: string,
        public fecha: Date,
        public descripcion: string,
        public published_at: string,
        public createdAt: string,
        public updatedAt: string,
        public imagenes: Imagenes[],
        public reunion: string,
  ) { }
}
