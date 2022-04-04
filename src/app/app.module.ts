import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VoterComponent } from './voter/voter.component';
import { TesthostComponent } from './testhost/testhost.component';
import { FormsModule } from '@angular/forms';
import { TestngcontentComponent } from './testngcontent/testngcontent.component';
import { TableComponent } from './table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './form/form.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignalRComponent } from './signal-r/signal-r.component';
import { MessageComponent } from './message/message.component';
@NgModule({
  declarations: [
    AppComponent,
    VoterComponent,
    TesthostComponent,
    TestngcontentComponent,
    TableComponent,
    FormComponent,
    PageNotFoundComponent,
    SignalRComponent,
    MessageComponent,
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
