import React from 'react';
import './App.css';
import {Sidebar} from './containers/Sidebar'
import {AddMessage} from './containers/AddMessage'
import {MessagesList} from './containers/MessagesList'

class App extends React.Component{
  render(){
    return(
      <div id="container">
{/* <aside id="sidebar">Users</aside> */}
<Sidebar/>
<section id="main">
  <MessagesList/>
  <AddMessage/>
  {/* <section id="messages-list">Message List </section>
  <section id="new-message">New Message</section> */}
</section>
      </div>
    )
  }
}
export default App;
 