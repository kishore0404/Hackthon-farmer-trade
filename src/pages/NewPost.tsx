import React, { useState } from 'react';
import {Form} from '../components/Form';
import { alertCircleOutline } from "ionicons/icons";
import { IonIcon, IonToast } from '@ionic/react';

const NewPost: React.FC = () => {
    const [showErrorMsg, setShowErrorMsg] = useState(false);
    const [showToast, setShowToast]= useState(false);
    const [registrationData, setRegistrationData] = useState<Object>({});
    // const password = useRef({});
      const formData = [
      {
        label: "Description",
              required: true,
              props: {
                  name: "description",
          type: "text",
          maxLength: 30
          }
      },
      {
              label: "Product *",
              required: true,
              props: {
                  name: "product",
          type: "select",
          optionsData : [
            {value: 'Grain'},
            {value: 'Nuts'},
          ]
              }
          },
      {
              label: "Category",
        required: true,
              props: {
                  name: "category",
          type: "select",
          optionsData : [
            {value: 'Rice'},
            {value: 'Corn'},
            {value: 'Almonds'},
            {value: 'Cashew'},
          ]
              }
          },
          {
              label: "Variety",
        required: true,
              props: {
                  name: "variety",
          type: "text",
              }
          },
          {
              label: "Weight",
        required: true,
              props: {
                  name: "weight",
          type: "text",
              }
          },
          {
              label: "Weight Unit",
        required: true,
              props: {
                  name: "weightUnit",
          type: "text",
              }
          },
          {
              label: "Price Per Weight",
        required: true,
              props: {
                  name: "pricePerWeight",
          type: "text",
              }
          },
          {
              label: "Crop Year",
        required: true,
              props: {
                  name: "cropYear",
          type: "text",
              }
          },
          {
              label: "Mobile Number *",
              required: true,
              props: {
                  name: "mobile_number",
          type: "tel",
          maxLength: 13
              }
          },
          {
              label: "Alternate Mobile Number *",
              required: true,
              props: {
                  name: "alternate_mobile_number",
          type: "tel",
          maxLength: 13
              }
          },
          {
              label: "Address *",
              required: true,
              props: {
                  name: "address",
          type: "text",
          maxLength: 200
              }
          },
      {
              label: "Zip Code *",
              required: true,
              props: {
                  name: "postal_code",
          maxLength: 8
              }
          },
      {
              label: "Country",
        required: true,
              props: {
                  name: "country",
          type: "select",
          optionsData : [
            {'code': 'CA', value: 'Canada'},
            {'code': 'US', value: 'United States'},
            {'code': 'IN', value: 'India'},
            {'code': 'MX', value: 'Mexico'},
          ]
          }
          },
      ];
  
  
    return (
       <div className='register-page'>
          <Form
            fields= {formData}
            submitLabel="Post"
          />
      </div>
    );
}

export default NewPost
