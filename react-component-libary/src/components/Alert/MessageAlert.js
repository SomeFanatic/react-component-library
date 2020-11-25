import React from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';

const MessageAlert = ({ alertMesage }) => {
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
 background-color: #03A9F4;
 text-align: center;
 border-radius: 4px
`
MessageAlert.propTypes = {
 alertMesage: PropTypes.string
}

export default MessageAlert;
