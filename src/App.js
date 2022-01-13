import React from "react";
import { useEffect, useState } from 'react';
import axiosUsers from './api/apiUsers'
import Grid from './components/Grid';
import './App.css'
import ModalForm from "./components/ModalEdit";
import { Form } from 'antd';
import Spinner from "./components/Spinner";

function App() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState({});

  useEffect(() => {
    setLoading(true);
    getData();
  }, []);

  async function getData() {
    const response = await axiosUsers.get(`/users`)
    setData(response.data)
    setLoading(false);
  }

  const handleLiked = (person) => {
    const newData = data.map((element) => {
      if (element.id === person.id) {
        if (!!element.liked)
          return { ...element, liked: !element.liked }
        return { ...element, liked: true }
      }
      return element
    })
    setData(newData)
  }

  const handleEdit = (person) => {
    setSelectedPerson(person)
    showModal(true);
  }

  const handleDelete = (person) => {
    const newData = data.filter((element) => (element.id !== person.id));
    setData(newData);
  }

  const showModal = (bool) => {
    setIsModalVisible(bool);
  };

  const handleFormSubmit = (values) => {
    const newData = data.map((element) => {
      if (element.id === values.id) {
        return { ...element, ...values }
      }
      return element
    })
    setData(newData)
    showModal(false);
  }

  const personList = selectedPerson;

  return (
    <>
      {loading && <Spinner />}
      {data && !loading && <Grid list={data} handleLiked={handleLiked} handleEdit={handleEdit} handleDelete={handleDelete} />}
      <Form.Provider
        onFormFinish={(name, { values, forms }) => {
          if (name === 'userForm') {
            handleFormSubmit(values)
          }
        }}
      >
        <ModalForm visible={isModalVisible} showModal={showModal} person={selectedPerson} />
      </Form.Provider>
    </>
  );

}

export default App;
