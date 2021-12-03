import { LoginComponent } from './component/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LogoutComponent } from './component/logout/logout.component';
import { PlistPostComponent } from './component/post/plist/plist.component';
import { ViewPostComponent } from './component/post/view/view.component';
import { NewPostComponent } from './component/post/new/new.component';
import { EditPostComponent } from './component/post/edit/edit.component';
import { RemovePostComponent } from './component/post/remove/remove.component';
import { ReadComponent } from './component/post/read/read.component';
import { EditCompraComponent } from './component/compra/edit/edit-compra.component';
import { NewCompraComponent } from './component/compra/new/new-compra.component';
import { PlistCompraComponent } from './component/compra/plist/plist-compra.component';
import { RemoveCompraComponent } from './component/compra/remove/remove-compra.component';
import { ViewCompraComponent } from './component/compra/view/view-compra.component';
import { EditFacturaComponent } from './component/factura/edit/edit-factura.component';
import { NewFacturaComponent } from './component/factura/new/new-factura.component';
import { PlistFacturaComponent } from './component/factura/plist/plist-factura.component';
import { RemoveFacturaComponent } from './component/factura/remove/remove-factura.component';
import { ViewFacturaComponent } from './component/factura/view/view-factura.component';
import { EditProductoComponent } from './component/producto/edit/edit-producto.component';
import { NewProductoComponent } from './component/producto/new/new-producto.component';
import { PlistProductoComponent } from './component/producto/plist/plist-producto.component';
import { RemoveProductoComponent } from './component/producto/remove/remove-producto.component';
import { ViewProductoComponent } from './component/producto/view/view-producto.component';
import { EditTipoproductoComponent } from './component/tipoproducto/edit/edit-tipoproducto.component';
import { NewTipoproductoComponent } from './component/tipoproducto/new/new-tipoproducto.component';
import { PlistTipoproductoComponent } from './component/tipoproducto/plist/plist-tipoproducto.component';
import { RemoveTipoproductoComponent } from './component/tipoproducto/remove/remove-tipoproducto.component';
import { ViewTipoproductoComponent } from './component/tipoproducto/view/view-tipoproducto.component';
import { EditTipousuarioComponent } from './component/tipousuario/edit/edit-tipousuario.component';
import { PlistTipousuarioComponent } from './component/tipousuario/plist/plist-tipousuario.component';
import { ViewTipousuarioComponent } from './component/tipousuario/view/view-tipousuario.component';
import { EditUsuarioComponent } from './component/usuario/edit/edit-usuario.component';
import { NewUsuarioComponent } from './component/usuario/new/new-usuario.component';
import { PlistUsuarioComponent } from './component/usuario/plist/plist-usuario.component';
import { RemoveUsuarioComponent } from './component/usuario/remove/remove-usuario.component';
import { ViewUsuarioComponent } from './component/usuario/view/view-usuario.component';
import { SessionResolver } from './resolve/session.resolve';
import { PlistCarritoComponent } from './component/carrito/plist/plist-carrito.component';
import { NewCarritoComponent } from './component/carrito/new/new-carrito.component';
import { ViewCarritoComponent } from './component/carrito/view/view-carrito.component';
import { EditCarritoComponent } from './component/carrito/edit/edit-carrito.component';
import { RemoveCarritoComponent } from './component/carrito/remove/remove-carrito.component';
import { GenerateComponent } from './component/generate/generate.component';

const routes: Routes = [
  { path: '', component: HomeComponent, resolve: { message: SessionResolver } },

  { path: 'home', component: HomeComponent, resolve: { message: SessionResolver } },
  { path: 'login', component: LoginComponent, resolve: { message: SessionResolver } },
  { path: 'logout', component: LogoutComponent, resolve: { message: SessionResolver } },
  { path: 'random/load', component: GenerateComponent, resolve: { message: SessionResolver } },

  { path: 'read/:id', component: ReadComponent, resolve: { message: SessionResolver } },

  { path: 'plist', component: PlistPostComponent, resolve: { message: SessionResolver } },
  { path: 'new', component: NewPostComponent, resolve: { message: SessionResolver } },
  { path: 'view/:id', component: ViewPostComponent, resolve: { message: SessionResolver } },
  { path: 'edit/:id', component: EditPostComponent, resolve: { message: SessionResolver } },
  { path: 'remove/:id', component: RemovePostComponent, resolve: { message: SessionResolver } },

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
  { path: 'usuario/plist/:id_tipousuario', component: PlistUsuarioComponent, resolve: { message: SessionResolver } },
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
  { path: 'producto/plist/tipoproducto/:id_tipoproducto', component: PlistProductoComponent, resolve: { message: SessionResolver } },
  { path: 'producto/new', component: NewProductoComponent, resolve: { message: SessionResolver } },
  { path: 'producto/view/:id', component: ViewProductoComponent, resolve: { message: SessionResolver } },
  { path: 'producto/edit/:id', component: EditProductoComponent, resolve: { message: SessionResolver } },
  { path: 'producto/remove/:id', component: RemoveProductoComponent, resolve: { message: SessionResolver } },
  { path: 'compra/plist', component: PlistCompraComponent, resolve: { message: SessionResolver } },
  { path: 'compra/new', component: NewCompraComponent, resolve: { message: SessionResolver } },
  { path: 'compra/view/:id', component: ViewCompraComponent, resolve: { message: SessionResolver } },
  { path: 'compra/edit/:id', component: EditCompraComponent, resolve: { message: SessionResolver } },
  { path: 'compra/remove/:id', component: RemoveCompraComponent, resolve: { message: SessionResolver } },
  { path: 'compra/plist/factura/:id_factura', component: PlistCompraComponent, resolve: { message: SessionResolver } },
  { path: 'compra/plist/producto/:id_producto', component: PlistCompraComponent, resolve: { message: SessionResolver } },
  { path: 'factura/plist', component: PlistFacturaComponent, resolve: { message: SessionResolver } },
  { path: 'factura/new', component: NewFacturaComponent, resolve: { message: SessionResolver } },
  { path: 'factura/view/:id', component: ViewFacturaComponent, resolve: { message: SessionResolver } },
  { path: 'factura/edit/:id', component: EditFacturaComponent, resolve: { message: SessionResolver } },
  { path: 'factura/remove/:id', component: RemoveFacturaComponent, resolve: { message: SessionResolver } },
  { path: 'factura/plist/:id', component: PlistFacturaComponent, resolve: { message: SessionResolver } },
  { path: 'carrito/plist', component: PlistCarritoComponent, resolve: { message: SessionResolver } },
  { path: 'carrito/plist/producto/:idproducto', component: PlistCarritoComponent, resolve: { message: SessionResolver } },
  { path: 'carrito/plist/usuario/:idusuario', component: PlistCarritoComponent, resolve: { message: SessionResolver } },
  { path: 'carrito/new', component: NewCarritoComponent, resolve: { message: SessionResolver } },
  { path: 'carrito/view/:id', component: ViewCarritoComponent, resolve: { message: SessionResolver } },
  { path: 'carrito/edit/:id', component: EditCarritoComponent, resolve: { message: SessionResolver } },
  { path: 'carrito/remove/:id', component: RemoveCarritoComponent, resolve: { message: SessionResolver } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
