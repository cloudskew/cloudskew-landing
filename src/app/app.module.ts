import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';


const appRoutes: Routes = [
  // routes should be ordered from most specific to least specific.
  // { path: 'authcallback', component: AuthenticationCallbackComponent },
  // { path: 'checkoutsessioncallback/:id', component: CheckoutSessionCallbackComponent },
  // { path: 'editor/:id', component: DiagramEditorComponent, canActivate: [AuthGuard], canDeactivate: [DiagramEditorDeactivateGuard], },
  // { path: 'logout', component: LogoutComponent, },
  // { path: 'viewer/:id', component: DiagramViewerComponent, },
  // { path: '', component: DiagramEditorComponent, canActivate: [AuthGuard], /*resolve: {userProfileData: UserProfileResolverService}*/ }, // default route
  { path: '**', redirectTo: '/', }, // wildcard route
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
