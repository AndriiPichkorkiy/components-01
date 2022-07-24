export default function Gallery({logout,pictures=[]}){

    return <>
        <button type="button" onClick={logout}>Close</button>
        <ul>{pictures?.map(({id,previewURL}) => {
        
            return <li key={id}><img src={previewURL} alt={previewURL} /></li>
        }  
        )}
      </ul></>

};
