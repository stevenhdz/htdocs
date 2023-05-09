import React, { useState, useContext } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import { TitleContext } from "../../provider/titleContext"
import { useTranslation } from 'react-i18next';

export const MyTableComponent = ({ data, handleDelete, handleEdit, idField, Fields, handleMultipleDelete }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const { t } = useTranslation();


  const title = useContext(TitleContext);
  const handleItemSelect = (itemId) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter((id) => id != itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  const handleDeleteSelected = () => {
    handleMultipleDelete(selectedItems);
    setSelectedItems([]);
  };

  return (
    <div className="table-responsive">
              {/*   {title} */}
    <table className="table table-striped">
      <thead>
        <tr>
        <th>
              <input
                type="checkbox"
                checked={selectedItems.length == data.length}
                onChange={() => {
                  if (selectedItems.length == data.length) {
                    setSelectedItems([]);
                  } else {
                    setSelectedItems(data.map((provider) => provider[idField]));
                  }
                }}
              />
            </th>
         {/*  <th>{t(idField)}</th> */}
          {Fields.map((e) => (
            <th>{t(e)}</th>
          ))}
          <th style={{width: "100%"}}>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {data.map((provider) => (
          <tr key={provider[idField]}>
            <td>
                <input
                  type="checkbox"
                  checked={selectedItems.includes(provider[idField])}
                  onChange={() => handleItemSelect(provider[idField])}
                />
              </td>
            {/* <td>{provider[idField]}</td> */}
            {Fields.map((e) => (
              <td>{provider[e] === true ? "Funcionando" : provider[e] === false ? "Malo" : provider[e]}</td>
            ))}
            <td>
              <button
                type="button"
                className="btn btn-warning btn-sm"
                onClick={() => handleEdit(provider)}
              >
                <UpdateIcon />
              </button>
              &nbsp;
              <button
                type="button"
                className="btn btn-danger btn-sm"
                onClick={() => handleDelete(provider[idField])}
              >
                <DeleteIcon />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    {selectedItems.length > 0 && (
        <div>
          <button
            type="button"
            className="btn btn-danger btn-sm"
            onClick={handleDeleteSelected}
          >
            <DeleteSweepIcon />
          </button>
        </div>
      )}
    </div>
  );
};