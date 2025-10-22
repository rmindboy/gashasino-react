import React from 'react';

//Luciano Toledo Gutierrez

describe('App Component', () => {
it('should render without crashing', () => {
    const element = <div>Hello React</div>;
    expect(element.props.children).toBe('Hello React');
});
it('debe renderizar un h1', () => {
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
});

it('debe renderizar un botón', () => {
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
});
});
