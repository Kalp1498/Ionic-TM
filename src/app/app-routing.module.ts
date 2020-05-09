import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'splashscreen',
    pathMatch: 'full' 
  },
  {
    path: 'splashscreen',
    loadChildren: () => import('./pages/splash-screen/splash-screen.module').then( m => m.SplashScreenPageModule)
  },
  {
    path: 'introduction',
    loadChildren: () => import('./pages/introduction/introduction.module').then( m => m.IntroductionPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'feedback',
    loadChildren: () => import('./pages/feedback/feedback.module').then( m => m.FeedbackPageModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('./pages/privacy-policy/privacy-policy.module').then( m => m.PrivacyPolicyPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'storydetail/:categoryName/:storyName',
    loadChildren: () => import('./pages/story-detail/story-detail.module').then( m => m.StoryDetailPageModule)
  },
  {
    path: 'addstory',
    loadChildren: () => import('./pages/add-story/add-story.module').then( m => m.AddStoryPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ]
})
export class AppRoutingModule { }
