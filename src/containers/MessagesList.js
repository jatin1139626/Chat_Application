import {connect} from 'react-redux'
import MessagesListComponent from '../components/MesaagesList'


export const MessagesList=connect(state=>({
messages:state.messages
}),{})(MessagesListComponent)
