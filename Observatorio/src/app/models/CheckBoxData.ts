// hepls to manipulate forms with checkbox
export class CheckBoxData {
  name: string;

  value: boolean;

  constructor(name = '', value = false) {
    this.name = name;
    this.value = value;
  }
}
