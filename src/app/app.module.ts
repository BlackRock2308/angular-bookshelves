import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { BookListComponent } from './book-list/book-list.component';
import { SingleBookComponent } from './book-list/single-book/single-book.component';
import { BookFormComponent } from './book-list/book-form/book-form.component';
import { HeaderComponent } from './header/header.component';
import { AuthService } from './services/auth.service';
import { BooksService } from './services/books.service';
import { AuthGuardService } from './services/auth-guard.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';

// 1. Import the libs you need
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

const appRoutes: Routes = [
  {path: 'auth/signup', component : SignupComponent},
  {path: 'auth/signin', component : SigninComponent},
  {path: 'books', component : BookListComponent},
  {path: 'books/new', component : BookFormComponent},
  {path: 'books/view/:id ', component : SingleBookComponent}
]

var firebaseConfig = {
  apiKey: "AIzaSyBPjZil5Ut1J53iYRxnmvqfEyeuYXVNkxM",
  authDomain: "angular-firebase1-44c21.firebaseapp.com",
  projectId: "angular-firebase1-44c21",
  storageBucket: "angular-firebase1-44c21.appspot.com",
  messagingSenderId: "82033103987",
  appId: "1:82033103987:web:bbd0a04c8da662a203c606",
  measurementId: "G-CRLLBMD568"
};


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    BookListComponent,
    SingleBookComponent,
    BookFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    // 3. Initialize
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  providers: [AuthService,
             BooksService,
             AuthGuardService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
