import axios from 'axios';
import { IonLoading } from '@ionic/react';

import { personCircleOutline } from "ionicons/icons";
const axiosCall = async (url: string, config: any) => {
    var eleLoader = document.getElementsByClassName("cus-loader")[0];
    eleLoader.classList.add("show");
    const XhrRes = await axios(url, config)
        .then(function(response: any) {
            if (typeof response.config !== 'undefined') {
                response.config.successCallBack(response);
            }
            eleLoader.classList.remove("show");
            return response;
        })
        .catch(function(error) {
            if (typeof config.errorCallBack !== 'undefined') {
                config.errorCallBack(error);
            }
             eleLoader.classList.remove("show");
        });
    return XhrRes;
}

export const APIService = {
    axiosCall
};