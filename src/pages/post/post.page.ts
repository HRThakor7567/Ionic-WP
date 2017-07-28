import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import {Post} from "../../providers/wp/wp";

@Component({
    selector: 'post-page',
    templateUrl: 'post.html',
})
export class PostPage {
    post: Post;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.post = navParams.get('post');
    }
}