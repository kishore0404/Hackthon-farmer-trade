import {
    IonIcon,
    IonHeader,
    IonImg,
    IonList,
    IonItem,
    IonLabel,
    IonSelect,
    IonSelectOption
} from '@ionic/react';
import { menuOutline, homeOutline, closeOutline, personCircleOutline, logOut, notificationsOutline, briefcaseOutline, accessibilityOutline, construct, language } from "ionicons/icons";
import './header.css'
import { useState } from 'react';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const onLogout = (flag: boolean) => {
        setMenuOpen(flag);
        localStorage.removeItem('token');
        localStorage.removeItem('isLogin');
        localStorage.removeItem('userData');
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    const redirectToPage = (page: string) => {
        // eslint-disable-next-line no-restricted-globals
        location.href = page;
    }

    const islogin = !!localStorage.getItem('isLogin');

    return ( 
      <>
        <IonHeader>
          <div className="bar bar-header bar-positive">
              <IonIcon className="bar-header-icons burger-icon" slot="start" icon={!menuOpen ? menuOutline : closeOutline} onClick={()=> setMenuOpen(!menuOpen)} size="large" />
                  <IonImg onClick={()=> redirectToPage('/')} className="bar-header-logo-img" src={'/assets/logo.png'} />
                      <IonItem>
                          <IonIcon className="bar-header-icons" slot="end" icon={language} size="large" />
                          <IonSelect>
                              <IonSelectOption value="english">English</IonSelectOption>
                              <IonSelectOption value="hindi">Hindi</IonSelectOption>
                          </IonSelect>
                      </IonItem>
                      <IonList id="menu" className={`hamburger-menu ${menuOpen ? 'open' : 'close' }`}>
                          {islogin && <IonItem href="/tab2">
                              <IonIcon className="menu-icon" icon={personCircleOutline}></IonIcon> My Profile
                          </IonItem>}
                          {islogin && <IonItem href="/tab4">
                              <IonIcon className="menu-icon" icon={briefcaseOutline}></IonIcon> My Order
                          </IonItem>}
                          {islogin && <IonItem href="/tab6">
                              <IonIcon className="menu-icon" icon={construct}></IonIcon> Equipments
                          </IonItem>}
                          {islogin && <IonItem href="/tab4">
                              <IonIcon className="menu-icon" icon={notificationsOutline}></IonIcon> Notifications
                          </IonItem>}
                          {islogin && <IonItem onClick={()=> onLogout(!menuOpen)}><IonIcon className="menu-icon" icon={logOut}></IonIcon> Logout</IonItem>}
                          {!islogin && <IonItem href="/tab2">
                              <IonIcon className="menu-icon" icon={personCircleOutline}></IonIcon> Login
                          </IonItem>}
                          {!islogin && <IonItem href="/tab3">
                              <IonIcon className="menu-icon" icon={accessibilityOutline}></IonIcon> New User
                          </IonItem>}
                      </IonList>
          </div>
        </IonHeader> 
      </>
    );
};

export default Header;