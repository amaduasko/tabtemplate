import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class TabService {
  tabInfoArray: any[] = [];
  prev = (a: boolean) => !a;
  constructor() {}
  objetizeTab(item) {
    this.tabInfoArray.push({
      id: item,
      show: item == 1 ? true : false
    });
  }
  updateView(tab) {
    this.tabInfoArray.find(item => item.id === tab.id).show = this.prev(
      this.tabInfoArray.find(item => item.id === tab.id).show
    );
  }
}
