import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AboutComponent } from './pages/about/about.component';
import { Video2audioComponent } from './pages/video2audio/video2audio.component';

const routes: Routes = [
  {
    path: '', component: NavigationComponent, children: [
      {
        path: 'video2Audio', component: Video2audioComponent
      },
      {
        path: '', component: Video2audioComponent
      },
    ]
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
