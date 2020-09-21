import React, { useEffect, useState } from 'react';
import { Avatar } from '@material-ui/core';
import './SidebarChat.css';

const SidebarChat = ({ addNewChat }) => {
    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])

    const createChat = () => {
        const roomName = prompt("Please Enter Chat Name");
        if(roomName){
            //database stuff
        }
    }

    return !addNewChat ? ( 
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className="sidebarChat__info">
                <h2>Group Name</h2>
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