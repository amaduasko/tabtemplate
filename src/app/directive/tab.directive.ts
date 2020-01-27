import {
  Directive,
  ElementRef,
  Renderer2,
  OnInit,
  HostBinding
} from "@angular/core";
import { TabService } from "../services/tab.service";
@Directive({
  selector: "tab-title"
})
export class TabTittleDirective {
  constructor(private element: ElementRef, private tabService: TabService) {
    element.nativeElement.id = tabService.tabArray[tabService.tab - 1];
  }
  ngOnInit() {
    this.element.nativeElement.id = this.tabService.tabArray[
      this.tabService.tab - 1
    ];
  }
}

@Directive({
  selector: "tab-content"
})
export class TabContentDirective {
  show: boolean;
  prev = (a: boolean) => !a;
  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private service: TabService
  ) {
    element.nativeElement.id = service.tabArray[service.tab - 1];
  }
  @HostBinding("style.display") display: string;
  updateDisplay() {
    this.show = this.service.tabArray[this.service.tab - 1] == 1 ? true : false;
    this.display = this.show ? "block" : "none";
  }
  handleClick() {
    this.renderer.listen(
      this.element.nativeElement.previousSibling,
      "click",
      () => {
        this.show = this.prev(this.show);
        this.display = this.show ? "block" : "none";
      }
    );
  }
  ngOnInit() {
    this.updateDisplay();
    this.handleClick();
  }
}
