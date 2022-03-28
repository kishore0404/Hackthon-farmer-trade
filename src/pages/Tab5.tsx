import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import Header from '../components/Header';
import './Tab3.css';
import Profile from './Profile';
import NewPost from './NewPost';

const Tab5: React.FC = () => {
  return (
    <IonPage>
       <Header />
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Create New Post</IonTitle>
          </IonToolbar>
        </IonHeader>
        <NewPost/>
      </IonContent>
    </IonPage>
  );
};

export default Tab5;