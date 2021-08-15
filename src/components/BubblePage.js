import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import fetchColorService from '../services/fetchColorService';
import { axiosWithAuth } from "../helpers/axiosWithAuth";

const BubblePage = () => {
  const [colors, setColors] = useState([]);
  const [editing, setEditing] = useState(false);
  const { push } = useHistory();

  useEffect(() => {
    fetchColorService()
    .then(response => {
      setColors(response.data);
    })
    .catch(error => {
      console.log("Error fetching colors:", error)
    })
  }, [])

  const toggleEdit = (value) => {
    setEditing(value);
  };

  const saveEdit = (editColor) => {

    axiosWithAuth()
    .put(`/colors/${editColor.id}`, colors)
    .then(response => {
      setColors(response.data)
    })
    .catch(error => {
      console.log("Error saving edit", error)
    })
  };

  const deleteColor = (colorToDelete) => {
    axiosWithAuth()
    .delete(`/colors/${colorToDelete.id}`)
    .then(response => {
      setColors(colors.filter(color => color.id !== Number(response.id)))
    })
    .catch(error => {
      console.log("Deletion Error: ", error)
    })
  };

  return (
    <div className="container">
      <ColorList colors={colors} editing={editing} toggleEdit={toggleEdit} saveEdit={saveEdit} deleteColor={deleteColor}/>
      <Bubbles colors={colors}/>
    </div>
  );
};

export default BubblePage;

//Task List:
//1. When the component mounts, make an axios call to retrieve all color data and push to state.
//2. Complete toggleEdit, saveEdit, deleteColor and functions
