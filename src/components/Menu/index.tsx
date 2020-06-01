import React from 'react';
import {
	IonContent, IonHeader,
	IonIcon,
	IonItem,
	IonLabel,
	IonList,
	IonMenu,
	IonMenuToggle,
	IonTitle,
	IonToolbar
} from '@ionic/react';
import {
	home,
	menu,
	documents,
	chatbubbles,
	hammer,
	calculator,
	people,
	chevronForward
} from 'ionicons/icons';

import './style.scss';

interface MenuItem {
  title: string;
	icon: string;
}

const menuItems: MenuItem[] = [
  {
    title: 'My Loan Status',
    icon: home,
  },
  {
    title: 'Loan Application',
    icon: menu,
  },
  {
    title: 'Documents',
    icon: documents,
  },
  {
    title: 'Messages',
    icon: chatbubbles,
  },
  {
    title: 'Mortgage Tools',
    icon: hammer,
  },
  {
    title: 'Calculators',
    icon: calculator,
  },
	{
    title: 'My Loan Team',
    icon: people,
  }
];

const Index: React.FC = () => {
  return (
    <IonMenu className="sidebar" side="start" content-id="main">
	    <IonHeader className="sidebar-header ion-no-border">
		    <IonToolbar>
			    <IonTitle className="sidebar-header__title">Navigation</IonTitle>
		    </IonToolbar>
	    </IonHeader>
	    <IonContent className="sidebar-content" id="main">
        <IonList className="sidebar-content-list">
          {menuItems.map((item, index) => {
            return (
            	<IonMenuToggle key={index}>
		            <IonItem className="sidebar-content-list-item">
			            <IonIcon className="sidebar-content-list-item__icon" icon={item.icon} />
			            <IonLabel className="sidebar-content-list-item__label">{item.title}</IonLabel>
			            <IonIcon icon={chevronForward} slot="end" />
		            </IonItem>
	            </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Index;
