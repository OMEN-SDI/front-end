import React, { useState, useContext } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import {AppContext} from './AppContext';
import {useNavigate} from 'react-router-dom';

export const DeleteMissionAlert = ({msn_id}) =>{
  const [show, setShow] = useState(false);
  const {setMissionsArray} = useContext(AppContext)
  console.log('delete mission alert msn_id:', msn_id);
  const navigate = useNavigate();

  const getMissionData = async () => {
    const res = await fetch("http://localhost:8080/missions");
    const data = await res.json();
    console.log(data);
    setMissionsArray(data);
  };

  return (
    <>
      <Alert show={show} variant="danger">
        <Alert.Heading>Are you sure?</Alert.Heading>
     
        <div className="d-flex justify-content-end">
          {/* <Button onClick={() => setShow(false)} variant="outline-success">
            Close
          </Button> */}
          <Button
            //   style={{ marginBottom: "2%", fontWeight: "bold" }}
              variant="outline-success"
            //   disabled={isLoading}
            //   size="lg"
              onClick={() => {
                console.log('delete button click')
                fetch(`http://localhost:8080/missions/${msn_id}`, {
                  method: 'DELETE',
                  headers: {
                    'Content-Type': 'application/json'
                  }
                })
                .then(res => res.json())
                .then(data => console.log(data))
                .then(() => getMissionData())
                .then(() => navigate('/userpage'))
              }
              }
            >
              Delete Mission
            </Button>
          <Button onClick={() => setShow(false)} variant="outline-success">
            No
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>Delete Mission</Button>}
    </>
  );
}

