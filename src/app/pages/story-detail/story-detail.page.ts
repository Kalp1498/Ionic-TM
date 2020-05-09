import { Component, OnInit } from '@angular/core';
import { IStory } from 'src/app/models/story.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { StoryService } from 'src/app/service/story.service';
import { ShareService } from 'src/app/service/share.service';

@Component({
  selector: 'app-story-detail',
  templateUrl: './story-detail.page.html',
  styleUrls: ['./story-detail.page.scss'],
})
export class StoryDetailPage implements OnInit {

  constructor(
    private router: Router,
    private shareService: ShareService,
    private storyService: StoryService,
    private activatedRoute: ActivatedRoute
  ) { }

  story: IStory;
  storyName: string;
  categoryName: string;
  showSpinner: boolean = true;

  ngOnInit() {
    this.getStoryDetails()
  }

  // get story details for selected story
  getStoryDetails() {
    this.storyName = this.activatedRoute.snapshot.paramMap.get('storyName');
    this.categoryName = this.activatedRoute.snapshot.paramMap.get('categoryName');
    this.storyService.getStoryDetailsFromFirebase(this.categoryName, this.storyName).subscribe(story => {
      this.story = story
      this.showSpinner = false
    })
  }

  navigateToHome() {
    this.router.navigateByUrl('/home');
  }

  // share story on different platforms
  shareStory() {
    this.shareService.options = {
      files: '',
      subject: '',
      chooserTitle: '',
      url: 'https://play.google.com/store',
      message: this.story.storyName + "\n" + this.story.content.substring(0, 99) + '...'
    }
    this.shareService.share()
  }
}
