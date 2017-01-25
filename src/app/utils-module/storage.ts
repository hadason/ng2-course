import {Injectable} from "@angular/core";

@Injectable()
export class StorageService {
  public save(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data))
  };

  public get(key): any {
    return JSON.parse(localStorage.getItem(key));
  }
}
