import { CommonModule, registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdsenseModule } from 'ng2-adsense';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { LoginComponent } from './components/login/login.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { PerguntasComponent } from './components/perguntas/perguntas.component';
import { UserComponent } from './components/user/user.component';
import { MaterialImportsModule } from './material-imports';
registerLocaleData(ptBr);


@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialImportsModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AdsenseModule.forRoot({
      adClient: 'ca-pub-7640562161899788',
      adSlot: 7259870550,
    }),
  ],
  declarations: [
    HeaderComponent,
    HomeComponent,
    AppComponent,
    LoginComponent,
    PerguntasComponent,
    ListComponent,
    UserComponent,
    NewUserComponent
  ],
  exports: [
  ],
  entryComponents: [
    LoginComponent
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
