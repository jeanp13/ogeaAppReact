import { IonContent, IonHeader, IonImg, IonPage } from "@ionic/react";
import "./style.css";

import logoImg from "../../assets/logo.svg";

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonImg src={logoImg}></IonImg>
      </IonHeader>
      <IonContent fullscreen></IonContent>
    </IonPage>
  );
};

export default Login;
