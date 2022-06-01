import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
//import { AuthGuard } from "./shared/guards/auth.guard";

const routes: Routes = [
  {
    path: '', redirectTo: 'admin/dashboard', pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    //canActivate: [AuthGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

