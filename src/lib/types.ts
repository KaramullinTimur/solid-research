export abstract class List implements ISortPage {
  list!: number[];
  abstract department: string;

  // Services
  private sortService: ISortService;
  private tableService: IFetchService;
  private permissionsService: IPermissionsService;

  // Constructor
  constructor(ss: ISortService, ts: IFetchService, ps: IPermissionsService) {
    this.sortService = ss;
    this.tableService = ts;
    this.permissionsService = ps;
  }

  // ISortPage inplementation
  sort() {
    this.sortService.sort(this);
  }

  // ITablePage inplementation
  edit() {
    this.tableService.edit(this);
  }
  checkPermission(user: string) {
    return this.permissionsService.checkPermission(user);
  }
}

export class StampList extends List {
  department = 'stamp';
  constructor() {
    super(new StampSortService(), new StampTableService(), new StampPermissionsService())
  }
}
export class FlexList extends List {
  department = 'flex';
  constructor() {
    super(new FlexSortService(), new FlexTableService(), new FlexPermissionsService())
  }
}

export class StampSortService implements ISortService {
  sort(listClass: List) {
    listClass.list.sort((a, b) => b - a);
  }
}
export class FlexSortService implements ISortService {
  sort(listClass: List) {
    listClass.list.sort((a, b) => a - b);
  }
}
export class FlexPermissionsService implements IPermissionsService {
  permissions = ['flex'];
  checkPermission(user: string) {
    return this.permissions.includes(user);
  }
}

export class FlexTableService implements IFetchService {
  edit(listClass: List) {
    // fetch ...
    listClass.list = [23, 22, 21];
  }
}
export class StampTableService implements IFetchService {
  edit(listClass: List) {    
    // fetch ...
    listClass.list = [97, 98, 99];
  }
}
export class StampPermissionsService implements IPermissionsService {
  permissions = ['stamp'];
  checkPermission(user: string) {
    return this.permissions.includes(user);
  }
}

//

export interface ISortService {
  sort(listClass: List): void;
}
export interface IFetchService {
  edit(listClass: List): void;
}
export interface IPermissionsService {
  permissions: string[];
  checkPermission(user: string): boolean;
}

//

export interface ISortPage {
  list: number[];
  sort(): void;
  checkPermission(user: string): boolean;
}
export interface ITablePage {
  list: number[];
  edit(): void;
}
