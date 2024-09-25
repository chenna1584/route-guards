
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    
    // Simple authentication check (replace with real logic)
    const isAuthenticated = Math.random() < 0.5; // Simulate random authentication
    
    if (isAuthenticated) {
      return true;
    } else {
      this.router.navigate(['/home']);
      return false;
    }
  }
}

