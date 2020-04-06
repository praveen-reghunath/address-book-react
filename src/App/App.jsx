import React, { Component } from 'react';
import style from './App.module.scss';
import ContactList from 'components/ContactList';
import ContactDetails from 'components/ContactDetails';
import LoadingAnimation from 'components/LoadingAnimation';

class App extends Component {

  componentDidMount() {
    this.props.getAllContacts();
  }

  render() {
    const { contacts, isLoading } = this.props;

    if (isLoading) {
      return <LoadingAnimation style={{ height: '100vh' }}></LoadingAnimation>;
    }

    return (
      <main className={style.App}>
        <div className={style.Container}>
          <ContactList />
          <ContactDetails />
        </div>
      </main>
    );
  }

}

export default App;
