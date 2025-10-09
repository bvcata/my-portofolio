import { Component, input } from '@angular/core';

interface ImageContent {
  imagePath: string;
}

interface TextContent {
  text: string;
}

interface BulletPointContent {
  title?: string;
  bulletPoints: string[];
}

export enum ContentType {
  Image,
  Text,
  BulletPoints
}

export interface Content {
  type: ContentType;
  content: ImageContent | TextContent | BulletPointContent;
}

@Component({
  selector: 'app-content-viewer',
  imports: [],
  templateUrl: './content-viewer.html',
  styleUrl: './content-viewer.scss'
})
export class ContentViewer {
  public contentType = ContentType;
  public items = input<Content[]>();
}
