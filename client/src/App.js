import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import PrivateRoute from './hoc/PrivateRoute';
import Loader from './components/Loader/loader';

import './bootstrap.min.css';
import './App.css';

const Home = lazy(() => import('./views/Home'));
const Register = lazy(() => import('./views/Login/Register'));
const Login = lazy(() => import('./views/Login/Login'));
const Product = lazy(() => import('./views/Product'));
const Order = lazy(() => import('./views/Order/Order'));

const App = (props) => {
	return (
		<BrowserRouter>
			<>
				<Navbar />
				<Suspense fallback={<Loader />}>
					<Switch>
						<Route exact path={'/register'} component={Register} />
						<Route exact path={'/login'} component={Login} />
						<PrivateRoute path={'/product/:id'} component={Product} />
						<PrivateRoute exact path={'/order'} component={Order} />
						<PrivateRoute path={'/'} component={Home} />
					</Switch>
				</Suspense>
			</>
		</BrowserRouter>
	);
};

export default App;
// export default connect(mapStateToProps , mapDispatchToProp , null )(App)
