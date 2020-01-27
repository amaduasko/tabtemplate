import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { TabService } from "src/app/services/tab.service";

@Component({
  selector: "test",
  template: `
    <div>TestComponent {{ this.tab }} content</div>
  `
})
export class TestComponent implements OnInit {
  constructor(private service: TabService) {}
  @Input() tab: number;
  public ngOnInit() {
    this.service.incTabValue();
    console.log(`>>> TestComponent ${this.tab} initialized`);
  }
  public ngOnDestroy() {
    this.service.decTabValue();
  }
}
