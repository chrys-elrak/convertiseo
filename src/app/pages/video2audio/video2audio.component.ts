import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video2audio',
  templateUrl: './video2audio.component.html',
  styleUrls: ['./video2audio.component.css']
})
export class Video2audioComponent implements OnInit {
  @ViewChild('fileInput', { static: true }) fileInput: ElementRef;
  files: any[] = [];
  append: boolean;
  types = ['mp3', 'ogg', 'aac', 'wav'];
  constructor() { }

  ngOnInit(): void {
  }

  buttonClick(append = false) {
    this.append = append;
    this.fileInput.nativeElement.click();
  }

  // FIXME: Do not import folder
  fileInputChange(event) {
    const f: any[] = Array.from(event.target.files);
    if (f.length > 0) {
      if (this.append) {
        this.files = [...this.files,f];
        return;
      }
      this.files = f;
    }
  }

  menuClick(event) {
    event.stopPropagation();
  }

  removeFile(idx: number) {
    this.files.splice(idx, 1)
  }

  pauseVideo(videoEl: HTMLMediaElement) {
    videoEl.pause();
  }

}
