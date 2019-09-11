var io = require('socket.io');
let connectedUser = {};
require('./events')
module.exports = function(socket){
    console.log('Socket Id:'+ socket.id);

    socket.on(VERIFY_USER, (nickname,callback)=>{
        if(isUser(connectedUser, nickname)){
            callback({ isUser:true, user:null })
        }
        else{
            callback({ isUser:false, user:createUser({name:nickname}) })
        }
    })

    socket.on(USER_CONNECTED,(user)=>{
        connectedUser = addUser(connectedUser,user)
        socket.user = user
        io.emit(USER_CONNECTED, connectedUser)
        console.log(connectedUser)
    })

    socket.on(MESSAGE_SENT,(user)=>{
        connectedUser = addUser(connectedUser,user)
        socket.user = user
        console.log(connectedUser)
    })

    function messageSent(user,message){
        let newList = Object.assign({},userList)
        newList[username] = user
        return newList
    }

    function addUser(userList,user){
        let newList = Object.assign({},userList)
        newList[username] = user
        return newList
    }

    function removeUser(userList,username){
        let newList = Object.assign({},userList)
        delete newList[username]
        return newList
    }


    function isUser(userList,username){
        return username in userList;
    }

}