/*
 * @Author: wjy-mac
 * @Date: 2019-10-22 09:40:41
 * @LastEditors: wjy-mac
 * @LastEditTime: 2020-04-08 22:18:08
 * @Description: file content
 */
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginGuardGuard } from './guard/login-guard.guard';

const routes: Routes = [
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule'},
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: '', redirectTo: '/tabs/tab1', pathMatch: 'full' },
  { path: 'products', loadChildren: './pages/products/products.module#ProductsPageModule' },
  { path: 'sjproducts/:id', loadChildren: './pages/products/products.module#ProductsPageModule' },
  { path: 'productcontent', loadChildren: './pages/productcontent/productcontent.module#ProductcontentPageModule' },
  { path: 'selete-content',
    loadChildren: './pages/selete-content/selete-content.module#SeleteContentPageModule',
    canActivate: [LoginGuardGuard] },
  { path: 'confirmationorder', loadChildren: './pages/confirmationorder/confirmationorder.module#ConfirmationorderPageModule' },
  { path: 'pay', loadChildren: './pages/pay/pay.module#PayPageModule' },
  { path: 'select-address', loadChildren: './pages/select-address/select-address.module#SelectAddressPageModule' },
  { path: 'sj-productnav/:id', loadChildren: './pages/sj-productnav/sj-productnav.module#SjProductnavPageModule' },
  { path: 'sj-index', loadChildren: './pages/sj-index/sj-index.module#SjIndexPageModule' },
  { path: 'sjdpyx', loadChildren: './pages/sjdpyx/sjdpyx.module#SjdpyxPageModule' },
  { path: 'newslist',
    loadChildren: './pages/newslist/newslist.module#NewslistPageModule',
    canActivate: [LoginGuardGuard] },
  { path: 'contactlist',
    loadChildren: './pages/contactlist/contactlist.module#ContactlistPageModule',
    canActivate: [LoginGuardGuard] },
  { path: 'scindex', loadChildren: './pages/scindex/scindex.module#ScindexPageModule' },
  { path: 'zt', loadChildren: './pages/zt/zt.module#ZtPageModule' },
  { path: 'spgoods-confirmation', loadChildren: './pages/spgoods-confirmation/spgoods-confirmation.module#SpgoodsConfirmationPageModule' },
  { path: 'moreyhtc', loadChildren: './pages/moreyhtc/moreyhtc.module#MoreyhtcPageModule' },
  { path: 'cart',
    loadChildren: './pages/cart/cart.module#CartPageModule',
    canActivate: [LoginGuardGuard] },
  { path: 'browse-records', loadChildren: './pages/browse-records/browse-records.module#BrowseRecordsPageModule' },
  { path: 'bouns',
    loadChildren: './pages/bouns/bouns.module#BounsPageModule',
    canActivate: [LoginGuardGuard] },
  { path: 'collelist',
    loadChildren: './pages/collelist/collelist.module#CollelistPageModule',
    canActivate: [LoginGuardGuard] },
  { path: 'xcsclist',
    loadChildren: './pages/xcsclist/xcsclist.module#XcsclistPageModule',
    canActivate: [LoginGuardGuard] },
  { path: 'articlecontent', loadChildren: './pages/articlecontent/articlecontent.module#ArticlecontentPageModule' },
  { path: 'pqcontent', loadChildren: './pages/pqcontent/pqcontent.module#PqcontentPageModule' },
  { path: 'yjcontent', loadChildren: './pages/yjcontent/yjcontent.module#YjcontentPageModule' },
  { path: 'fbpqimg',
    loadChildren: './pages/fbpqimg/fbpqimg.module#FbpqimgPageModule',
    canActivate: [LoginGuardGuard] },
  { path: 'fbyj',
    loadChildren: './pages/fbyj/fbyj.module#FbyjPageModule',
    canActivate: [LoginGuardGuard]},
  { path: 'fbyjmore', loadChildren: './pages/fbyjmore/fbyjmore.module#FbyjmorePageModule' },
  { path: 'contactdata', loadChildren: './pages/contactdata/contactdata.module#ContactdataPageModule' },
  { path: 'center-more', loadChildren: './pages/center-more/center-more.module#CenterMorePageModule' },
  { path: 'setpaypwd', loadChildren: './pages/setpaypwd/setpaypwd.module#SetpaypwdPageModule' },
  { path: 'allorder',
    loadChildren: './pages/allorder/allorder.module#AllorderPageModule',
    canActivate: [LoginGuardGuard] },
  { path: 'ordersuccess', loadChildren: './pages/ordersuccess/ordersuccess.module#OrdersuccessPageModule' },
  { path: 'xclist',
    loadChildren: './pages/xclist/xclist.module#XclistPageModule',
    canActivate: [LoginGuardGuard] },
  { path: 'searchorder', loadChildren: './pages/searchorder/searchorder.module#SearchorderPageModule' },
  { path: 'xccontent', loadChildren: './pages/xccontent/xccontent.module#XccontentPageModule' },
  { path: 'ordercontent', loadChildren: './pages/ordercontent/ordercontent.module#OrdercontentPageModule' },
  { path: 'myrelease',
    loadChildren: './pages/myrelease/myrelease.module#MyreleasePageModule',
    canActivate: [LoginGuardGuard] },
  { path: 'searchendgoods', loadChildren: './pages/searchendgoods/searchendgoods.module#SearchendgoodsPageModule' },
  { path: 'sharesearch', loadChildren: './pages/sharesearch/sharesearch.module#SharesearchPageModule' },
  { path: 'userlist', loadChildren: './pages/userlist/userlist.module#UserlistPageModule' },
  { path: 'edmit-user',
    loadChildren: './pages/edmit-user/edmit-user.module#EdmitUserPageModule',
    canActivate: [LoginGuardGuard] },
  { path: 'bill', loadChildren: './pages/bill/bill.module#BillPageModule' },
  { path: 'about-us', loadChildren: './pages/about-us/about-us.module#AboutUsPageModule' },
  { path: 'sjsearch', loadChildren: './pages/sjsearch/sjsearch.module#SjsearchPageModule' },
  { path: 'all-zt', loadChildren: './pages/all-zt/all-zt.module#AllZtPageModule' },
  { path: 'news', loadChildren: './pages/news/news.module#NewsPageModule' },
  { path: 'cancel-order', loadChildren: './pages/cancel-order/cancel-order.module#CancelOrderPageModule' },
  { path: 'after-sale', loadChildren: './pages/after-sale/after-sale.module#AfterSalePageModule' },
  { path: 'after-salelist',
    loadChildren: './pages/after-salelist/after-salelist.module#AfterSalelistPageModule',
    canActivate: [LoginGuardGuard] },
  { path: 'post-comment', loadChildren: './pages/post-comment/post-comment.module#PostCommentPageModule' },
  { path: 'comments-list', loadChildren: './pages/comments-list/comments-list.module#CommentsListPageModule' },
  { path: 'notice', loadChildren: './pages/notice/notice.module#NoticePageModule' },
  { path: 'set-pd', loadChildren: './pages/set-pd/set-pd.module#SetPdPageModule' },
  {
    path: 'myewm',
    loadChildren: './pages/myewm/myewm.module#MyewmPageModule'
  },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
