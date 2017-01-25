import {StorageService} from "../utils-module/storage";
import {Injectable} from "@angular/core";
export class Item {
  public title: string;
  public done: boolean;
  public created: Date;


  constructor(title: string, done: boolean = false) {
    this.title = title;
    this.done = done;
    this.created = new Date();
  }
}

@Injectable()
export class Todolist {

  private _items: Item[];
  private _storage: StorageService;
  private _KEY: string;

  constructor(storage: StorageService, key: string) {
    this._KEY = key;
    this._storage = storage;
    this._items = storage.get(this._KEY) || [];
  }

  get items(): Item[] {
    return this._items;
  }

  public addItem(title: string, done: boolean = false): void {
    const item = new Item(title, done);
    // this._items = [...this._items, item];
    this._items.push(item);
    this._storage.save(this._KEY, this._items);
  }

  public removeItem(item: Item): boolean {
    const index = this._items.indexOf(item);
    if (index < 0) {
      return false
    }
    this._items.splice(index, 1);
    this._storage.save(this._KEY, this._items);
    return true;
  }

  public removeDone(item: Item) {
    this._items = this._items.filter(item => !item.done);
    this._storage.save(this._KEY, this._items);
  }
}
