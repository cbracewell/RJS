import * as React from 'react';
import { Header } from 'semantic-ui-react';

export default {
  TitleField: ({ required, title }: any) => {
    const legend = required ? title + '*' : title;
    return <Header displayLabel={false} size="large">{legend}</Header>;
  },
  CustomDescriptionField: ({ id, description }: any) => <p id={id}>{description}</p>
};
