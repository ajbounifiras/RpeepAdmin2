import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FakeDbService } from '@fake-db/fake-db.service';
import { GoogleMapsModule } from '@angular/google-maps';
import { FileUploadModule } from 'ng2-file-upload';
import 'hammerjs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { TranslateModule } from '@ngx-translate/core';
import { ContextMenuModule } from '@ctrl/ngx-rightclick';

import { CoreModule } from '@core/core.module';
import { CoreCommonModule } from '@core/common.module';
import { CoreSidebarModule, CoreThemeCustomizerModule } from '@core/components';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';

import { coreConfig } from 'app/app-config';
import { AuthGuard } from 'app/auth/helpers/auth.guards';
import { fakeBackendProvider } from 'app/auth/helpers'; // used to create fake backend
import { JwtInterceptor, ErrorInterceptor } from 'app/auth/helpers';
import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';

import { ContextMenuComponent } from 'app/main/extensions/context-menu/context-menu.component';
import { AnimatedCustomContextMenuComponent } from './main/extensions/context-menu/custom-context-menu/animated-custom-context-menu/animated-custom-context-menu.component';
import { BasicCustomContextMenuComponent } from './main/extensions/context-menu/custom-context-menu/basic-custom-context-menu/basic-custom-context-menu.component';
import { SubMenuCustomContextMenuComponent } from './main/extensions/context-menu/custom-context-menu/sub-menu-custom-context-menu/sub-menu-custom-context-menu.component';
import { AddUserComponent } from './components/users/add-user/add-user.component';
import { EditUserComponent } from './components/users/edit-user/edit-user.component';
import { ViewUserComponent } from './components/users/view-user/view-user.component';
import { ViewRoleComponent } from './components/roles/view-role/view-role.component';
import { AddRoleComponent } from './components/roles/add-role/add-role.component';
import { EditRoleComponent } from './components/roles/edit-role/edit-role.component';
import { EditAdsComponent } from './components/ads/edit-ads/edit-ads.component';
import { AddAdsComponent } from './components/ads/add-ads/add-ads.component';
import { ViewAdsComponent } from './components/ads/view-ads/view-ads.component';
import { ViewAdvertiserComponent } from './components/advertisers/view-advertiser/view-advertiser.component';
import { EditAdvertiserComponent } from './components/advertisers/edit-advertiser/edit-advertiser.component';
import { AddAdvertiserComponent } from './components/advertisers/add-advertiser/add-advertiser.component';
import { AddPaymentComponent } from './components/payments/add-payment/add-payment.component';
import { EditPaymentComponent } from './components/payments/edit-payment/edit-payment.component';
import { ViewPaymentComponent } from './components/payments/view-payment/view-payment.component';
import { AddPaymentMethodComponent } from './components/payments/add-payment-method/add-payment-method.component';
import { EditPaymentMethodComponent } from './components/payments/edit-payment-method/edit-payment-method.component';
import { ViewPaymentMethodComponent } from './components/payments/view-payment-method/view-payment-method.component';
import { ViewproductsComponent } from './components/products/view-products/view-products.component';
import { AddProductComponent } from './components/products/add-product/add-product.component';
import { EditProductComponent } from './components/products/edit-product/edit-product.component';
import { ViewWinnersComponent } from './components/winners/view-winners/view-winners.component';
import { AddWinnerComponent } from './components/winners/add-winner/add-winner.component';
import { EditWinnerComponent } from './components/winners/edit-winner/edit-winner.component';
import { AddPrizesComponent } from './components/prizes/add-prizes/add-prizes.component';
import { EditPrizesComponent } from './components/prizes/edit-prizes/edit-prizes.component';
import { ViewPrizesComponent } from './components/prizes/view-prizes/view-prizes.component';
import { ViewReclamationsComponent } from './components/reclamations/view-reclamations/view-reclamations.component';
import { AddReclamationComponent } from './components/reclamations/add-reclamation/add-reclamation.component';
import { EditReclamationComponent } from './components/reclamations/edit-reclamation/edit-reclamation.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AddCategoryComponent } from './components/categories/add-category/add-category.component';
import { EditCategoryComponent } from './components/categories/edit-category/edit-category.component';
import { ViewCategoriesComponent } from './components/categories/view-categories/view-categories.component';
import { ViewStatComponent } from './components/statistics/view-stat/view-stat.component';
import { HistoricComponent } from './components/historic/historic.component';
import { AddCouponComponent } from './components/coupons/add-coupon/add-coupon.component';
import { EditCouponComponent } from './components/coupons/edit-coupon/edit-coupon.component';
import { ViewCouponsComponent } from './components/coupons/view-coupons/view-coupons.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { PermissionComponent } from './components/permission/permission.component';
import { AnalyticsComponent } from './main/dashboard/analytics/analytics.component';
import { AddsliderComponent } from './components/slider/addslider/addslider.component';
import { ViewsliderComponent } from './components/slider/viewslider/viewslider.component';
import { EditsliderComponent } from './components/slider/editslider/editslider.component';
import { AddpubComponent } from './components/pub/addpub/addpub.component';
import { ViewpubComponent } from './components/pub/viewpub/viewpub.component';
import { EditpubComponent } from './components/pub/editpub/editpub.component';


