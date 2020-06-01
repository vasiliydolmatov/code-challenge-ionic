import React from 'react';
import {
	IonPage,
	IonLabel,
	IonInput,
	IonButton
} from '@ionic/react';

import './style.scss';

const Login: React.FC<{ onLogin: Function }> = (props)=> {
	const onClickLogin = (e: any) => {
		e.preventDefault();
		props.onLogin();
	};
	
	return (
		<IonPage color="light" className="login">
			<div className="login-header">
				<span className="login-header__brand">LHP mortgage</span>
				<span className="login-header__title">Hello!</span>
				<span className="login-header__desc">Let's login and review your loan info...</span>
			</div>
			<div className="login-form">
				<div className="login-form-item">
					<IonLabel className="login-form__label" position="stacked">Email</IonLabel>
					<IonInput className="login-form__input" placeholder="Enter Your Email" />
				</div>
				<div className="login-form-item">
					<IonLabel className="login-form__label" position="stacked">Password</IonLabel>
					<IonInput className="login-form__input" placeholder="Enter Your Password" />
				</div>
				<div className="login-form-item">
					<IonButton size="large" onClick={onClickLogin} expand="block">Login</IonButton>
				</div>
			</div>
		</IonPage>
	);
};

export default Login;
