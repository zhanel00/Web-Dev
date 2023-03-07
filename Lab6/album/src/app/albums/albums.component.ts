import {Component, OnInit} from '@angular/core';
import { Album } from "../album-model";
import { AlbumService } from "../album.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: Album[];
  loaded: boolean;
  constructor(private albumService: AlbumService) {
    this.albums = [];
    this.loaded = true;
  }

  getAlbums() {
    this.loaded = false;
    this.albumService.getAlbums().subscribe( (albums) => {
      this.albums = albums;
      this.loaded = true;
    });
  }

  deleteAlbum(id : number) {
    this.albumService.deleteAlbum(id).subscribe((response => {
      this.albums = this.albums.filter(a => a.id != id);
    }))
  }

  ngOnInit(): void {
    this.getAlbums();
  }
}
