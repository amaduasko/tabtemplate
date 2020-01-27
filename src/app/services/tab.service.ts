import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class TabService {
  tab: number = 1;
  tabArray: number[] = [1];
  constructor() {}
  decTabValue(): void {
    this.tab -= 1;
    this.tabArray.pop();
  }
  incTabValue(): void {
    this.tab += 1;
    this.tabArray.push(this.tab);
  }
}
