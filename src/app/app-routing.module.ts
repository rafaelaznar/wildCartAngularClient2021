import { LoginComponent } from './component/shared/routed/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/shared/routed/home/home.component';
import { LogoutComponent } from './component/shared/routed/logout/logout.component';
import { EditCompraComponent } from './component/application/routed/compra/edit/edit-compra.component';
import { NewCompraComponent } from './component/application/routed/compra/new/new-compra.component';
import { PlistCompraComponent } from './component/application/routed/compra/plist/plist-compra.component';
import { RemoveCompraComponent } from './component/application/routed/compra/remove/remove-compra.component';
import { ViewCompraComponent } from './component/application/routed/compra/view/view-compra.component';
import { EditFacturaComponent } from './component/application/routed/factura/edit/edit-factura.component';
import { NewFacturaComponent } from './component/application/routed/factura/new/new-factura.component';
import { FacturaPlistRoutedComponent } from './component/application/routed/factura/plist/factura-plist-routed.component';
import { RemoveFacturaComponent } from './component/application/routed/factura/remove/remove-factura.component';
import { ViewFacturaComponent } from './component/application/routed/factura/view/view-factura.component';
import { EditProductoComponent } from './component/application/routed/producto/edit/edit-producto.component';
import { NewProductoComponent } from './component/application/routed/producto/new/new-producto.component';
import { PlistProductoComponent } from './component/application/routed/producto/plist/plist-producto.component';
import { ProductoRemoveRoutedComponent } from './component/application/routed/producto/remove/producto-remove-routed.component';
import { ProductoViewRoutedComponent } from './component/application/routed/producto/view/producto-view-routed.component';
import { EditTipoproductoComponent } from './component/application/routed/tipoproducto/edit/edit-tipoproducto.component';
import { NewTipoproductoComponent } from './component/application/routed/tipoproducto/new/new-tipoproducto.component';
import { PlistTipoproductoComponent } from './component/application/routed/tipoproducto/plist/plist-tipoproducto.component';
import { RemoveTipoproductoComponent } from './component/application/routed/tipoproducto/remove/remove-tipoproducto.component';
import { ViewTipoproductoComponent } from './component/application/routed/tipoproducto/view/view-tipoproducto.component';
import { TipousuarioEditRoutedComponent } from './component/application/routed/tipousuario/edit/tipousuario-edit-routed.component';
import { TipousuarioPlistRoutedComponent } from './component/application/routed/tipousuario/plist/tipousuario-plist-routed.component';
import { TipousuarioViewRoutedComponent } from './component/application/routed/tipousuario/view/tipousuario-view-routed.component';
import { UsuarioEditRoutedComponent } from './component/application/routed/usuario/edit/usuario-edit-routed.component';
import { UsuarioNewRoutedComponent } from './component/application/routed/usuario/new/usuario-new-routed.component';
import { UsuarioPlistRoutedComponent } from './component/application/routed/usuario/plist/usuario-plist-routed.component';
import { UsuarioRemoveRoutedComponent } from './component/application/routed/usuario/remove/usuario-remove-routed.component';
import { UsuarioViewRoutedComponent } from './component/application/routed/usuario/view/usuario-view-routed.component';
import { PlistCarritoComponent } from './component/application/routed/carrito/plist/plist-carrito.component';
import { NewCarritoComponent } from './component/application/routed/carrito/new/new-carrito.component';
import { ViewCarritoComponent } from './component/application/routed/carrito/view/view-carrito.component';
import { EditCarritoComponent } from './component/application/routed/carrito/edit/edit-carrito.component';
import { RemoveCarritoComponent } from './component/application/routed/carrito/remove/remove-carrito.component';
import { GenerateComponent } from './component/shared/routed/generate/generate.component';
import { ReportsComponent } from './component/shared/routed/reports/reports.component';
import { SessionResolver } from './resolve/session.resolve';

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
  { path: 'usuario/new', component: UsuarioNewRoutedComponent, resolve: { message: SessionResolver } },  
  { path: 'usuario/edit/:id', component: UsuarioEditRoutedComponent, resolve: { message: SessionResolver } },
  { path: 'usuario/remove/:id', component: UsuarioRemoveRoutedComponent, resolve: { message: SessionResolver } },

  { path: 'tipoproducto/plist', component: PlistTipoproductoComponent, resolve: { message: SessionResolver } },
  { path: 'tipoproducto/view/:id', component: ViewTipoproductoComponent, resolve: { message: SessionResolver } },
  { path: 'tipoproducto/new', component: NewTipoproductoComponent, resolve: { message: SessionResolver } },
  { path: 'tipoproducto/edit/:id', component: EditTipoproductoComponent, resolve: { message: SessionResolver } },
  { path: 'tipoproducto/remove/:id', component: RemoveTipoproductoComponent, resolve: { message: SessionResolver } },

  { path: 'producto/plist', component: PlistProductoComponent, resolve: { message: SessionResolver } },
  { path: 'producto/plist/tipoproducto/:id_tipoproducto', component: PlistProductoComponent, resolve: { message: SessionResolver } },
  { path: 'producto/view/:id', component: ProductoViewRoutedComponent, resolve: { message: SessionResolver } },
  { path: 'producto/new', component: NewProductoComponent, resolve: { message: SessionResolver } },  
  { path: 'producto/edit/:id', component: EditProductoComponent, resolve: { message: SessionResolver } },
  { path: 'producto/remove/:id', component: ProductoRemoveRoutedComponent, resolve: { message: SessionResolver } },

  { path: 'compra/plist', component: PlistCompraComponent, resolve: { message: SessionResolver } },
  { path: 'compra/plist/factura/:id_factura', component: PlistCompraComponent, resolve: { message: SessionResolver } },
  { path: 'compra/plist/producto/:id_producto', component: PlistCompraComponent, resolve: { message: SessionResolver } },
  { path: 'compra/view/:id', component: ViewCompraComponent, resolve: { message: SessionResolver } },  
  { path: 'compra/new', component: NewCompraComponent, resolve: { message: SessionResolver } },  
  { path: 'compra/edit/:id', component: EditCompraComponent, resolve: { message: SessionResolver } },
  { path: 'compra/remove/:id', component: RemoveCompraComponent, resolve: { message: SessionResolver } },

  { path: 'factura/plist', component: FacturaPlistRoutedComponent, resolve: { message: SessionResolver } },
  { path: 'factura/plist/usuario/:id', component: FacturaPlistRoutedComponent, resolve: { message: SessionResolver } },  
  { path: 'factura/new', component: NewFacturaComponent, resolve: { message: SessionResolver } },
  { path: 'factura/view/:id', component: ViewFacturaComponent, resolve: { message: SessionResolver } },
  { path: 'factura/edit/:id', component: EditFacturaComponent, resolve: { message: SessionResolver } },
  { path: 'factura/remove/:id', component: RemoveFacturaComponent, resolve: { message: SessionResolver } },

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
