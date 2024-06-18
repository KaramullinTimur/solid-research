export class List implements ISortPage {
  list: number[];
  private sortService: ISortService;
  private tableService: ITableService;
  constructor(list: number[], ss: ISortService, ts: ITableService) {
    this.list = list;
    this.sortService = ss
    this.tableService = ts
  }

  sort() {
    this.sortService.sort(this.list);
  }
  edit() {
    this.list = this.tableService.edit(this.list);
  }
}

export class StampSortService implements ISortService {
  sort(list: number[]) {
    list.sort((a, b) => b - a);
  }
}
export class FlexSortService implements ISortService {
  sort(list: number[]) {
    list.sort((a, b) => a - b);
  }
}

export class FlexTableService implements ITableService {
  edit(): number[] {
    return [11, 12, 13];
  }
}
export class StampTableService implements ITableService {
  edit(): number[] {
    return [21, 22, 23];
  }
}

// 

export interface ISortService {
  sort(list: number[]): void;
}

export interface ITableService {
  edit(list: number[]): number[];
}

// 

export interface ISortPage {
  list: number[];
  sort(): void;
}

export interface ITablePage {
  list: number[];
  edit(): void;
}