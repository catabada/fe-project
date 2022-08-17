export class Feature {
  id: number;
  image: string | undefined;
  name: string | undefined;

  constructor(id: number, image: string, name: string) {
    this.id = id;
    this.image = image;
    this.name = name;
  }
}
