import { Component, Input, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

  @Input() player: any;
  public avatarUrl: Observable<any>;

  constructor(
    private storage: AngularFireStorage,
    public authService: AuthService) {

    }

  ngOnInit(): void {
    if(this.player?.avatar) {
      const filePath = 'avatars/' + this.player.id + '/' + this.player.avatar;
      const ref = this.storage.ref(filePath);
      this.avatarUrl = ref.getDownloadURL();
    }
  }
}
