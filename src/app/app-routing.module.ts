import { LoginComponent } from './component/shared/routed/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/shared/routed/home/home.component';
import { LogoutComponent } from './component/shared/routed/logout/logout.component';
import { CompraPlistAdminRoutedComponent } from './component/application/compra/routed/admin/compra-plist-ar/compra-plist-ar.component';
import { CompraRemoveAdminRoutedComponent } from './component/application/compra/routed/admin/compra-remove-ar/compra-remove-ar.component';
import { CompraViewAdminRoutedComponent } from './component/application/compra/routed/admin/compra-view-ar/compra-view-ar.component';
import { FacturaEditAdminRoutedComponent } from './component/application/factura/routed/admin/factura-edit-ar/factura-edit-ar.component';
import { FacturaNewAdminRoutedComponent } from './component/application/factura/routed/admin/factura-new-ar/factura-new-ar.component';
import { FacturaPlistAdminRoutedComponent } from './component/application/factura/routed/admin/factura-plist-ar/factura-plist-ar.component';
import { FacturaRemoveAdminRoutedComponent } from './component/application/factura/routed/admin/factura-remove-ar/factura-remove-ar.component';
import { ProductoEdiAdminRoutedComponent } from './component/application/producto/routed/admin/producto-edit-ar/producto-edit-ar.component';
import { ProductoNewAdminRoutedComponent } from './component/application/producto/routed/admin/producto-new-ar/producto-new-ar.component';
import { ProductoPlistAdminRoutedComponent } from './component/application/producto/routed/admin/producto-plist-ar/producto-plist-ar.component';
import { ProductoRemoveAdminRoutedComponent } from './component/application/producto/routed/admin/producto-remove-ar/producto-remove-ar.component';
import { ProductoViewAdminRoutedComponent } from './component/application/producto/routed/admin/producto-view-ar/producto-view-ar.component';
import { TipoproductoEditAdminRoutedComponent } from './component/application/tipoproducto/routed/admin/tipoproducto-edit-ar/tipoproducto-edit-ar.component';
import { TipoproductoNewAdminRoutedComponent } from './component/application/tipoproducto/routed/admin/tipoproducto-new-ar/tipoproducto-new-ar.component';
import { PlistTipoproductoAdminComponent } from './component/application/tipoproducto/routed/admin/tipoproducto-plist-ar/tipoproducto-plist-ar.component';
import { TipoproductoRemoveAdminRoutedComponent } from './component/application/tipoproducto/routed/admin/tipoproducto-remove-ar/tipoproducto-remove-ar.component';
import { TipoproductoViewAdminRoutedComponent } from './component/application/tipoproducto/routed/admin/tipoproducto-view-ar/tipoproducto-view-ar.component';
import { TipousuarioEditAdminRoutedComponent } from './component/application/tipousuario/routed/admin/tipousuario-edit-ar/tipousuario-edit-ar.component';
import { TipousuarioPlistAdminRoutedComponent } from './component/application/tipousuario/routed/admin/tipousuario-plist-ar/tipousuario-plist-ar.component';
import { TipousuarioViewAdminRoutedComponent } from './component/application/tipousuario/routed/admin/tipousuario-view-ar/tipousuario-view-ar.component';
import { UsuarioEditAdminRoutedComponent } from './component/application/usuario/routed/admin/usuario-edit-ar/usuario-edit-ar.component';
import { UsuarioNewAdminRoutedComponent } from './component/application/usuario/routed/admin/usuario-new-ar/usuario-new-ar.component';
import { UsuarioPlistAdminRoutedComponent } from './component/application/usuario/routed/admin/usuario-plist-ar/usuario-plist-ar.component';
import { UsuarioRemoveAdminRoutedComponent } from './component/application/usuario/routed/admin/usuario-remove-ar/usuario-remove-ar.component';
import { UsuarioViewAdminRoutedComponent } from './component/application/usuario/routed/admin/usuario-view-ar/usuario-view-ar.component';
import { GenerateComponent } from './component/shared/routed/generate/generate.component';
import { ReportsComponent } from './component/shared/routed/reports/reports.component';
import { SessionResolver } from './resolve/session.resolve';
import { FacturaViewAdminRoutedComponent } from './component/application/factura/routed/admin/factura-view-ar/factura-view-ar.component';
import { CompraNewAdminRoutedComponent } from './component/application/compra/routed/admin/compra-new-ar/compra-new-ar.component';
import { CompraEditAdminRoutedComponent } from './component/application/compra/routed/admin/compra-edit-ar/compra-edit-ar.component';
import { CarritoViewAdminRoutedComponent } from './component/application/carrito/routed/admin/carrito-view-ar/carrito-view-ar.component';
import { CarritoRemoveAdminRoutedComponent } from './component/application/carrito/routed/admin/carrito-remove-ar/carrito-remove-ar.component';
import { CarritoPlistAdminRoutedComponent } from './component/application/carrito/routed/admin/carrito-plist-ar/carrito-plist-ar.component';
import { CarritoEditAdminRoutedComponent } from './component/application/carrito/routed/admin/carrito-edit-ar/carrito-edit-ar.component';
import { CarritoNewAdminRoutedComponent } from './component/application/carrito/routed/admin/carrito-new-ar/carrito-new-ar.component';
import { ProductoViewUserRoutedComponent } from './component/application/producto/routed/user/producto-view-ur/producto-view-ur.component';
import { CarritoPlistUserRoutedComponent } from './component/application/carrito/routed/user/carrito-plist-ur/carrito-plist-ur.component';
import { UsuarioViewUserRoutedComponent } from './component/application/usuario/routed/user/usuario-view-ur/usuario-view-ur.component';


