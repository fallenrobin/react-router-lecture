import React from 'react';
import { useHistory } from 'react-router-dom';

function Home() {

  const history = useHistory();

  const handleClick = () => {
    alert('you are headed to the zoo!');
    history.push('/animals');
  }

  return (
    <div>
      <h1>HOME</h1>
      <img src="https://pixy.org/download/4718707/" width={500} />
      <button onClick={handleClick}>go to ANIMALS</button>
    </div>
  );
}

export default Home;
