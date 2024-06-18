export abstract class AstractList {
  abstract num: number;
  list: number[];

  constructor(list: number[]) {
    this.list = list;
  }

  abstract sort(): void;
  square() {
    this.num = this.num * this.num;
  }
}

export class StampList extends AstractList {
  num = 2;
  sort() {
    this.list.sort((a, b) => b - a);
  }
}

export class FlexList extends AstractList {
  num = 3;
  sort() {
    this.list.sort((a, b) => b + a);
  }
}

