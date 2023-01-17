import { Helmet } from 'react-helmet';
// меняем title на странице при переходе на другую при помощи библиотеки helmet
import { Controls } from '../features/controls/Controls';
import { CountryList } from '../features/countries/CountryList';

export const HomePage = () => {

  return (
    <>
      <Helmet>
        <title>Countries information list</title>
      </Helmet>
      <Controls />
      <CountryList />
    </>
  );
};
