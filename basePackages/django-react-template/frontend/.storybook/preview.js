// See: https://storybook.js.org/docs/react/configure/story-layout

import React from "react";
import {addDecorator} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import StorybookLayout from './StorybookLayout';

export const parameters = {
    layout: 'fullscreen',
};

addDecorator(storyFn => <StorybookLayout>{storyFn()}</StorybookLayout>);
/*addDecorator(withInfo({
    inline: true,
    propTablesExclude: [Layout]
}));*/
