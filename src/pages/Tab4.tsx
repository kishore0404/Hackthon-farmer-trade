import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import Header from '../components/Header';
import './Tab3.css';
import Profile from './Profile';

const Tab4: React.FC = () => {
    return (
        <IonPage>
          <Header />
          <IonContent fullscreen>
            <IonHeader collapse="condense">
              <IonToolbar>
                <IonTitle size="large">My Profile</IonTitle>
              </IonToolbar>
            </IonHeader>
            <Profile/>
          </IonContent>
        </IonPage>
    );
};

export default Tab4;