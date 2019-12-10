import * as firebase from 'firebase';
import { Injectable } from '@angular/core';

@Injectable()


export class  AuthService {

    social() {
        let userDetails;
        userDetails = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(userDetails).then((result) => {
            console.log(result);
            // this.router.navigate(['/bookRoom']);
        }).catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }
}