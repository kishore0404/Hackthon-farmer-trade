import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Registration from '../components/Registration';
import Header from '../components/Header';
import './Tab3.css';
import Favourite from './Favourite';

const islogin = !!localStorage.getItem('isLogin');
const Tab3: React.FC = () => {
    return (
        <IonPage>
          <Header />
          <IonContent fullscreen>
            <IonHeader className="my-10">
              <IonToolbar>
                <IonTitle size="large">{!islogin ? "Sign Up" : "Lists" }</IonTitle>
              </IonToolbar>
            </IonHeader>
            {!islogin && <Registration />}
            {!!islogin && <Favourite />}
          </IonContent>
        </IonPage>
        );
    };

    export default Tab3;