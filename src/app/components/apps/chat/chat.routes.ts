import { Routes } from '@angular/router';

export const Chat: Routes = [
  {
    path: '',
    children: [
      {
        path: 'chat-app',
        loadComponent: () => import('./chat-app/chat-app').then(m => m.ChatApp),
        data: {
          title: 'Chat App',
          breadcrumb: 'Chat App',
        },
      },
      {
        path: 'video-chat',
        loadComponent: () => import('./video-chat/video-chat').then(m => m.VideoChat),
        data: {
          title: 'Video Chat',
          breadcrumb: 'Video Chat',
        },
      },
    ],
  },
];
