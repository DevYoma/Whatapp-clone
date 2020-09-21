import React, { useEffect, useState } from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons';
import MicIcon from '@material-ui/icons/Mic';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import './Chat.css';

const Chat = () => {
    const [seed, setSeed] = useState("");
    const [input, setInput] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])


    const sendMessage = (e) => {
        e.preventDefault();
        console.log('You typed >>>>' + input);
    }

    return ( 
        <div className="chat">
            
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>

                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                    <p>Last seen at ...</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                {/* leaving it as true for now... if user is logged in, messages will be green... */}
                <p className={`chat__message ${true && `chat__receiver`}`}>
                  <span className="chat__name">Yoma</span>
                    Hey Guys
                  <span className="chat__timestamp">3:42pm</span>  
                </p>
                
            </div>

            <div className="chat__footer">
                <IconButton>
                    <InsertEmoticonIcon />
                </IconButton>

                <form>
                    <input type="text"  placeholder="Type a message" value={input} onChange={e => setInput(e.target.value)}/>
                    <button 
                    onClick={sendMessage}
                    >Send a message</button>
                </form>

                <IconButton>
                    <MicIcon />
                </IconButton>
            </div>

        </div>
     );
}
 
export default Chat;