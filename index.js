window.onload =function () {
      task = document.getElementById('task');
      add = document.getElementById('add');
      del = document.getElementById('del');
      list = document.getElementById('list');
      checkbox = document.getElementsByClassName('checkbox')
    delet =document.getElementsByClassName('delet')
    add.onclick = function () {
        // var newelement = document.createElement(li)
        // list.innerHTML += <li class="list-item" > ${task.value} </li>

        // list.innerHTML +=
        //     `<li class="list-group-item"> ${task.value} </li>`;

        // list.innerHTML += `<li class="list-group-item"> ${task.value} </li>`;
        // task.value="";








        // var newelement = document.createElement(li)
        // list.innerHTML += <li class="list-item" > ${task.value} </li>
        // list.innerHTML += <li class="list-item" > ${task.value} </li>


        //doubt

        // let newelemet ;
        //
        // newelemet.innerHTML += `<li class="list-group-item"> <input type="checkbox" class="check"> ${task.value} </li>`;
        // list.append(newelemet)

        //
        //
        //
        //
        if(task.value!="") {
            let newwlement = document.createElement("li")
            newwlement.setAttribute("class", "list-item list-group-item  text-center font-weight-bold");
            newwlement.innerHTML = ` <input type="checkbox" class="checkbox ml-4"> <span class="span"> ${task.value} </span>`
            list.append(newwlement)


            task.value = "";


        }else{
            window.alert("taskbox is empty")
        }
    }
var list_item = document.getElementsByClassName('list-item');
    del.onclick = function () {
          var len = checkbox.length;
          var k = 0;
        for(let i=0;i<len;i++){
            if(checkbox[i-k].checked){
                list.removeChild(list_item[i-k]);
                k++;
            }
        }
    }



}