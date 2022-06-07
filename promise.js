const posts = [
    { title : 'post one' , body : 'This is post one',lastactivityTime : '13 Jan'},
    { title : 'post two' , body : 'This is post two',lastactivityTime : '13 Jan'},
    { title : 'post three' , body : 'This is post three',lastactivityTime : '13 Jan'}
];


function getPosts(){
    
    setTimeout(() => {
        let output = '';
        posts.forEach((post) =>{
            output += `<li>${post.title} ${post.lastactivityTime}</li>`
        });
        document.body.innerHTML = output;
    },1000);
}


function createPost(post){
    return new Promise((resolve , reject) =>{
        setTimeout(() => {
          //  posts.push(post);
            const error = false;
            if( !error ){
                resolve(  posts.push(post));
            }else {
                reject('Error occured');
            }
            
        },2000);
    })
    
}

//Create a new function called delete post which uses promises and deletes in 1 second (processing time - mimic it with setimeout). 
//Everytime you call it, it should delete the last element of the array
function deletePost(){
return new Promise ( (res, rej) => {
    setTimeout( () => {
       
        if(posts.length !== 0){
            res( posts.pop());
        }else{
            rej('Array is empty now');
        }
       
    },1000);
});
}

function updateLastUserActivityTime(){
    return new Promise((res,rej) => {
        setTimeout(()=>{
            posts.lastactivityTime = new Date().getTime();
            res(posts.lastactivityTime);
        },1000);
    });
}

/*createPost({ title : 'post four' , body : 'This is post four',lastactivityTime: '12 feb'});
Promise.all([createPost,updateLastUserActivityTime]).then((values) => {
    console.log(values);
})
/*

getPosts();
Promise.all([createPost,updateLastUserActivityTime]).then(([createPostres,updateLastUserActivityTimeresolve]) => {
    console.log(updateLastUserActivityTimeresolve)
});
*/

/*
createPost({ title : 'post four' , body : 'This is post four'})
.then(() =>{
    getPosts();
    deletePost().then(() => {
        getPosts()
    }).catch(err => console.log(err))
}).catch(err => console.log(err));
*/
/*
//Continue deleting the elements up till all the elements are deleted from the array.
// Now when you delete again an error would be thrown , catch the error and console log in the browser-> Array is empty now
createPost({ title : 'post four' , body : 'This is post four'})
.then(() =>{
    getPosts();
    for(let i = 0; i <= posts.length; i++)
    deletePost().then(() => {
        getPosts()
    }).catch(err => console.log(err))
}).catch(err => console.log(err));
*/
/*
//Try creating a post and deleting at the same time, how would you do it
createPost({ title : 'post four' , body : 'This is post four'}).then(deletePost).catch(err => console.log(err))
.then(getPosts);
*/
/*
//promise all
const promise1 = Promise.resolve('Hello wolrld');
const promise2 = 10;
const promise3 = new Promise((res,rej) => 
setTimeout(res,2000,'goodBYe'));
const promise4 = fetch('')
Promise.all([promise1,promise2,promise3]).then((values) => console.log(values));
*/
