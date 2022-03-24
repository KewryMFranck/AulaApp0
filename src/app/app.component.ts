import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
    { title: 'botao1', url: '/folder/Spam', icon: 'warning' },
    { title: 'botao2', url: '/folder/Spam', icon: 'warning' },
    { title: 'botao3', url: '/folder/Spam', icon: 'warning' },
    { title: 'botao4', url: '/folder/Spam', icon: 'warning' },
    { title: 'Navegação', url: '/navegacao', icon: 'code' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
