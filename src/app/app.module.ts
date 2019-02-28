import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { DrawerPageComponent} from './drawer-page/drawer-page.component'
import { MatCardModule} from '@angular/material/card';
import { FooterComponent } from './footer/footer.component';
import { MatGridListModule} from '@angular/material/grid-list';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './footer/modal/modal.component';
import { FormsModule } from '@angular/forms';
import {
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule
} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import {MatDialogModule} from '@angular/material';
import { SubModalComponent } from './footer/modal/sub-modal/sub-modal.component';
import {MatTooltipModule} from '@angular/material/tooltip';


// const appRoutes: Routes = [
//   { 
    
//   } ,

  
//   ];


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    DrawerPageComponent,
    FooterComponent,
    ModalComponent,
    SubModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    MatSidenavModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    NgbModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatDialogModule,
    // RouterModule.forRoot(appRoutes , {onSameUrlNavigation: 'reload'}),
    MatTooltipModule




  ],
  entryComponents: [ModalComponent,SubModalComponent],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ RouterModule]
})
export class AppModule { }
