import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  showTable = false;
  public columns :any[]= [
    { name: '#', key: 'id', style: '#f2f2f2' },
    { name: 'First Name', key: 'firstName', style: '#f2f2f2' },
    { name: 'Last Name', key: 'lastName', style: '#f2f2f2' },
    { name: 'Username', key: 'username', style: '#f2f2f2' },
  ];
  public data:any[] = [
    { id: 1, firstName: 'John', lastName: 'Doe', username: '@john_doe' },
    { id: 2,firstName: 'Aparna', lastName: 'TB', username: '@aparna_tb' },
    { id: 3,firstName: 'Athulya', lastName: 'S', username: '@athulya_s' },
    { id: 4,firstName: 'Anoop', lastName: 'Antony', username: '@anoop_antony' },
    // Add more rows as needed
  ];
  styleIndex = 0;

  toggleTable() {
    this.showTable = !this.showTable;
  }

  changeColumnStyle() {
    this.columns[this.styleIndex].style = this.getRandomColor();
    this.styleIndex = (this.styleIndex + 1) % this.columns.length;
  }

  private getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

}
