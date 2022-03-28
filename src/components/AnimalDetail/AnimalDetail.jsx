import { useParams } from 'react-router-dom';

function AnimalDetail() {
    //this matches the :id
    //if it were :taco in the route then 
    // const { taco }
    const { id } = useParams();

    return (
        <h1>🦑🦑🦑 {id}</h1>
    )
}

export default AnimalDetail;