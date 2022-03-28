import React, { useState, useEffect } from 'react';
import { IonSearchbar, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSlides, IonSlide, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';
import Header from '../components/Header';
import MyCarousel from '../components/MyCarousel';
import Search from '../components/Search';
import SlidingCards from '../components/SlidingCards';
import SocialShare from '../components/SocialShare';
import InsideCharts from '../components/InsideCharts';
import { isEmpty } from "lodash";
import './Tab1.css';
const Tab1: React.FC = () => {
    return (
        <IonPage>
      <Header />
      <IonContent>
        <MyCarousel/>
        <InsideCharts />
        <SlidingCards />
        <Search />
        <SocialShare />
      </IonContent>
    </IonPage>
    );
};
export default Tab1;