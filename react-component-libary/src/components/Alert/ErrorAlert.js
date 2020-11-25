import React from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';

const ErrorAlert = ({ alertMesage }) => {
  return (
    <Alert>
      <h1>
        {alertMesage}
      </h1>
    </Alert>
  );
}

const Alert = styled.div`
 position: relative;
 width: 90%;
 padding: 10px;
 margin: 0 0 20px;
 color: white;
 background-color: #FF8A80;
 text-align: center;
 border-radius: 4px
`
ErrorAlert.propTypes = {
 alertMesage: PropTypes.string
}

export default ErrorAlert;
