import Enzyme, {shallow} from 'enzyme';
import React, {PureComponent} from 'react';
import Adapter from 'enzyme-adapter-react-15';
import keydown from 'react-keydown';

Enzyme.configure({adapter: new Adapter()});


class MyComponent extends PureComponent {
	static displayName = 'MyComponent';

	constructor (props) {
		super(props);

		this._handleClick = this._handleClick.bind(this);
	}

	render () {
		return <div onClick={this._handleClick} />;
	}

	// NOTE: Commenting out the next line fixes the issue
	@keydown('enter')
	_handleClick () {
		console.log('do something')
	}
}


describe('Example', () => {
	it('should be able to render', () => {
		expect(() => {
			shallow(<MyComponent />);
		}).not.toThrow();
	});
});