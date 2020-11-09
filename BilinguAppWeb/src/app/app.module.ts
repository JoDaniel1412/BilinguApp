import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FiltersComponent } from './filters/filters.component';
import { HomeViewComponent } from './home-view/home-view.component';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';
import { UserCardComponent } from './user-card/user-card.component';
import {MatChipsModule} from '@angular/material/chips';
import { UserDetailsComponent } from './modals/user-details/user-details.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { TableComponent } from './table/table.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AdminViewComponent } from './admin-view/admin-view.component';
import {MatSortModule} from '@angular/material/sort';
import {HttpClientModule} from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';
import {MatStepperModule} from '@angular/material/stepper';
import { SignUpComponent } from './sign-up/sign-up.component';
import {MatNativeDateModule} from '@angular/material/core';
import { LanguagePanelComponent } from './language-panel/language-panel.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { ChipsPanelComponent } from './chips-panel/chips-panel.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FiltersComponent,
    HomeViewComponent,
    UserCardComponent,
    UserDetailsComponent,
    TableComponent,
    AdminViewComponent,
    AuthComponent,
    SignUpComponent,
    LanguagePanelComponent,
    ChipsPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSliderModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTooltipModule,
    MatChipsModule,
    FormsModule,
    MatDialogModule,
    MatInputModule,
    MatGridListModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    MatStepperModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
