export const getTest = async ()=>{
    try {
        const res=await fetch('http://localhost:8080/test',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
            },
        });
        return res.json();
    }catch(err){
        console.log(err);
    }
};