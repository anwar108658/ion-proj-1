import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonContent, IonHeader, IonIcon, IonItem,IonLabel,IonModal, IonTitle,IonInput,IonTextarea,IonText, IonButton, IonCard, IonCardContent, IonDatetimeButton, IonDatetime, IonFooter } from "@ionic/angular/standalone";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
  imports: [RouterModule,IonContent, IonHeader, IonIcon, IonItem,IonLabel,IonTextarea,IonModal,IonText,IonInput, IonButton, IonCard, IonCardContent, IonDatetimeButton, IonDatetime, IonFooter],
})
export class AddTaskComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
