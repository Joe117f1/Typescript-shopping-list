import React, { useState } from 'react';
import Item from '../models/Item';

type ItemContextObj = {
  items: Item[];
  addItem: (item: string) => void;
  removeItem: (id: string) => void;
};

export const ItemsContext = React.createContext<ItemContextObj>({
  items: [],
  addItem: () => {},
  removeItem: (id: string) => {},
});

const ItemsContextProvider: React.FC = (props) => {
  const [items, setItems] = useState<Item[]>([]);

  const addItemHandler = (item: string) => {
    const newItem = new Item(item);
    setItems((prevItems) => {
      return prevItems.concat(newItem);
    });
  };

  const removeItemHandler = (itemId: string) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== itemId);
    });
  };

  const contextValue: ItemContextObj = {
    items: items,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <ItemsContext.Provider value={contextValue}>
      {props.children}
    </ItemsContext.Provider>
  );
};

export default ItemsContextProvider;
