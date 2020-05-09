import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { IStory } from '../models/story.interface';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  constructor(
    private angularFirebaseDatabase: AngularFireDatabase
  ) { }

  activeSegment = new BehaviorSubject('');

  // get all stories of selected category from firebase database
  getStoriesFromFirebase(categoryName: string): Observable<IStory[]> {
    return this.angularFirebaseDatabase.list<IStory>('/stories/' + categoryName).valueChanges();
  }

  // get story details of selected story from firebase database
  getStoryDetailsFromFirebase(categoryName: string, storyName: string): Observable<IStory> {
    return this.angularFirebaseDatabase.object<IStory>('/stories/' + categoryName + '/' + storyName).valueChanges()
  }
}
