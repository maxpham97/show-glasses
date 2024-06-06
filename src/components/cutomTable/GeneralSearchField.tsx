import React from 'react';
import { useSetCustomTableState } from '../../redux/customTable/customTableSlice';

const GeneralSearchField = () => {
  const customTableService = useSetCustomTableState();
  const searchRef = React.useRef<HTMLInputElement>(null);

  const handleAction = {
    search: () => {
      if (!searchRef.current) return;
      customTableService.setCustomTableState({ generalSearchField: searchRef.current.value });
    },
    reset: () => {
      if (!searchRef.current) return;
      searchRef.current.value = '';
      customTableService.setCustomTableState({ generalSearchField: undefined });
    },
    submit: (event: React.FocusEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (!searchRef.current) return;
      customTableService.setCustomTableState({ generalSearchField: searchRef.current.value });
    },
  };

  React.useEffect(() => {
    searchRef.current?.focus();
  }, []);
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <input ref={searchRef} />
        <button onClick={handleAction.search}>Search</button>
      </div>
      <button onClick={handleAction.reset}>Reset</button>
    </div>
  );
};

export default GeneralSearchField;
