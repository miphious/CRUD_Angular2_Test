import { Component } from '@angular/core';
import { CoursesService } from '../courses.service';
import { Router} from '@angular/router';
@Component({
    selector: 'list',
    templateUrl: 'app/courses/list/list.template.html'
})
export class ListComponent {
    courses: any;
    errorMessage: string;
    user: any;
    course: any;
    paramsObserver: any;
    allowEdit: boolean = false;
    constructor(private _coursesService: CoursesService, private _router: Router) { }
    ngOnInit() {
        this._coursesService.list().subscribe(courses => this.courses
            = courses);
    }
}

