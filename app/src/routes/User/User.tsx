/* --- Resources --- */
import './User.scss';

/** Interfaces */
// import { IRootState } from 'REDUCERS/root/init';

/* --- Modules --- */
import { connect } from 'react-redux';

import * as React from 'react';
import { RouteProps } from 'react-router';

interface IReceivedProps extends RouteProps {
	/** Received Props go here */
    testProp: string;
}

interface IStateProps {
	/** mapStateToProps values go here */
}

interface IDispatchProps {
	/** mapDispatchToProps methods go here */
}

type TProps = IStateProps & IDispatchProps & IReceivedProps;

/** [ClassDescription] */
class User extends React.Component<TProps, {}> {

	constructor(props: TProps) {
		super(props);
	}

	render () {
		return (
			<div>
				<h1>User Route</h1>
			</div>
		);
	}
}

const mapStateToProps = (state): IStateProps => ({
	/** Redux Selectors for data go here */
});

const mapDispatchToProps = (dispatch): IDispatchProps => ({
	/** Redux Dispatch methods go here */
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
