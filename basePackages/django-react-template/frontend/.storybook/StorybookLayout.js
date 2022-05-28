import React from 'react';
import {MemoryRouter} from "react-router";
import '../src/i18n'

const StorybookLayout = ({children}) => {
    return (
        <MemoryRouter initialEntries={['/']}>
            {children}
        </MemoryRouter>
    )
}

export default StorybookLayout;
