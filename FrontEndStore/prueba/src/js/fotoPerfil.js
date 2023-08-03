async function getData(){
    const res = await fetch("http://localhost:3000/upload");
    const photo = await res.json();
    console.log(photo);
};

getData();
