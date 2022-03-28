import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Login from '../components/Login';
import Header from '../components/Header';
import './Tab2.css';
import Profile from './Profile';

const islogin = !!localStorage.getItem('isLogin');
const Tab2: React.FC = () => {
  return (
    <IonPage>
        <Header />
      <IonContent fullscreen>
      {islogin ? <IonHeader className="my-10">
          <IonToolbar>
            <IonTitle size="large">My Profile</IonTitle>
          </IonToolbar>
        </IonHeader> : null}
        
        {!islogin && <Login />}
        {!!islogin && <Profile />}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
