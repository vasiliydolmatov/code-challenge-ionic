import React, { useEffect, useState } from 'react';
import {
	IonButton,
	IonButtons,
	IonContent,
	IonHeader,
	IonIcon,
	IonMenuButton,
	IonPage,
	IonSkeletonText,
	IonTitle,
	IonToolbar
} from "@ionic/react";
import {
	settings,
	calculator,
	chatbubbles,
	folderOpen,
	phonePortrait,
	document,
	addCircle
} from "ionicons/icons";
import axios from 'axios';

import Menu from '../../Menu';
import './style.scss'

interface ActionItem {
	icon: string
}

const actionItems: ActionItem[] = [
	{ icon: chatbubbles },
	{	icon: calculator },
	{ icon: document },
	{ icon: folderOpen },
	{	icon: phonePortrait }
];

interface User {
	firstname: string,
	lastname: string,
	nmls: number,
	avatar_url: string
}

const Home: React.FC<{ onLogout: Function }> = ({ onLogout }) => {
	const [user, setUser] = useState<User>({ firstname: '', lastname: '', nmls: 0, avatar_url: '' })
	
	useEffect(() => {
		axios.get('https://lhp-forms.lenderhomepage.com/api/code-challenge/loan-officers/1')
			.then(res => {
				setUser(res.data)
			}).catch(err => {
				console.warn(err);
				onLogout('Something went wrong while fetching user data');
			});
		return () => {
			setUser({ firstname: '', lastname: '', nmls: 0, avatar_url: '' })
		}
	}, [onLogout])
	
	return (
		<IonPage className="home">
			<Menu />
			<IonHeader className="ion-no-border home-header">
				<IonToolbar className="home-header-toolbar">
				 <IonButtons slot="start">
					 <IonMenuButton />
				 </IonButtons>
				 <IonButtons slot="primary">
				   <IonButton onClick={() => onLogout('')}>
					   <IonIcon icon={settings} />
				   </IonButton>
				 </IonButtons>
				 <IonTitle>LHP Mortgage</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent className="home-content">
				<div className="home-content-header">
					{user.firstname
						? <span className="home-content-header__fullname">{`${user.firstname} ${user.lastname}`}</span>
						: <IonSkeletonText className="home-content-header__fullname" animated style={{ width: '40%' }} />
					}
					{user.nmls
						?	<span className="home-content-header__code">NMLS #{user.nmls}</span>
						: <IonSkeletonText className="home-content-header__code" animated style={{ width: '20%' }} />
					}
					{/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
					<img alt={user.firstname} className="home-content-header__photo" src={user.avatar_url} />
				</div>
				<div className="home-actions">
					{actionItems.map((action, index) => (
						<div key={index} className="home-actions__icon">
							<IonIcon icon={action.icon} />
						</div>
					))}
				</div>
				<div className="home-suggestions">
					<div className="home-suggestions-item">
						<span className="home-suggestions-item__title">Next step:</span>
						<IonIcon className="home-suggestions-item__icon" icon={addCircle} />
						<span className="home-suggestions-item__label">Upload Documents</span>
					</div>
				</div>
			</IonContent>
		</IonPage>
	);
};

export default Home;
