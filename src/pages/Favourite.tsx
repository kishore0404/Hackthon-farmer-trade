import React, {useState, useEffect } from 'react';
import {IonButton, IonSearchbar} from '@ionic/react';
import { IonModal, IonCardTitle } from '@ionic/react';
import { filterOutline, pencil, trashBin } from 'ionicons/icons';
import PostList from '../components/PostList';
import Pagination from '../components/Pagination';
import FilterLayout from '../components/FilterLayout';
import { APIService } from '../Services/api';
import {round } from 'lodash';
import {  IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCol, IonRow, IonText,  IonAccordionGroup, IonAccordion, IonItem, IonLabel, IonList, IonIcon } from '@ionic/react';

let userData = null;

    userData = localStorage.getItem('userData');
  const data = userData && JSON.parse(userData);
const Favourite = (props:any) => {
  const resultLimit = 5;
  const [dataList, setDataList] = useState([]);
  const [allDataList, setAllDataList] = useState([]);
  const [filterOpen, setFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState('');
  const [totalPage, setTotalPage] = useState(1);

    useEffect(()=>{
       getList();
    },[currentPage]);

  const getList = () => {
      APIService.axiosCall(`http://localhost:4000/api/post`, {
        method: "GET",
        params: {q: searchText, limit:resultLimit, currentPage},
        successCallBack: (resp:any) => handleResponse(resp),
      });
  };
  const handleResponse = (response:any) => {
    setAllDataList(response.data);
    let data = response.data.filter((e:any) => (e.fav === true))
    setDataList(data);

  };
  return (
     <div className="my-5">
      {/* <IonCardTitle className="ml-2">Grain List</IonCardTitle> */}
    <div className="f-search">
    <IonLabel>
      <a href='/tab5' className='new-post'>
      <IonButton expand="block" color="success"
>New Post</IonButton>
      </a>
    </IonLabel>
    <IonAccordionGroup value="favouriteLists">
          <IonAccordion value="favouriteLists">
            <IonItem slot="header">
              <IonCardTitle className="ml-2">My Favourites</IonCardTitle>
            </IonItem>

            <IonList slot="content">
              <PostList lists={dataList}/>
            </IonList>
          </IonAccordion>
          <IonAccordion value="myPosts">
            <IonItem slot="header">
            <IonCardTitle className="ml-2">My Posts</IonCardTitle>
            </IonItem>
            <IonList slot="content">
              {allDataList.map((list:any, i:any)=> {
                if(list.farmer?.email === data.email){
            return(
                    <IonCard key={`index-${i}`}>
              <IonCardHeader>
                <IonCardSubtitle >{list.product} 
                 <div className={`fav-icon`}><IonIcon size="large" icon={pencil}/> <IonIcon size="large" className={`trash-icon`} icon={trashBin}/></div>
                  </IonCardSubtitle>
                <IonCardTitle >{list.category} - {list.variety} </IonCardTitle>
              </IonCardHeader>
              <IonCardContent className='card-content'>
                  <IonLabel>Crop Year: {list.cropYear}</IonLabel>
              </IonCardContent>
              <IonAccordionGroup>
              <IonAccordion value="colors">
                <IonItem slot="header">
                <IonLabel>Quatity: {list.weight}</IonLabel>
                </IonItem>
                <IonList slot="content">
                  <IonItem>
                    <IonLabel>{list.description}</IonLabel>
                  </IonItem>
                  <IonItem>
                    <IonLabel>Quatity: {list.weight}</IonLabel>
                  </IonItem>
                  <IonItem>
                    <IonLabel>Price: {list.pricePerWeight}/{list.weightUnit}</IonLabel>
                  </IonItem>
                  <IonItem>
                    <IonLabel>Produced By:  {list.farmer?.name}</IonLabel>
                  </IonItem>
                </IonList>
              </IonAccordion>
              </IonAccordionGroup>
            </IonCard>
            )
              }})}
            </IonList>
          </IonAccordion>
        </IonAccordionGroup>
        
    </div>
    </div>
  );
}

export default Favourite