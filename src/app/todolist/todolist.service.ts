export class Item {
  public title: string;
  public done: boolean;
  public created: Date;


  constructor(title: string) {
    this.title = title;
    this.done = false;
    this.created = new Date();
  }
}

export class Todolist {

  private _items: Item[];

  constructor() {
    this._items = [];
  }

  get items(): Item[] {
    return this._items;
  }

  public addItem(title: string): void {
    this._items.push(new Item(title));
  }

  public removeItem(item: Item): boolean {
    const index = this._items.indexOf(item);
    if (index < 0) {
      return false
    }
    this._items.splice(index, 1);
    return true;
  }
}
