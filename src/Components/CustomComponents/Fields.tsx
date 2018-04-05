import * as React from 'react';

export default {
  TitleField: ({ required, title }: any) => {
    const legend = required ? title + '*' : title;
    return <h2>{legend}</h2>;
  },
  CustomDescriptionField: ({ id, description }: any) => <p id={id}>{description}</p>
};
