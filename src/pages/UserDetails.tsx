import React from 'react'
import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonPage, IonRow, IonText, IonToolbar } from '@ionic/react';
import { arrowBackOutline, arrowForward, bookmarkOutline, chatboxEllipsesOutline, ellipsisHorizontal, imageOutline, personAddOutline } from "ionicons/icons";

const UserDetails = () => {
    return (
        <IonRow className="ion-justify-content-center">
          <IonCol size="12" className="ion-justify-content-center ion-align-items-center ion-text-center">
            <IonCard>

              <IonCardContent>

                <IonRow>
                  <IonCol size="4">
                    <img src="https://raw.githubusercontent.com/alanmontgomery/ionic-react-profile-dashboard-ui/6f364b95bd1140e02174be2694fa0a635dbae31d/public/assets/alan.jpg" alt="avatar" />
                  </IonCol>

                  <IonCol size="8">
                    <IonRow >
                      <IonCol size="12">
                        <IonText color="dark" >
                          <p>Alan Montgomery</p>
                        </IonText>
                        <IonText color="medium">
                          <p>Farmer/Buyer</p>
                        </IonText>
                      </IonCol>
                    </IonRow>

                    <IonRow >

                      <IonCol >

                      <IonText color="dark" >
                          <p>Email</p>
                        </IonText>
                        <IonCardSubtitle>farmerbuyer@gmail.com</IonCardSubtitle>
                      </IonCol>

                      <IonCol >

                      <IonText color="dark" >
                          <p>Mobile</p>
                        </IonText>
                        <IonCardSubtitle>+91-1234567890</IonCardSubtitle>
                      </IonCol>
                    </IonRow>
                  </IonCol>
                </IonRow>

                <IonRow>
                  <IonCol size="6">
                    <IonButton fill="outline" expand="block">
                      Message
                    </IonButton>
                  </IonCol>

                  <IonCol size="6">
                    <IonButton color="primary" expand="block">
                      <IonIcon icon={personAddOutline} size="small" />&nbsp;
                      Follow
                    </IonButton>
                  </IonCol>
                </IonRow>
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
    )
}

export default UserDetails