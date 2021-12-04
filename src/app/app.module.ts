import { PaginationService } from './service/pagination.service';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { LogoutComponent } from './component/logout/logout.component';
import { MenuComponent } from './component/menu/menu.component';
import { SessionService } from './service/session.service';
import { HttpClientModule } from '@angular/common/http';
import { SessionResolver } from './resolve/session.resolve';
import { PlistPostComponent } from './component/post/plist/plist.component';
import { PostService } from './service/post.service';
import { TrimPipe } from './pipe/trim.pipe';
import { showDateTimePipe } from './pipe/showDateTime.pipe';
import { ViewPostComponent } from './component/post/view/view.component';
import { FooterComponent } from './component/footer/footer.component';
import { NewPostComponent } from './component/post/new/new.component';
import { EditPostComponent } from './component/post/edit/edit.component';
import { showBooleanPipe } from './pipe/showBoolean.pipe';
import { RemovePostComponent } from './component/post/remove/remove.component';
import { ModalComponent } from './component/modal/modal.component';
import { DateTimeService } from './service/datetime.service';
import { HeaderComponent } from './component/header/header.component';
import { ReadComponent } from './component/post/read/read.component';
import { LookPostComponent } from './component/post/look/look.component';
import { PlistTipousuarioComponent } from './component/tipousuario/plist/plist-tipousuario.component';
import { EditTipousuarioComponent } from './component/tipousuario/edit/edit-tipousuario.component';
import { ViewTipousuarioComponent } from './component/tipousuario/view/view-tipousuario.component';
import { PlistTipoproductoComponent } from './component/tipoproducto/plist/plist-tipoproducto.component';
import { NewTipoproductoComponent } from './component/tipoproducto/new/new-tipoproducto.component';
import { EditTipoproductoComponent } from './component/tipoproducto/edit/edit-tipoproducto.component';
import { RemoveTipoproductoComponent } from './component/tipoproducto/remove/remove-tipoproducto.component';
import { ViewTipoproductoComponent } from './component/tipoproducto/view/view-tipoproducto.component';
import { PlistProductoComponent } from './component/producto/plist/plist-producto.component';
import { NewProductoComponent } from './component/producto/new/new-producto.component';
import { EditProductoComponent } from './component/producto/edit/edit-producto.component';
import { RemoveProductoComponent } from './component/producto/remove/remove-producto.component';
import { ViewProductoComponent } from './component/producto/view/view-producto.component';
import { PlistUsuarioComponent } from './component/usuario/plist/plist-usuario.component';
import { NewUsuarioComponent } from './component/usuario/new/new-usuario.component';
import { EditUsuarioComponent } from './component/usuario/edit/edit-usuario.component';
import { RemoveUsuarioComponent } from './component/usuario/remove/remove-usuario.component';
import { ViewUsuarioComponent } from './component/usuario/view/view-usuario.component';
import { PlistCarritoComponent } from './component/carrito/plist/plist-carrito.component';
import { NewCarritoComponent } from './component/carrito/new/new-carrito.component';
import { ViewCarritoComponent } from './component/carrito/view/view-carrito.component';
import { RemoveCarritoComponent } from './component/carrito/remove/remove-carrito.component';
import { EditCarritoComponent } from './component/carrito/edit/edit-carrito.component';
import { PlistCompraComponent } from './component/compra/plist/plist-compra.component';
import { NewCompraComponent } from './component/compra/new/new-compra.component';
import { ViewCompraComponent } from './component/compra/view/view-compra.component';
import { RemoveCompraComponent } from './component/compra/remove/remove-compra.component';
import { EditCompraComponent } from './component/compra/edit/edit-compra.component';
import { PlistFacturaComponent } from './component/factura/plist/plist-factura.component';
import { NewFacturaComponent } from './component/factura/new/new-factura.component';
import { ViewFacturaComponent } from './component/factura/view/view-factura.component';
import { RemoveFacturaComponent } from './component/factura/remove/remove-factura.component';
import { EditFacturaComponent } from './component/factura/edit/edit-factura.component';
import { CompraService } from './service/compra.service';
import { ProductoService } from './service/producto.service';
import { CarritoService } from './service/carrito.service';
import { UsuarioService } from './service/usuario.service';
import { TipousuarioService } from './service/tipousuario.service';
import { TipoproductoService } from './service/tipoproducto.service';
import { FacturaService } from './service/factura.service';
import { IconService } from './service/icon.service';
import { GenerateComponent } from './component/generate/generate.component';
import { GenerateService } from './service/generate.service';
import { CountService } from './service/count.service';
import { ReportsComponent } from './component/reports/reports.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    LoginComponent,
    HomeComponent,
    LogoutComponent,
    GenerateComponent,
    ReportsComponent,

    ReadComponent,
    LookPostComponent,
    PlistPostComponent,
    ViewPostComponent,
    NewPostComponent,
    EditPostComponent,
    RemovePostComponent,
    
    TrimPipe,
    showDateTimePipe,
    showBooleanPipe,

    PlistTipousuarioComponent,
    ViewTipousuarioComponent,
    EditTipousuarioComponent,

    PlistUsuarioComponent,
    NewUsuarioComponent,
    ViewUsuarioComponent,
    EditUsuarioComponent,
    RemoveUsuarioComponent,

    PlistTipoproductoComponent,
    NewTipoproductoComponent,
    ViewTipoproductoComponent,
    EditTipoproductoComponent,
    RemoveTipoproductoComponent,

    PlistProductoComponent,
    NewProductoComponent,
    ViewProductoComponent,
    EditProductoComponent,
    RemoveProductoComponent,

    PlistCompraComponent,
    NewCompraComponent,
    ViewCompraComponent,
    EditCompraComponent,
    RemoveCompraComponent,

    PlistFacturaComponent,
    NewFacturaComponent,
    ViewFacturaComponent,
    EditFacturaComponent,
    RemoveFacturaComponent,

    PlistCarritoComponent,
    NewCarritoComponent,
    ViewCarritoComponent,
    RemoveCarritoComponent,
    EditCarritoComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    SessionService,
    SessionResolver,
    PostService,
    PaginationService,
    DateTimeService,
    CompraService,
    FacturaService,
    ProductoService,
    TipoproductoService,
    UsuarioService,
    TipousuarioService,
    CarritoService,
    IconService,
    GenerateService,
    CountService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
