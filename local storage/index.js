const id="123";
const user={
    name:'Max',
    age:30,
    hobbies:['sports','cooking']
};
  const storeBtn=document.getElementById('store-btn');
  const retrieveBtn=document.getElementById('retrieve-btn');
  storeBtn.addEventListener('click',()=>{
    localStorage.setItem("uid",id);
    localStorage.setItem('user',JSON.stringify(user));
  })
  
  retrieveBtn.addEventListener('click',()=>{
    const exid=localStorage.getItem('uid');
    const exuser=JSON.parse(localStorage.getItem('user'));
    if(exid)
    {
        console.log("Got the exact id",exid);
        console.log("Got the exact user",exuser);
    }
    else
    {
        console.log("Couldn't find the id"); 
    }
  })

   
    