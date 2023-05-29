//Converting callback function to async

console.log('Before');
// getUser(1, function(user){
//     console.log('User', user);
//     getRepositries(user.githubusername, (repos) =>{
//         console.log('Repos', repos);
//     })
// })

// console.log(user);

console.log("after");


async function notifycustomer(){
    const customer = await getUser(1);
console.log("customer", customer);
}

notifycustomer();


function getUser(id){
   return  new Promise((resolve, reject) =>{
    setTimeout(()=> {
        resolve(['movie1', 'movie2']);
        
    }, 2000)
   })
   
}

function getRepositries(id, callback){
    setTimeout(()=> {
        console.log("Reading a user from a database");
        callback(['repo1', 'repo2', 'repo3'])
    }, 2000)
    return 1;
}

async function notifycustomer(){
    const customer = await getUser(id);
console.log("customer", customer);
}
