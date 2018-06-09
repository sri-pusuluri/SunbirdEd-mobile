import { Component, Input, OnInit } from "@angular/core";
import { NavController } from 'ionic-angular';
import { ImageLoader } from "ionic-image-loader";
import { EnrolledCourseDetailsPage } from "../../../pages/enrolled-course-details/enrolled-course-details";
// import { CourseDetailPage } from './../../../pages/course-detail/course-detail';
import { CollectionDetailsPage } from '../../../pages/collection-details/collection-details';
import { ContentDetailsPage } from '../../../pages/content-details/content-details';
import { ContentType, MimeType } from "../../../app/app.constant";
import { CourseUtilService } from "../../../service/course-util.service";


/**
 * The course card component
 */
@Component({
  selector: 'course-card',
  templateUrl: 'course-card.html'
})
export class CourseCard implements OnInit {

  /**
   * Contains course details
   */
  @Input() course: any;

  /**
   * Contains layout name
   *
   * @example layoutName = Inprogress / popular 
   */
  @Input() layoutName: string;

  @Input() pageName: string;

  @Input() onProfile: boolean = false;

  /**
   * Contains default image path.
   *
   * It gets used when perticular course does not have a course/content icon
   */
  defaultImg: string;

  /**
   * Default method of class CourseCard
   * 
   * @param navCtrl To navigate user from one page to another
   */
  constructor(public navCtrl: NavController, private courseUtilService: CourseUtilService) {
    this.defaultImg = 'assets/imgs/ic_launcher.png';
  }

  /**
   * Navigate to the course/content details page
   * 
   * @param {string} layoutName 
   * @param {object} content 
   */
  navigateToCourseDetailPage(content: any, layoutName: string): void {
    console.log('Card details... @@@', content);
    if (layoutName === 'Inprogress' || content.contentType === ContentType.COURSE) {
      this.navCtrl.push(EnrolledCourseDetailsPage, {
        content: content
      })
    } else {
      if (content.contentType === ContentType.COURSE) {
        console.log('Inside course details page');
        this.navCtrl.push(EnrolledCourseDetailsPage, {
          content: content
        });
      } else if (content.mimeType === MimeType.COLLECTION) {
        console.log('Inside CollectionDetailsPage');
        this.navCtrl.push(CollectionDetailsPage, {
          content: content
        })
      } else {
        console.log('Inside ContentDetailsPage');
        this.navCtrl.push(ContentDetailsPage, {
          content: content
        })
      }
    }
  }

  ngOnInit() {
    if (this.layoutName === 'Inprogress') {
      this.course.progress = this.courseUtilService.getCourseProgress(this.course.leafNodesCount, this.course.progress);
    }
  }
}
