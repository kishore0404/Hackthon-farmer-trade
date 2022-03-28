import {
  IonIcon, IonFab,IonFabButton, IonFabList
} from '@ionic/react';
import {share, logoVimeo, logoFacebook, logoInstagram, logoTwitter }  from 'ionicons/icons';

const SocialShare = () => {
   
    return (
        <IonFab vertical="bottom" horizontal="start" slot="fixed">
          <IonFabButton>
            <IonIcon icon={share} />
          </IonFabButton>
          <IonFabList side="top">
            <IonFabButton><IonIcon icon={logoVimeo} /></IonFabButton>
            <IonFabButton><IonIcon icon={logoFacebook} /></IonFabButton>
            <IonFabButton><IonIcon icon={logoInstagram} /></IonFabButton>
            <IonFabButton><IonIcon icon={logoTwitter} /></IonFabButton>
          </IonFabList>
        </IonFab>
    );
};

export default SocialShare;