import ItemsContextProvider from './store/items-context';
import NewItem from './components/NewItem';
import Items from './components/Items';
import Layout from './components/layout/Layout';

const App = () => {
  return (
    <ItemsContextProvider>
      <Layout>
        <NewItem />
        <Items />
      </Layout>
    </ItemsContextProvider>
  );
};

export default App;
