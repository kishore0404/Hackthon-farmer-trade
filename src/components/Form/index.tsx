import { useState } from 'react';
import { IonItem, IonLabel, IonInput, IonButton, IonIcon, IonRadio, IonRadioGroup, IonSelect, IonSelectOption, IonCheckbox, IonList } from '@ionic/react';
import { useForm } from 'react-hook-form';
import { alertCircleOutline } from "ionicons/icons";

import './form.css'

export const Form = ({ ...props }) => {
    const [formData, setFormData] = useState < Object > ({});
    const [selectedRadio, setSelectedRadio] = useState < string > ('');

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onTouched",
        reValidateMode: "onChange"
    });

    // const updateData = (data: any) => {
    //   setFormData({ [data.target.name]: data.target.value });
    // }

    // const updateCheckboxData = (data: any) => {
    //   setFormData({ [data.target.name]: [data.target.value] });
    //   console.log(data, formData);
    // }

    const onSubmit = (data: any) => {
        let finalData = { ...data, ...formData };
        props.formDataCallBack(finalData);
    }

    return ( <> 
      { props.title && <h3 className='x-15'> {props.title}</h3> } 
      { props.subContent && <div className='x-15'>{props.subContent}</div> }

        <form onSubmit={ handleSubmit(onSubmit) } className="forms">
        { props.fields.map((field: any, index: any) => {
          const { label, required, requiredOptions, props } = field;
          const labelPosition = props.labelPosition || "stacked";
          return (
            <IonItem key={ `form_field_${ index }` }>
                 {props.type === 'radio' &&
                  <IonRadioGroup className="radio-container" value={selectedRadio ? selectedRadio : props.selected} onIonChange={e => setSelectedRadio(e.detail.value)}>
                  <>
                    {label && <IonLabel className="space-20 transform-none" position="stacked">{ label } </IonLabel>}
                    { props.radioOptions.map((item: any, i: any) => {
                      return (
                        <IonItem key={`radio_field_${i}`}  lines='none'>
                          <IonLabel>{item}</IonLabel>
                          <IonRadio slot="start" value={item} { ...register(props.name, { required, ...requiredOptions }) }/>
                        </IonItem>
                      )
                    }) }
                    </>
                  </IonRadioGroup>
                }
                {props.type === 'select' &&
                  <>
                    {label && <IonLabel className="space-20" position="stacked">{ label } </IonLabel>}
                    <IonSelect key={props.type} placeholder="Select One" { ...register(props.name, { required, ...requiredOptions }) }>
                      { props.optionsData.map((item: any, s: any) => {
                        return (
                          <IonSelectOption key={`selectoption_${s}`} value={item.code}>{item.value}</IonSelectOption>
                        )
                      }) }
                    </IonSelect>
                  </>
                }
                {props.type === 'checkbox' &&
                  <>
                    {label && <IonLabel className="space-20" position="stacked">{ label } </IonLabel>}
                    { props.checkboxOptions.map((item: any, c: any) => {
                      return (
                          <IonList key={`checkbox_${c}`} className='radio-container' lines='none'>
                            <IonItem key={`checkbox_item_${c}`} class="ion-no-padding" lines='none'>
                              <IonLabel >{item}</IonLabel>
                              <IonCheckbox slot="start" key={`checkbox_${c}`} value={item} { ...register(props.name, { required, ...requiredOptions }) }/>
                            </IonItem>
                          </IonList>
                      )
                    }) }
                  </>
                }
                {props.type !== 'radio' && props.type !== 'select' && props.type !== 'checkbox' &&
                  <>
                    {label && <IonLabel className="space-20" position={labelPosition}>{ label } </IonLabel>}
                    <IonInput className='input-element' { ...props } { ...register(props.name, { required, ...requiredOptions }) } />
                  </>
                }
              { required && errors[props.name] && <IonIcon className="error-icon" icon={ alertCircleOutline } color="danger" /> }
            </IonItem>
          );
        })}

        <IonButton type="submit" className="ion-margin-top form-submit-btn" expand="full">{props.submitLabel}</IonButton>
      </form> 
      </>
    );
};