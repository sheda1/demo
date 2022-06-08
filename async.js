
/*
//wihout async
console.log('person1 : shows ticket');
console.log('person2 : shows ticket')

const preMovoie = async() => {
    const promiseFriemdBringTicket = new Promise ((res ,rej) => {
        setTimeout(() => {
            res('ticket');
        },3000);
    });
    const getPopcorn = new Promise((res,rej) => res ('popcorn'));
   
    const getButter =  new Promise((res,rej) => res('butter'));
//Now create a new promise called getColdDrinks which come after husband gets butter. Integrate the code in both async and await and also promises' code
    const getColdDrinks = new Promise((res, rej) => res('Cold Drinks'));
    
    let ticket = await promiseFriemdBringTicket;
        console.log('friend : we  should go ib');
        console.log('me: no i am hungry');
    let popcorn = await getPopcorn;
        console.log('friend : we  should go ib');
        console.log('me: no i need butter');
    let butter = await getButter;
    console.log(`friend: now we have ${butter} on ${popcorn}`) 
    let drinks = await getColdDrinks;
    console.log(`finally we have ${drinks} too`);   
    return ticket;
}
preMovoie().then((m) => console.log(`person3: shows ${m}`));


console.log('person4 : shows ticket')
console.log('person5 : shows ticket')

/*


const getButter = getPopcorn.then((t) => {
    console.log('friend : we  should go ib');
    console.log('me: no i need butter');
    return new Promise((res,rej) => res(`${t} butter`));
});


getButter.then((t) => console.log(t));*/
//async always return a promise

//promise all
console.log('person1 : shows ticket');
console.log('person2 : shows ticket')

const preMovoie = async() => {
    const promiseFriemdBringTicket = new Promise ((res ,rej) => {
        setTimeout(() => {
            res('ticket');
        },3000);
    });
    const getPopcorn = new Promise((res,rej) => res ('popcorn'));
   
    const getCandy =  new Promise((res,rej) => res('candy'));
    const getCoke =  new Promise((res,rej) => res('coke'));
//Now create a new promise called getColdDrinks which come after husband gets butter. Integrate the code in both async and await and also promises' code
    const getColdDrinks = new Promise((res, rej) => res('Cold Drinks'));
    
    let ticket = await promiseFriemdBringTicket;
        
    let [popcorn, candy,coke] = await Promise.all([getPopcorn,getCandy,getCoke]);
    console.log(`${popcorn},${candy},${coke}`);
        return ticket;
  
}
preMovoie().then((m) => console.log(`person3: shows ${m}`));


console.log('person4 : shows ticket')
console.log('person5 : shows ticket')






    

    
