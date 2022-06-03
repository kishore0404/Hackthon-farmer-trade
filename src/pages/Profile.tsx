import React from 'react'
import { IonCard, IonCardContent, IonCardHeader, IonCol, IonRow, IonText, IonAccordionGroup, IonAccordion, IonItem, IonLabel, IonList, IonIcon } from '@ionic/react';
import { trashOutline } from "ionicons/icons";

const Profile: React.FC = () => {
    let userData = null;

    userData = localStorage.getItem('userData');

    const data = userData && JSON.parse(userData);

    return (
        <IonRow className="ion-justify-content-center">
          <IonCol size="12" className="ion-justify-content-center ion-align-items-center ion-text-center">
            <IonCard>
              <IonCardHeader>
                <IonRow>
                  <IonCol>
                    <img src="./assets/no-image.png" alt="avatar" />
                  </IonCol>
                </IonRow>
              </IonCardHeader>

              <IonCardContent>
                <IonItem className='ion-text-center'>
                  <IonLabel>
                    {data.name}
                  </IonLabel>
                </IonItem>
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonAccordionGroup value="accountInformation">
              <IonAccordion value="accountInformation">
                <IonItem slot="header">
                  <IonLabel>ACCOUNT INFORMATION</IonLabel>
                </IonItem>

                <IonList slot="content">
                  <IonItem>
                    <IonLabel>Name: </IonLabel>
                    <IonLabel>
                      <IonText>{data.name}</IonText>
                    </IonLabel>
                  </IonItem>
                  <IonItem>
                    <IonLabel>Email: </IonLabel>
                    <IonLabel>
                      <IonText>{data.email}</IonText>
                    </IonLabel>
                  </IonItem>
                  <IonItem>
                    <IonLabel>Phone Number: </IonLabel>
                    <IonLabel>
                      <IonText>{data.mobile}</IonText>
                    </IonLabel>
                  </IonItem>
                  <IonItem>
                    <IonLabel>I am a: </IonLabel>
                    <IonLabel>
                      <IonText>Farmer</IonText>
                    </IonLabel>
                  </IonItem>
                  <IonItem>
                    <IonLabel>Language: </IonLabel>
                    <IonLabel>
                      <IonText>{data.language}</IonText>
                    </IonLabel>
                  </IonItem>
                </IonList>
              </IonAccordion>
              <IonAccordion value="companyInformation">
                <IonItem slot="header">
                  <IonLabel>COMPANY INFORMATION</IonLabel>
                </IonItem>
                <IonList slot="content">
                  <IonItem>
                    <IonLabel>Company Address: </IonLabel>
                    <IonLabel>
                      <IonText>{data.address.fullAddress}</IonText>
                    </IonLabel>
                  </IonItem>
                  <IonItem>
                    <IonLabel>Zip Code: </IonLabel>
                    <IonLabel>
                      <IonText>{data.address.pincode}</IonText>
                    </IonLabel>
                  </IonItem>
                  <IonItem>
                    <IonLabel>Country: </IonLabel>
                    <IonLabel>
                      <IonText>{data.address.country}</IonText>
                    </IonLabel>
                  </IonItem>
                </IonList>
              </IonAccordion>
            </IonAccordionGroup>
            <IonItem>
              <IonLabel><IonIcon icon={trashOutline} /> Delete Account</IonLabel>
            </IonItem>
          </IonCol>
        </IonRow>

    )
}

export default Profile