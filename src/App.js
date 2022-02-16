import React, { useState } from 'react'
import { DataStore } from '@aws-amplify/datastore';
import Amplify from '@aws-amplify/core';

import logo from './logo.svg';
import './App.css';
import { Accounts } from './models';
import awsExports from "./aws-exports";

Amplify.configure(awsExports)

function App() {

  const [accounts, setAccounts] = useState([])

  const postAccount = async () => {
    await DataStore.save(
      new Accounts({
        "name": "Lorem ipsum dolor sit amet"
      })
    );
  }

  const getAccounts = async () => {
    const accounts = await DataStore.query(Accounts);
    setAccounts(JSON.stringify(accounts))
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={postAccount} > POST DEFAULT ACCOUNT </button>
        <button onClick={getAccounts} > GET ALL ACCOUNTS </button>
        <div>{accounts}</div>
      </header>
    </div>
  );

}

export default App;
