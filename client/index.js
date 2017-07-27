import React from 'react';
import ReactDOM from 'react-dom';
import ContactsList from './components/ContactsList.jsx';

let contacts = [{
  id: 1,
  name: 'Scott',
  number: '555 333 5555'
},
{
  id: 2,
  name: 'Kirsty',
  number: '111 222 3333'
},
{
  id: 3,
  name: 'Dawn',
  number: '444 555 6666'
},
{
  id: 4,
  name: 'Craig',
  number: '777 888 9999'
}]

class App extends React.Component {
  render() {
    return(
      <div>
        <h1>Contacts List</h1>
        <ContactsList contacts={this.props.contacts}/>
      </div>
    )
  }
}

ReactDOM.render(<App contacts={contacts} />, document.getElementById('root'));
