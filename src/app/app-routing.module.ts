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
import { TipoproductoEditRoutedComponent } from './component/application/tipoproducto/routed/tipoproducto-edit-routed/tipoproducto-edit-routed.component';
import { TipoproductoNewRoutedComponent } from './component/application/tipoproducto/routed/tipoproducto-new-routed/tipoproducto-new-routed.component';
import { PlistTipoproductoComponent } from './component/application/tipoproducto/routed/tipoproducto-plist-routed/tipoproducto-plist-routed.component';
import { TipoproductoRemoveRoutedComponent } from './component/application/tipoproducto/routed/tipoproducto-remove-routed/tipoproducto-remove-routed.component';
import { TipoproductoViewRoutedComponent } from './component/application/tipoproducto/routed/tipoproducto-view-routed/tipoproducto-view-routed.component';
import { TipousuarioEditRoutedComponent } from './component/application/tipousuario/routed/tipousuario-edit-routed/tipousuario-edit-routed.component';
import { TipousuarioPlistRoutedComponent } from './component/application/tipousuario/routed/tipousuario-plist-routed/tipousuario-plist-routed.component';
import { TipousuarioViewRoutedComponent } from './component/application/tipousuario/routed/tipousuario-view-routed/tipousuario-view-routed.component';
import { UsuarioEditRoutedComponent } from './component/application/usuario/routed/usuario-edit-routed/usuario-edit-routed.component';
import { UsuarioNewRoutedComponent } from './component/application/usuario/routed/usuario-new-routed/usuario-new-routed.component';
import { UsuarioPlistRoutedComponent } from './component/application/usuario/routed/usuario-plist-routed/usuario-plist-routed.component';
import { UsuarioRemoveRoutedComponent } from './component/application/usuario/routed/usuario-remove-routed/usuario-remove-routed.component';
import { UsuarioViewRoutedComponent } from './component/application/usuario/routed/usuario-view-routed/usuario-view-routed.component';
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
import { UsuarioCViewRoutedComponent } from './component/application/usuario/routed/usuario-cview-routed/usuario-cview-routed.component';


const routes: Routes = [
  { path: '', component: HomeComponent, resolve: { message: SessionResolver } },

  { path: 'home', component: HomeComponent, resolve: { message: SessionResolver } },
  { path: 'login', component: LoginComponent, resolve: { message: SessionResolver } },
  { path: 'logout', component: LogoutComponent, resolve: { message: SessionResolver } },
  { path: 'random/load', component: GenerateComponent, resolve: { message: SessionResolver } },
  { path: 'reports', component: ReportsComponent, resolve: { message: SessionResolver } },

  { path: 'tipousuario/plist', component: TipousuarioPlistRoutedComponent, resolve: { message: SessionResolver } },
  { path: 'tipousuario/view/:id', component: TipousuarioViewRoutedComponent, resolve: { message: SessionResolver } },
  { path: 'tipousuario/edit/:id', component: TipousuarioEditRoutedComponent, resolve: { message: SessionResolver } },

  { path: 'usuario/plist', component: UsuarioPlistRoutedComponent, resolve: { message: SessionResolver } },
  { path: 'usuario/plist/tipousuario/:id_tipousuario', component: UsuarioPlistRoutedComponent, resolve: { message: SessionResolver } },
  { path: 'usuario/view/:id', component: UsuarioViewRoutedComponent, resolve: { message: SessionResolver } },
  { path: 'usuario/cview/:id', component: UsuarioCViewRoutedComponent, resolve: { message: SessionResolver } },
  { path: 'usuario/new', component: UsuarioNewRoutedComponent, resolve: { message: SessionResolver } },  
  { path: 'usuario/edit/:id', component: UsuarioEditRoutedComponent, resolve: { message: SessionResolver } },
  { path: 'usuario/remove/:id', component: UsuarioRemoveRoutedComponent, resolve: { message: SessionResolver } },

  { path: 'tipoproducto/plist', component: PlistTipoproductoComponent, resolve: { message: SessionResolver } },
  { path: 'tipoproducto/view/:id', component: TipoproductoViewRoutedComponent, resolve: { message: SessionResolver } },
  { path: 'tipoproducto/new', component: TipoproductoNewRoutedComponent, resolve: { message: SessionResolver } },
  { path: 'tipoproducto/edit/:id', component: TipoproductoEditRoutedComponent, resolve: { message: SessionResolver } },
  { path: 'tipoproducto/remove/:id', component: TipoproductoRemoveRoutedComponent, resolve: { message: SessionResolver } },

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
