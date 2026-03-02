import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
isDark = true;

  toggleDarkMode() {
    this.isDark = !this.isDark;
    document.documentElement.classList.toggle('dark');
  }

  saveChanges() {
    console.log('Changes Saved');
    alert('Changes Saved Successfully ');
  }

  discardChanges() {
    console.log('Changes Discarded');
    alert('Changes Discarded ');
  }
}
