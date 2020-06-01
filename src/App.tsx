import Profile from './pages/Profile';
import Login from './pages/Login';
import React, { useCallback, useState } from 'react';
import {
	IonApp,
	IonToast
} from '@ionic/react';

import '@ionic/react/css/core.css';

import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import './theme/variables.css';

import './assets/fonts/cabin/Cabin-Font.css';
import './App.scss';

const App: React.FC = () => {
	const [isAuthorized, setIsAuthorized] = useState(false);
	const [showToast, setShowToast] = useState(false);
	const [textToast, setTextToast] = useState('');
	
	const clearToast = () => {
		setShowToast(false);
		setTextToast('')
	};
	
	const authorize = () => {
		setIsAuthorized(true)
	};
	
	const logout = useCallback((message: string) => {
		if (message) {
			setTextToast(message);
			setShowToast(true);
		}
		setIsAuthorized(false)
	}, []);
	
  return (
    <IonApp>
	    {isAuthorized
		    ? <Profile onLogout={logout}/>
				: <Login onLogin={authorize} />
	    }
	    <IonToast
		    animated
		    isOpen={showToast}
		    onDidDismiss={clearToast}
		    message={textToast}
		    duration={2000}
	    />
    </IonApp>
  );
};

export default App;
