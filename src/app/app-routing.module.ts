import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsDesktopGuard } from './is-desktop/is-desktop.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    children: [
      {
        path: '',
        // TODO: angular 14, use canMatch
        // Expected: if it's mobile, then it will try to load next path.
        // Actual with canLoad: it does not load.
        canLoad: [IsDesktopGuard],
        loadChildren: () => import("./desktop/desktop.module").then(m => m.DesktopModule),
      },
      {
        path: '',
        loadChildren: () => import("./mobile/mobile.module").then(m => m.MobileModule),
      },
    ]
  },
  {
    path: 'animation',
    loadChildren: () => import("./animation/animation.module").then(m => m.AnimationModule),
  },
  {
    path: 'mat-table-example',
    loadChildren: () => import("./mat-table-example/mat-table-example.module").then(m => m.MatTableExampleModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
