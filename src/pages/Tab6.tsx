import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import Header from '../components/Header';
import './Tab3.css';
import Profile from './Profile';
import NewPost from './NewPost';
import Equipment from './Equipments';

const Tab6: React.FC = () => {
  return (
    <IonPage>
       <Header />
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Equipments</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Equipment/>
      </IonContent>
    </IonPage>
  );
};

export default Tab6;