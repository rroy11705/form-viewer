import Panel from '../components/common/Panel';

export const renderElement = element => {
  console.log(element);
  switch (element.type) {
    case 'panel':
      return <Panel element={element} />;
    case 'text':
      return <div>{element.title}</div>;
    default:
      return null;
  }
};
