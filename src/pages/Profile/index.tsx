import React from 'react';
import {
	IonIcon,
	IonTabButton,
	IonLabel,
	IonTabBar,
	IonTabs,
	IonRouterOutlet
} from '@ionic/react';
import { Redirect, Route } from 'react-router';
import { IonReactRouter } from "@ionic/react-router";
import {
	home,
	statsChart,
	flash
} from 'ionicons/icons';

import HomeTab from '../../components/ProfileTabs/Home';
import CalculateTab from '../../components/ProfileTabs/Calculate';
import './style.scss';

const Profile: React.FC<{ onLogout: Function }> = ({ onLogout }) => {
  return (
	  <IonReactRouter>
		  <IonTabs>
	      <IonRouterOutlet>
		      <Route path="/profile/home" render={() => <HomeTab onLogout={onLogout}/>} exact />
		      <Route path="/profile/calculate" render={() => <CalculateTab />} exact />
		      <Redirect exact path="/" to="/profile/home" />
	      </IonRouterOutlet>
	      <IonTabBar className="tab-bar" slot="bottom">
		      <IonTabButton className="tab-button" tab="home" href="/profile/home">
			      <IonIcon className="tab-button__icon" icon={home} />
			      <IonLabel>Home</IonLabel>
		      </IonTabButton>
		      <IonTabButton className="tab-button" tab="calculate" href="/profile/calculate">
			      <IonIcon className="tab-button__icon" icon={statsChart} /> 
			      <IonLabel>Calculate</IonLabel>
		      </IonTabButton>
		      <IonTabButton className="tab-button" tab="app" href="/profile/app">
			      <IonIcon className="tab-button__icon" icon={flash} />
			      <IonLabel>Application</IonLabel>
		      </IonTabButton>
	      </IonTabBar>
      </IonTabs>
	  </IonReactRouter>
  );
};

export default Profile;