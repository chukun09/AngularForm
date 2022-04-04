import { NgModule } from '@angular/core';
import { TableComponent } from '../app/table/table.component';
import { FormComponent } from '../app/form/form.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../app/pagenotfound/pagenotfound.component'
import { SignalRComponent } from './signal-r/signal-r.component';
import { MessageComponent } from './message/message.component';
import { VoterComponent } from './voter/voter.component';

const routes: Routes = [{
  path: 'first-component', component: TableComponent,
},
{ path: 'edit/:id', component: FormComponent },
{ path: 'second-component', component: FormComponent },
{ path: 'sendmessage', component: SignalRComponent },
{ path: 'message', component: MessageComponent },
{ path: 'login', component: VoterComponent },
{ path: '', redirectTo: '/first-component', pathMatch: 'full' },
{ path: '**', component: PageNotFoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
