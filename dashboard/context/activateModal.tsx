import React, { Dispatch, useContext, useState, SetStateAction } from 'react';

type ActiveModalReturn = {
  changePage: boolean;
  setChangePage: Dispatch<SetStateAction<boolean>>;
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  id: number;
  setId: Dispatch<SetStateAction<number>>;
};

const ActivateModalContext = React.createContext<ActiveModalReturn>({} as ActiveModalReturn);

const ActivateModal = ({ children }) => {
  const [changePage, setChangePage] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [id, setId] = useState<number>(0);

  return (
    <ActivateModalContext.Provider value={{ changePage, setChangePage, name, setName, id, setId }}>
      {children}
    </ActivateModalContext.Provider>
  );
};

export const useActivateModal = () => useContext(ActivateModalContext);
export default ActivateModal;
