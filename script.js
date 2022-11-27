let id = 'no';
selectData();

function manageData() {
    document.getElementById('msg').innerHTML = '';
    let name = document.getElementById('name').value;
    if (name == '') {
        document.getElementById('msg').innerHTML = "please enter the name";
    } else {
        if (id == 'no') {
            let arr = JSON.parse(localStorage.getItem('crud'))
            if (arr == null) {
                let data = [name];
                localStorage.setItem('crud', JSON.stringify(data));
            } else {
                arr.push(name);
                localStorage.setItem('crud', JSON.stringify(arr));
            }
           
        }
        else{
            let arr = JSON.parse(localStorage.getItem('crud'));
            arr[id]=name;
            localStorage.setItem('crud', JSON.stringify(arr));
            document.getElementById('msg').innerHTML = "your data is updated";
        }
        document.getElementById('name').value = '';
    }
    selectData();
}

function selectData() {
    let arr = JSON.parse(localStorage.getItem('crud'))
    if (arr != null) {
        let html = '';
        let seno = 1;
        for (let k in arr) {
            html = html + `<div> <h1>${seno}</h1>
            <h2>${arr[k]}</h2>
            <a href="javascript:void(0)" onclick="Deletedata(${k})">Delete</a>
            <a href="javascript:void(0)" onclick="editdata(${k})">edit</a>
            </div>
            `;
            seno++;

        }
        document.getElementById('cona').innerHTML = html;
    }
}

function Deletedata(rig){
    let arr = JSON.parse(localStorage.getItem('crud'));
    arr.splice(rig,1);
    localStorage.setItem('crud', JSON.stringify(arr));
    selectData();
}


function editdata(rid){
    id=rid;
    let arr = JSON.parse(localStorage.getItem('crud'));
    let name=document.getElementById('name').value=arr[rid];

}