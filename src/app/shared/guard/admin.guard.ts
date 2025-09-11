import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard {
  router = inject(Router);

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    // Guard for user is login or not
    let user = JSON.parse(localStorage.getItem('user') || '{}');
    if (!user || user === null) {
      this.router.navigate(['/auth/login']);
      return true;
    } else if (user) {
      if (!Object.keys(user).length) {
        this.router.navigate(['/auth/login']);
        return true;
      }
    }
    return true;
  }
}
