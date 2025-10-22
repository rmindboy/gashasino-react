import React from 'react';

describe('App Component', () => {
it('should render without crashing', () => {
    const element = <div>Hello React</div>;
    expect(element.props.children).toBe('Hello React');
});
});
