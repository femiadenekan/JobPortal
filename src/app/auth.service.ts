// src/app/auth.service.ts
import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signOut, authState } from '@angular/fire/auth';
import { from, Observable } from 'rxjs';
import { User } from '@firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private auth: Auth) {}

  login(email: string, password: string): Observable<any> {
    return from(signInWithEmailAndPassword(this.auth, email, password));
  }

  logout() {
    return from(signOut(this.auth));
  }

  getAuthState(): Observable<User | null> {
    return authState(this.auth);
  }
}
