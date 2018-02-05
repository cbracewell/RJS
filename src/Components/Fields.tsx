import * as React from 'react';
import { Header } from 'semantic-ui-react';

export default {
  TitleField: (props: any) => {
    console.log('title', props);
    const { required, title } = props;
    const legend = required ? title + '*' : title;
    return <Header displayLabel={false} size="large">{legend}</Header>;
  },
  CustomDescriptionField: (props: any) => {
    const {id, description} = props;
    console.log('desc', props);
    return <p id={id}>{description}</p>;
  }
};
