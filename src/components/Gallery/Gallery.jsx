import { Button, Ul, Item, Marker } from "./Gallery.styles"

export default function Gallery({ logout, pictures = [] }) {

    return <>
        <Button type="button" onClick={logout}>Close</Button>
        <Ul>{pictures?.map(({id,previewURL}) => {
            return <Item key={id}>
                <Marker isDone="land">
                    <img src={previewURL} alt={previewURL}/>
                </Marker>
                
            </Item>
        }  
        )}
      </Ul></>
};



