import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { TestComponent } from "./components/test/test.component";
import { TabsModule } from "./modules/tabs/tab.module";
import {
  TabTittleDirective,
  TabContentDirective
} from "./directive/tab.directive";

@NgModule({
  imports: [BrowserModule, FormsModule, TabsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    TestComponent,
    TabTittleDirective,
    TabContentDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
