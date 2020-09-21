import React, { useEffect, useState } from 'react';
import { Avatar } from '@material-ui/core';
import './SidebarChat.css';
import db from '../Firebase/Firebase';

const SidebarChat = ({ addNewChat, id, name }) => {
    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])

    const createChat = () => {
        const roomName = prompt("Please Enter a name for chat room");
        if(roomName){
            //database stuff
            //add the created room to the collection....
            db.collection('rooms').add({
                name: roomName
            })
        }
    }

    return !addNewChat ? ( 
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className="sidebarChat__info">
                <h2>{name}</h2>
                <p>Last message...</p>
            </div>
        </div>
     ) : (
             <div className="sidebarChat" onClick={createChat}>
                 <h2>Add new Chat</h2>
             </div>
     );
}
// connect dicebear Avatars to the project....
 
export default SidebarChat;