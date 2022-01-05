
function getUsers(){
    fetch('http://localhost:5000/users')
        .then(res =>  res.json())
        .then(data => {
            var users = document.getElementById('users');
            users.innerHTML='';
            for( let i = 0; i < data.length; i++){
                let row = document.createElement('tr');

                let name = document.createElement('td');
                name.innerHTML = data[i].user_name;
                row.appendChild(name);
                
                let email = document.createElement('td');
                email.innerHTML = data[i].email;
                row.appendChild(email);
                users.appendChild(row);
            }
        })

}
getUsers();

let addUserForm = document.getElementById("addUser");
 addUserForm.onsubmit = async function(e){
    e.preventDefault();
    let jsUserForm= new FormData(addUserForm);
    response = await fetch("http://localhost:5000/create/user", { method :'POST', body : jsUserForm});
    data = await response.json() ;
    // console.log("Before the if statement" );
    // console.log(data);
    // console.log(data['message']) ;
    if (data['message'] =='Add a user!!!'){
        addUserForm.children[2].value=''
        addUserForm.children[6].value=''
    }
    getUsers()
}