const appRoutes: Routes = [

  {
    path: 'dashboard',
    loadChildren: () => import('./main/dashboard/dashboard.module').then(m => m.DashboardModule)
    //component: AnalyticsComponent
  },
  // {
  //   //path: 'dashboard',
  //   loadChildren: () => import('./main/dashboard/dashboard.module').then(m => m.DashboardModule)
  // },
  {
    path:'user/add',component:AddUserComponent
  },
  {
    path:'user/view',component:ViewUserComponent
  },
  {
    path:'user/view',component:ViewUserComponent
  },
  {
    path:'user/edit/:id',component:EditUserComponent
  },
  {
    path:'categories/add',component:AddCategoryComponent
  },
  {
    path:'categories/view',component:ViewCategoriesComponent
  },
  {
    path:'categories/edit',component:EditCategoryComponent
  },
  {
    path:'contacts',component: ContactsComponent
  },
  {
    path:'coupons/add',component:AddCouponComponent
  },
  {
    path:'coupons/view',component: ViewCouponsComponent
  },
  {
    path:'coupons/edit/:id',component:EditCouponComponent
  },
  {
    path:'historique',component:HistoricComponent
  },
  {
    path:'payments/add',component:AddPaymentComponent
  },
  {
    path:'payments/view',component:ViewPaymentComponent
  },
  {
    path:'payments/edit',component:EditPaymentComponent
  },
  {
    path:'payments/add/methode',component:AddPaymentMethodComponent
  },
  {
    path:'payments/view/methode',component:ViewPaymentMethodComponent
  },
  {
    path:'payments/edit/methode',component:EditPaymentMethodComponent
  },{
    path:'prizes/view',component:ViewPrizesComponent
  },{
    path:'prizes/add',component:AddPrizesComponent
  },{
    path:'prizes/edit/:id',component:EditPrizesComponent
  },
  {
    path:'products/add',component:AddProductComponent
  },
  {
    path:'ads/add',component:AddAdsComponent
  },
  {
    path:'ads/view',component:ViewAdsComponent
  },
  {
    path:'ads/edit',component:EditAdsComponent
  },
  {
    path:'products/view',component:ViewproductsComponent
  },
  {
    path:'products/edit/:id',component:EditProductComponent
  },
  {
    path:'reclamations/add',component:AddReclamationComponent
  },
  {
    path:'reclamations/view',component:ViewReclamationsComponent
  },
  {
    path:'reclamations/edit/:id',component:EditReclamationComponent
  },
  {
    path:'roles/view',component:ViewRoleComponent
  },
  {
    path:'roles/add',component:AddRoleComponent
  },
  {
    path:'roles/edit',component:EditRoleComponent
  },
  {
    path:'statistics',component:ViewStatComponent
  },
  {
    path:'permission',component:PermissionComponent
  },
  {
    path:'advertiser/view',component:ViewAdvertiserComponent
  },{
    path:'advertiser/add',component:AddAdvertiserComponent
  },{
    path:'advertiser/edit',component:EditAdvertiserComponent
  },
  {
    path:'winners/view',component:ViewWinnersComponent
  },{
    path:'winners/add',component:AddWinnerComponent
  },{
    path:'winners/edit/:id',component:EditWinnerComponent
  },{
    path:'sliders/add',component:AddsliderComponent
  },{
    path:'sliders/view',component:ViewsliderComponent
  },{
    path:'sliders/edit/:id',component:EditsliderComponent
  },{
    path:'pubs/add',component:AddpubComponent
  },{
    path:'pubs/view',component:ViewpubComponent
  },{
   path:'pubs/edit/:id',component:EditpubComponent
  },
  {
    path: 'apps',
    loadChildren: () => import('./main/apps/apps.module').then(m => m.AppsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'pages',
    loadChildren: () => import('./main/pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: 'ui',
    loadChildren: () => import('./main/ui/ui.module').then(m => m.UIModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'components',
    loadChildren: () => import('./main/components/components.module').then(m => m.ComponentsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'extensions',
    loadChildren: () => import('./main/extensions/extensions.module').then(m => m.ExtensionsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'forms',
    loadChildren: () => import('./main/forms/forms.module').then(m => m.FormsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'tables',
    loadChildren: () => import('./main/tables/tables.module').then(m => m.TablesModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'charts-and-maps',
    loadChildren: () => import('./main/charts-and-maps/charts-and-maps.module').then(m => m.ChartsAndMapsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'components',
    loadChildren: () => import('./main/charts-and-maps/charts-and-maps.module').then(m => m.ChartsAndMapsModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: '/dashboard/ecommerce',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/pages/miscellaneous/error' //Error 404 - Page not found
  }
 
];

@NgModule({
  declarations: [
    AppComponent,
    ContextMenuComponent,
    BasicCustomContextMenuComponent,
    AnimatedCustomContextMenuComponent,
    SubMenuCustomContextMenuComponent,
    AddUserComponent,
    EditUserComponent,
    ViewUserComponent,
    ViewRoleComponent,
    AddRoleComponent,
    EditRoleComponent,
    EditAdsComponent,
    AddAdsComponent,
    ViewAdsComponent,
    ViewAdvertiserComponent,
    EditAdvertiserComponent,
    AddAdvertiserComponent,
    AddPaymentComponent,
    EditPaymentComponent,
    ViewPaymentComponent,
    AddPaymentMethodComponent,
    EditPaymentMethodComponent,
    ViewPaymentMethodComponent,
    ViewproductsComponent,
    AddProductComponent,
    EditProductComponent,
    ViewWinnersComponent,
    AddWinnerComponent,
    EditWinnerComponent,
    AddPrizesComponent,
    EditPrizesComponent,
    ViewPrizesComponent,
    ViewReclamationsComponent,
    AddReclamationComponent,
    EditReclamationComponent,
    ContactsComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    ViewCategoriesComponent,
    ViewStatComponent,
    HistoricComponent,
    AddCouponComponent,
    EditCouponComponent,
    ViewCouponsComponent,
    PermissionComponent,
    AddsliderComponent,
    ViewsliderComponent,
    EditsliderComponent,
    AddpubComponent,
    ViewpubComponent,
    EditpubComponent
  ],
  imports: [
    FileUploadModule,
    GoogleMapsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(FakeDbService, {
      delay: 0,
      passThruUnknownUrl: true
    }),
    RouterModule.forRoot(appRoutes, {
      scrollPositionRestoration: 'enabled', // Add options right here
      relativeLinkResolution: 'legacy'
    }),
    NgbModule,
    ToastrModule.forRoot(),
    TranslateModule.forRoot(),
    ContextMenuModule,
    CoreModule.forRoot(coreConfig),
    CoreCommonModule,
    CoreSidebarModule,
    CoreThemeCustomizerModule,
    CardSnippetModule,
    LayoutModule,
    ContentHeaderModule,
    CKEditorModule
  ],

  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // ! IMPORTANT: Provider used to create fake backend, comment while using real API
    fakeBackendProvider
  ],
  entryComponents: [BasicCustomContextMenuComponent, AnimatedCustomContextMenuComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
