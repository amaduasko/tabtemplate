import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root ",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor() {}
  public tabs = [1, 2];

  public dec() {
    this.tabs = this.tabs.slice(0, -1);
  }

  public inc() {
    this.tabs = [...this.tabs, this.tabs.length + 1];
  }
  ngOnInit() {}
}
