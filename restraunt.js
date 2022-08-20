res=["text","date","time","number"]
instructions=["enter the name","enter date","enter time","no. of people"]
count=0
map=new Map()
bookings=[]
admin=undefined
var loops=document.getElementById('loops')
function login(){  
    loops.innerHTML=''
    var username=document.createElement('input')
    var pass=document.createElement('input')
    var send=document.createElement('button')
    var newUser=document.createElement('input')
    var text=document.createElement('p')
    text.innerHTML="new User"
    newUser.type='checkbox'
    send.innerHTML='SUBMIT'
    username.type='text'
    pass.type='password'
    username.placeholder='Username'
    pass.placeholder='password'
    loops.appendChild(username)
    loops.appendChild(pass)
    loops.appendChild(document.createElement('br'))
    loops.appendChild(newUser)
    loops.appendChild(text)
    loops.appendChild(send)
    send.addEventListener('click',()=>detailsValidator(newUser,username,pass))
}
function detailsValidator(checkBox,username,pass){
    if(!username.value||!pass.value){
        alert('you are required to provide an username and password')
        return
    }
    if (checkBox.checked){
        admin=username.value
         map.set(username.value,pass.value)
    }
    else{
       if (map.has(username)){
        if (map.get(username)!=pass){
            alert('wrong password')
            return
        }
        else{
            admin=usernmae.value
        }
       }else{
        alert('wrong username')
        return
       }
    
    
}
var Button=document.getElementById('loginButton')
loops.innerHTML=''
var displayName=document.getElementById('displayName')
displayName.innerHTML="Hello "+admin
Button.innerHTML='LOGOUT'
Button.onclick=()=>location.reload()

}
function cancel(){
    if (admin){
        map=new Map()
        alert('Sucessfully cancelled')
    }
    else{
        alert('login to cancel')
    }
}

function displayForm(){
    var inputBox=document.createElement('input')
    inputBox.type=res[count]
    inputBox.placeholder=instructions[count]
    var nextButton=document.createElement('button')
    nextButton.innerHTML="NEXT"
    loops.innerHTML=''
    loops.appendChild(inputBox)
    loops.appendChild(nextButton)
    nextButton.addEventListener('click',function(){if(inputBox.value){bookings.push(inputBox.value)}
    else{
        alert('fill all the details')
        return
    }
    count++
    if(count<res.length)
    {displayForm(count)}else{
        return
    }})
    
}
function submitDetails(){
    if (bookings.length==4){
    loops.innerHTML=''
    count=0
    map.set(bookings[0],bookings)
    localStorage.setItem(admin,map)
    alert('booked sucessfully')
    console.log(map)
    bookings=[]
    return
    }
    else{
        alert('provide all the details')
        return
    }
}
function tableFinder(){
time=$('input[type="time"]').val()
date=$('input[type="date"]').val()

}