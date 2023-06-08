import React, { useEffect } from 'react';

const Home = () => {

    useEffect(()=>{
        fetch('http://localhost:5000/users')
        .then(res=> res.json)
        .then(data=> console.log(data))
        .catch(err=> console.log(err));

    },[]);

    return <div>

    </div>;
}

export default Home;