import React,{useState} from 'react';
import NoteContext from './NoteContext';

const NoteState = (props) => {
    const [userId, setUserId] = useState(()=>{
        const storedId = JSON.parse(localStorage.getItem("id"));
        return storedId || '.';
    });
    const [mainRes, setMainRes] = useState(()=>{
        const storedRes =  JSON.parse(localStorage.getItem("res"));
        return storedRes || [] ;
    });
    return (
        <NoteContext.Provider value={{ userId, setUserId,mainRes,setMainRes }}>
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState;
