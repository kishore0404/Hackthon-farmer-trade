import React from 'react'
import {  IonCard, IonCardContent, IonCardHeader, IonCol, IonRow, IonText,  IonAccordionGroup, IonAccordion, IonItem, IonLabel, IonList, IonIcon, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { trashOutline } from "ionicons/icons";

const Equipment: React.FC = () => {

  const data = [{
    type : "Machinery",
    name: "Tractor",
    price: "2000",
    manufactureYear: "2020" 
  },
  {
    type : "Carrier",
    name: "Trailer",
    price: "1500",
    manufactureYear: "2021" 
  },
  {
    type : "Electric",
    name: "Water Pump",
    price: "1800",
    manufactureYear: "2022" 
  }
]



  return (
    <IonRow className="ion-justify-content-center">
      <IonCol>
        <IonAccordionGroup value="accountInformation">
          <IonAccordion value="accountInformation">
            <IonItem slot="header">
              <IonLabel>Equipments</IonLabel>
            </IonItem>
            <IonList slot="content">
              {data.map((list,i)=>{
                  return(
                    <IonCard key={`index-${i}`}>
                    <IonCardHeader>
                      <IonCardSubtitle >{list.type} 
                        </IonCardSubtitle>
                      <IonCardTitle >{list.name}</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent className='card-content'>
                        <IonLabel>Manufacture Year: {list.manufactureYear}</IonLabel>
                    </IonCardContent>
                    <IonCardContent>
                    <IonLabel>Price: {list.price}</IonLabel>
                    </IonCardContent>
                  </IonCard>
                  )
              })}
            </IonList>
          </IonAccordion>
        </IonAccordionGroup>
      </IonCol>
    </IonRow>

  )
}

export default Equipment
