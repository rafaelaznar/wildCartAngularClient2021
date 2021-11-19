import { LoginComponent } from './component/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LogoutComponent } from './component/logout/logout.component';
import { SessionResolver } from './resolve/session.resolve';
import { PlistPostComponent } from './component/post/plist/plist.component';
import { ViewPostComponent } from './component/post/view/view.component';
import { NewPostComponent } from './component/post/new/new.component';
import { EditPostComponent } from './component/post/edit/edit.component';
import { RemovePostComponent } from './component/post/remove/remove.component';
import { ReadComponent } from './component/post/read/read.component';


const routes: Routes = [
  { path: '', component: HomeComponent, resolve: { message: SessionResolver } },
  { path: 'home', component: HomeComponent, resolve: { message: SessionResolver } },
  { path: 'login', component: LoginComponent, resolve: { message: SessionResolver } },
  { path: 'logout', component: LogoutComponent, resolve: { message: SessionResolver } },

  { path: 'read/:id', component: ReadComponent, resolve: { message: SessionResolver } },

  { path: 'plist', component: PlistPostComponent, resolve: { message: SessionResolver } },
  { path: 'new', component: NewPostComponent, resolve: { message: SessionResolver } },
  { path: 'view/:id', component: ViewPostComponent, resolve: { message: SessionResolver } },
  { path: 'edit/:id', component: EditPostComponent, resolve: { message: SessionResolver } },
  { path: 'remove/:id', component: RemovePostComponent, resolve: { message: SessionResolver } },

  { path: 'tipousuario/plist', component: PlistTipousuarioComponent, resolve: { message: SessionResolver } },
  { path: 'tipousuario/view/:id', component: ViewTipousuarioComponent, resolve: { message: SessionResolver } },
  { path: 'tipousuario/edit/:id', component: EditTipousuarioComponent, resolve: { message: SessionResolver } },  

  { path: 'usuario/plist', component: PlistUsuarioComponent, resolve: { message: SessionResolver } },
  { path: 'usuario/new', component: NewUsuarioComponent, resolve: { message: SessionResolver } },
  { path: 'usuario/view/:id', component: ViewUsuarioComponent, resolve: { message: SessionResolver } },
  { path: 'usuario/edit/:id', component: EditUsuarioComponent, resolve: { message: SessionResolver } },
  { path: 'usuario/remove/:id', component: RemoveUsuarioComponent, resolve: { message: SessionResolver } },

  { path: 'tipoproducto/plist', component: PlistTipoproductoComponent, resolve: { message: SessionResolver } },
  { path: 'tipoproducto/new', component: NewTipoproductoComponent, resolve: { message: SessionResolver } },
  { path: 'tipoproducto/view/:id', component: ViewTipoproductoComponent, resolve: { message: SessionResolver } },
  { path: 'tipoproducto/edit/:id', component: EditTipoproductoComponent, resolve: { message: SessionResolver } },
  { path: 'tipoproducto/remove/:id', component: RemoveTipoproductoComponent, resolve: { message: SessionResolver } },

  { path: 'producto/plist', component: PlistProductoComponent, resolve: { message: SessionResolver } },
  { path: 'producto/new', component: NewProductoComponent, resolve: { message: SessionResolver } },
  { path: 'producto/view/:id', component: ViewProductoComponent, resolve: { message: SessionResolver } },
  { path: 'producto/edit/:id', component: EditProductoComponent, resolve: { message: SessionResolver } },
  { path: 'producto/remove/:id', component: RemoveProductoComponent, resolve: { message: SessionResolver } },

  { path: 'compra/plist', component: PlistCompraComponent, resolve: { message: SessionResolver } },
  { path: 'compra/new', component: NewCompraComponent, resolve: { message: SessionResolver } },
  { path: 'compra/view/:id', component: ViewCompraComponent, resolve: { message: SessionResolver } },
  { path: 'compra/edit/:id', component: EditCompraComponent, resolve: { message: SessionResolver } },
  { path: 'compra/remove/:id', component: RemoveCompraComponent, resolve: { message: SessionResolver } },

  { path: 'factura/plist', component: PlistFacturaComponent, resolve: { message: SessionResolver } },
  { path: 'factura/new', component: NewFacturaComponent, resolve: { message: SessionResolver } },
  { path: 'factura/view/:id', component: ViewFacturaComponent, resolve: { message: SessionResolver } },
  { path: 'factura/edit/:id', component: EditFacturaComponent, resolve: { message: SessionResolver } },
  { path: 'factura/remove/:id', component: RemoveFacturaComponent, resolve: { message: SessionResolver } }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
