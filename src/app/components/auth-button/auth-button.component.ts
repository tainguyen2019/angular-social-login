import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-auth-button',
  templateUrl: './auth-button.component.html',
  styleUrls: ['./auth-button.component.scss'],
})
export class AuthButtonComponent implements OnInit {
  profileJson: any;

  // Inject the authentication service into your component through the constructor
  constructor(
    public auth: AuthService,
    @Inject(DOCUMENT) private doc: Document
  ) {}

  ngOnInit(): void {
    this.auth.user$.subscribe((profile) => (this.profileJson = profile));
  }

  logout(): void {
    this.auth.logout({ returnTo: this.doc.location.origin });
  }
}
