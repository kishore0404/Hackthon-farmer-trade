import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { personCircleOutline, alertCircleOutline } from "ionicons/icons";
import { Form } from '../Form';
import { APIService } from '../../Services/api';
import './login.css';

const Login: React.FC = () => {
    const loginApiFarmer = "https://backend-hackathon.herokuapp.com/api/farmer",
        loginApiBuyer = "https://backend-hackathon.herokuapp.com/api/buyer";
    const [showErrorMsg, setShowErrorMsg] = useState(false);

    const loginData = [{
            label: "Email",
            required: true,
            props: {
                name: "email",
                type: "email",
                labelPosition: "floating"
            }
        },
        {
            label: "Password",
            required: true,
            props: {
                name: "password",
                type: "password",
                labelPosition: "floating",
                maxlength: 20,
                minlength: 6
            }
        },
        {
            label: "User Type",
            required: true,
            props: {
                name: "userType",
                type: "radio",
                selected: "Seller",
                radioOptions: [
                    'Seller',
                    'Buyer'
                ]
            }
        },
        {
            label: "",
            props: {
                name: "active",
                type: "checkbox",
                checkboxOptions: [
                    "Remember me"
                ]
            }
        }
    ];


    const formDataCallBack = (data: any) => {
    	var api = loginApiFarmer;
    	if(data.userType === "Buyer"){
    		api = loginApiBuyer;
    	}
        APIService.axiosCall(api, {
            method: "POST",
            data: data,
            successCallBack: (resp: any) => handleResponse(resp),
            errorCallBack: (error: any) => loginError(error)
        });
    };
    const handleResponse = (response: any) => {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('isLogin', 'true');
        localStorage.setItem('userData', JSON.stringify(response.data));
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };
    const loginError = (error: any) => {
        setShowErrorMsg(true);
    };
    return (
        <div className="user-login">
         <h2 className="login-heading">
         	<IonIcon icon={personCircleOutline} size="large"></IonIcon>&nbsp;<span>Login</span>
         </h2>
         {showErrorMsg && <div className="login-error">
         <span>
         <IonIcon icon={alertCircleOutline} size="large"></IonIcon>
         </span>
         <span className="msg">
         	The username or password entered is incorrect. Please try again.
         </span>
         </div>}
         <Form fields= {loginData}
          formDataCallBack = {formDataCallBack}
           submitLabel="Login"
           formName="loginForm"
           formId="loginForm"
          />
    </div>
    );
};

export default Login;