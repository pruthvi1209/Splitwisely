import { Component, OnInit } from "@angular/core";
// import * as firebase from "firebase";
@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {

    ngOnInit() {
        // TODO: ADD to enviromnment file

        var firebaseConfig = {
            apiKey: "AIzaSyDDt5JxdL__4KWmsNBq-s3B57IwDBt7bQ0",
            authDomain: "split-wisely.firebaseapp.com",
            databaseURL: "https://split-wisely.firebaseio.com",
            projectId: "split-wisely",
            storageBucket: "split-wisely.appspot.com",
            messagingSenderId: "359058392290",
            appId: "1:359058392290:web:36ee90ad5d00bfed160abb",
            measurementId: "G-LVH6017GPR"
          };

        //   firebase.initializeApp(firebaseConfig);
    }
 }
