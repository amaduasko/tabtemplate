import { Component, OnInit } from "@angular/core";
import { TabService } from "./services/tab.service";

@Component({
  selector: "app-root ",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(public tabService: TabService) {}
  public tabs = [1, 2];

  public dec() {
    this.tabs = this.tabs.slice(0, -1);
  }

  public inc() {
    this.tabs = [...this.tabs, this.tabs.length + 1];
    this.tabService.objetizeTab(this.tabs[this.tabs.length - 1]);
  }
  changeView(tab): void {
    this.tabService.updateView(tab);
  }
  ngOnInit() {
    this.tabs.forEach(item => this.tabService.objetizeTab(item));
  }
}