const routes: Routes = [
  { path: '', component: HomeComponent, resolve: { message: SessionResolver } },

  { path: 'home', component: HomeComponent, resolve: { message: SessionResolver } },
  { path: 'login', component: LoginComponent, resolve: { message: SessionResolver } },
  { path: 'logout', component: LogoutComponent, resolve: { message: SessionResolver } },
  { path: 'random/load', component: GenerateComponent, resolve: { message: SessionResolver } },
  { path: 'reports', component: ReportsComponent, resolve: { message: SessionResolver } },

  { path: 'tipousuario/plist', component: TipousuarioPlistAdminRoutedComponent, resolve: { message: SessionResolver } },
  { path: 'tipousuario/view/:id', component: TipousuarioViewAdminRoutedComponent, resolve: { message: SessionResolver } },
  { path: 'tipousuario/edit/:id', component: TipousuarioEditAdminRoutedComponent, resolve: { message: SessionResolver } },

  { path: 'usuario/plist', component: UsuarioPlistAdminRoutedComponent, resolve: { message: SessionResolver } },
  { path: 'usuario/plist/tipousuario/:id_tipousuario', component: UsuarioPlistAdminRoutedComponent, resolve: { message: SessionResolver } },
  { path: 'usuario/view/:id', component: UsuarioViewAdminRoutedComponent, resolve: { message: SessionResolver } },
  { path: 'usuario/cview/:id', component: UsuarioViewUserRoutedComponent, resolve: { message: SessionResolver } },
  { path: 'usuario/new', component: UsuarioNewAdminRoutedComponent, resolve: { message: SessionResolver } },  
  { path: 'usuario/edit/:id', component: UsuarioEditAdminRoutedComponent, resolve: { message: SessionResolver } },
  { path: 'usuario/remove/:id', component: UsuarioRemoveAdminRoutedComponent, resolve: { message: SessionResolver } },

  { path: 'tipoproducto/plist', component: PlistTipoproductoAdminComponent, resolve: { message: SessionResolver } },
  { path: 'tipoproducto/view/:id', component: TipoproductoViewAdminRoutedComponent, resolve: { message: SessionResolver } },
  { path: 'tipoproducto/new', component: TipoproductoNewAdminRoutedComponent, resolve: { message: SessionResolver } },
  { path: 'tipoproducto/edit/:id', component: TipoproductoEditAdminRoutedComponent, resolve: { message: SessionResolver } },
  { path: 'tipoproducto/remove/:id', component: TipoproductoRemoveAdminRoutedComponent, resolve: { message: SessionResolver } },

  { path: 'producto/plist', component: ProductoPlistAdminRoutedComponent, resolve: { message: SessionResolver } },
  { path: 'producto/plist/tipoproducto/:id_tipoproducto', component: ProductoPlistAdminRoutedComponent, resolve: { message: SessionResolver } },
  { path: 'producto/view/:id', component: ProductoViewAdminRoutedComponent, resolve: { message: SessionResolver } },
  { path: 'producto/new', component: ProductoNewAdminRoutedComponent, resolve: { message: SessionResolver } },  
  { path: 'producto/edit/:id', component: ProductoEdiAdminRoutedComponent, resolve: { message: SessionResolver } },
  { path: 'producto/remove/:id', component: ProductoRemoveAdminRoutedComponent, resolve: { message: SessionResolver } },
  { path: 'producto/cview/:id', component: ProductoViewUserRoutedComponent, resolve: { message: SessionResolver } },

  { path: 'compra/plist', component: CompraPlistAdminRoutedComponent, resolve: { message: SessionResolver } },
  { path: 'compra/plist/factura/:id_factura', component: CompraPlistAdminRoutedComponent, resolve: { message: SessionResolver } },
  { path: 'compra/plist/producto/:id_producto', component: CompraPlistAdminRoutedComponent, resolve: { message: SessionResolver } },
  { path: 'compra/view/:id', component: CompraViewAdminRoutedComponent, resolve: { message: SessionResolver } },  
  { path: 'compra/new', component: CompraNewAdminRoutedComponent, resolve: { message: SessionResolver } },  
  { path: 'compra/edit/:id', component: CompraEditAdminRoutedComponent, resolve: { message: SessionResolver } },
  { path: 'compra/remove/:id', component: CompraRemoveAdminRoutedComponent, resolve: { message: SessionResolver } },
  
  { path: 'factura/plist', component: FacturaPlistAdminRoutedComponent, resolve: { message: SessionResolver } },
  { path: 'factura/plist/usuario/:id', component: FacturaPlistAdminRoutedComponent, resolve: { message: SessionResolver } },  
  { path: 'factura/new', component: FacturaNewAdminRoutedComponent, resolve: { message: SessionResolver } },
  { path: 'factura/view/:id', component: FacturaViewAdminRoutedComponent, resolve: { message: SessionResolver } },
  { path: 'factura/edit/:id', component: FacturaEditAdminRoutedComponent, resolve: { message: SessionResolver } },
  { path: 'factura/remove/:id', component: FacturaRemoveAdminRoutedComponent, resolve: { message: SessionResolver } },

  { path: 'carrito/plist', component: CarritoPlistAdminRoutedComponent, resolve: { message: SessionResolver } },
  { path: 'carrito/cplist', component: CarritoPlistUserRoutedComponent, resolve: { message: SessionResolver } },
  { path: 'carrito/plist/producto/:idproducto', component: CarritoPlistAdminRoutedComponent, resolve: { message: SessionResolver } },
  { path: 'carrito/plist/usuario/:idusuario', component: CarritoPlistAdminRoutedComponent, resolve: { message: SessionResolver } },
  { path: 'carrito/new', component: CarritoNewAdminRoutedComponent, resolve: { message: SessionResolver } },
  { path: 'carrito/view/:id', component: CarritoViewAdminRoutedComponent, resolve: { message: SessionResolver } },
  { path: 'carrito/edit/:id', component: CarritoEditAdminRoutedComponent, resolve: { message: SessionResolver } },
  { path: 'carrito/remove/:id', component: CarritoRemoveAdminRoutedComponent, resolve: { message: SessionResolver } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
