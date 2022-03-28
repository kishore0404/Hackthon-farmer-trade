import {
    IonIcon,
    IonItem,
    IonCheckbox,
    IonLabel,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonRange,
    IonButton
} from '@ionic/react';
import { closeOutline } from "ionicons/icons";
import './filter-layout.css';

const FilterLayout = (props: any) => {

    return (
        <div className="filter-layout">
       		<div className="filter-head">
	       		<h2>Filter</h2>
	       		<a href="" className="f-close" onClick={(e)=>props.filterClose(e)}>
	       			<IonIcon icon={closeOutline} size="large"></IonIcon>
	       		</a>
       		</div>
       		<div className="filter-value">
       		<IonHeader>
			        <IonToolbar>
			          <IonTitle>Search Radius</IonTitle>
			        </IonToolbar>
			     </IonHeader>
	   			<IonItem>
            <IonRange min={1} max={100} color="secondary" pin={true} value={30} >
              <IonLabel slot="start">1 KM</IonLabel>
              <IonLabel  slot="end">100 KM</IonLabel>
            </IonRange>
          </IonItem>
          <IonHeader>
			        <IonToolbar>
			          <IonTitle>Weight Limit</IonTitle>
			        </IonToolbar>
			     </IonHeader>
	   			<IonItem>
            <IonRange min={1} max={10000} color="secondary" value={1000} >
              <IonLabel slot="start">1 KG</IonLabel>
              <IonLabel slot="end">10000 KG</IonLabel>
            </IonRange>
          </IonItem>
	       		 <IonHeader>
			        <IonToolbar>
			          <IonTitle>Production Mode</IonTitle>
			        </IonToolbar>
			     </IonHeader>
	   			<IonItem>
	   				<IonLabel>Organic production</IonLabel>
	        		<IonCheckbox slot="start" checked={false} />
	      		</IonItem>
	      		<IonItem>
	   				<IonLabel>Conventional Production</IonLabel>
	        		<IonCheckbox slot="start" checked={false} />
	      		</IonItem>

	      		<IonItem>
	   				<IonLabel>Integrated Production</IonLabel>
	        		<IonCheckbox slot="start" checked={false} />
	      		</IonItem>
	      		<IonHeader>
			        <IonToolbar>
			          <IonTitle>Crops</IonTitle>
			        </IonToolbar>
			     </IonHeader>
	   			<IonItem>
	   				<IonLabel>Grain</IonLabel>
	        		<IonCheckbox slot="start" checked={false} />
	      		</IonItem>
	      		<IonItem>
	   				<IonLabel>Coffee</IonLabel>
	        		<IonCheckbox slot="start" checked={false} />
	      		</IonItem>
	      		<IonItem>
	   				<IonLabel>Nuts</IonLabel>
	        		<IonCheckbox slot="start" checked={false} />
	      		</IonItem>

	      		<IonHeader>
			        <IonToolbar>
			          <IonTitle>Certifications</IonTitle>
			        </IonToolbar>
			     </IonHeader>
	   			<IonItem>
	   				<IonLabel>Organic Farming</IonLabel>
	        		<IonCheckbox slot="start" checked={false} />
	      		</IonItem>
	      		<IonItem>
	   				<IonLabel>Non-Gmo Farming</IonLabel>
	        		<IonCheckbox slot="start" checked={false} />
	      		</IonItem>
	      		
	      	<div className="filter-btn">
	      		<IonButton expand="block" color="success" onClick={()=>props.filterClose()}>Apply Filter</IonButton>
	      	</div>
       		</div>

      </div>
    );
};

export default FilterLayout;