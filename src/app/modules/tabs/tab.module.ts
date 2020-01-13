import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TabsComponent } from "./container/tabs.component";
import { TabComponent } from "./components/tab/tab.component";
import { TabContentComponent } from "./components/tab-content/tab-content.component";
import { TabTitleComponent } from "./components/tab-title/tab-title.component";
@NgModule({
  declarations: [
    TabsComponent,
    TabComponent,
    TabContentComponent,
    TabTitleComponent
  ],
  imports: [CommonModule],
  exports: [TabsComponent, TabTitleComponent, TabContentComponent, TabComponent]
})
export class TabsModule {}
