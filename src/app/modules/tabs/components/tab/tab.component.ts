import { Component, OnInit } from "@angular/core";
import { TabService } from "src/app/services/tab.service";

@Component({
  selector: "tab",
  templateUrl: "./tab.component.html",
  styleUrls: ["./tab.component.scss"]
})
export class TabComponent implements OnInit {
  constructor(public service: TabService) {}

  ngOnInit() {}
}
