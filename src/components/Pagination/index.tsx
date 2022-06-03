import {
    IonIcon,
} from '@ionic/react';
import { chevronForward, chevronBack } from "ionicons/icons";

const Pagination = (props: any) => {
    const currentPage = props.currentPage,
        totalPage = props.totalPage,
        numberOfPage = [];
    for (var i = 0; i < totalPage; i++) {
        numberOfPage[i] = i;
    }

    return (
        <div className="number-of-page">
            <div className="page-number">
               {currentPage > 1 && <IonIcon icon={chevronBack} size="medium" onClick={()=> props.pageChange(currentPage-1)} />}
                
                { numberOfPage.map((val,i) => {
                   return <span key={`key-${i}`} className={`${i+1 === currentPage?"selected":""}`} onClick={()=> props.pageChange(i+1)}>{i+1}</span>
                })}
                    
                {currentPage < totalPage && <IonIcon icon={chevronForward} size="medium"  onClick={()=> props.pageChange(currentPage+1)}  />}
            </div>
        </div>
    );
};

export default Pagination;