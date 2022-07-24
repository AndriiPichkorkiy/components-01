import { Marker } from "components/App"
import styled from "styled-components"



export default function Gallery({ logout, pictures = [] }) {

    return <>
        <button type="button" onClick={logout}>Close</button>
        <ul>{pictures?.map(({id,previewURL}) => {
        
            return <Item key={id}><Marker isDone="land"></Marker><img src={previewURL} alt={previewURL} /></Item>
        }  
        )}
      </ul></>

};

const Item = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
`

