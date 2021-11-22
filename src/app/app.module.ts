import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpServicesComponent } from './http-services/http-services.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserServiceService } from './services/user-service.service';
@NgModule({
  declarations: [AppComponent, HttpServicesComponent],
  imports: [BrowserModule, HttpClientModule, NgbModule],
  providers: [UserServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
