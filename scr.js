    

var f1 = label("label", "for", "first", "FirstName");
var b1 = bre("br")
var fi = input("input", "type", "text", "id", "first");
var b2 = bre("br")
var l1 = label("label", "for", "last", "LastName");
var b3 = bre("br")
var li = input("input", "type", "text", "id", "last");
var b4 = bre("br")
var a1 = label("label", "for", "add", "Address");
var b5 = bre("br")
var ai = input("input", "type", "text", "id", "add");
var b6 = bre("br")
var p1 = label("label", "for", "pin", "pincode");
var b8 = bre("br")
var pi = input("input", "type", "text", "id", "pin");
var b9 = bre("br")




var g1 = label("label", "id", "gender", "Gender");
var b10 = bre("br")
var radi = radio("input", "type", "radio", "value", "male", "name", "gender");
var radv = label("label", "id", "male", "Male")
var rad = radio("input", "type", "radio", "value", "female", "name", "gender");
var rad2 = label("label", "id", "female", "Female")




var b11 = bre("br")
var food = label("label", "for", "food", "Food ");
var b12 = bre("br")
var foodi = radio("input", "type", "checkbox", "value", "southIndian","name","food");
var fv1 = label("label", "for", "south", "SouthIndian");
var b13 = bre("br")
var food2 = radio("input", "type", "checkbox", "value", "north Indian","name","food");
var fv2 = label("label", "for", "north", "North Indian");
var b14 = bre("br")
var food3 = radio("input", "type", "checkbox", "value", "chinees","name","food");
var fv3 = label("label", "for", "chinees", "Chinees");
var b15 = bre("br")
var food4 = radio("input", "type", "checkbox", "value", "West Indian","name","food");
var fv4 = label("label", "for", "West", "West Indian");
var b16 = bre("br")
var food5 = radio("input", "type", "checkbox", "value", "Biriyani","name","food");
var fv5 = label("label", "for", "Biriyani", "Biriyani");

var b17 = bre("br")
var sta = label("label", "for", "state", "State");
var b18 = bre("br")
var si = input("input", "type", "text", "id", "state");

var b19 = bre("br")
var cou = label("label", "for", "coun", "Country");
var b20 = bre("br")
var ci = input("input", "type", "text", "id", "coun");

var b21 = bre("br")
var b22 = bre("br")
var bu = radio("input", "type", "button", "onclick", "submit", "value", "submit");





document.body.append(f1, b1, fi, b2, l1, b3, li, b4, a1, b5, ai, b6, p1, b8, pi, b9, g1, b10, radi, radv, rad, rad2, b11, food, b12, foodi, fv1, b13, food2, fv2, b14, food3, fv3,
    b15, food4, fv4, b16, food5, fv5, b17, sta, b18, si, b19, cou, b20, ci, b21, b22, bu);



  bu.addEventListener("click",()=>{
  
  
   
    let res = document.getElementById("first").value
    let res1 = document.getElementById("last").value
    let res2 = document.getElementById("add").value
    let res3 = document.getElementById("pin").value
    let res4 = document.querySelector('input[name="gender"]:checked').value;
    let res5 = document.querySelector('input[type="checkbox"]:checked').value;
    
//   let res6 = document.querySelectorAll('input[type="checkbox"]:checked');
// console.log([...checked].map(c => c.value))
   



    


   

    





    let res11 = document.getElementById("state").value
    let res12 = document.getElementById("coun").value
    console.log(res, res1, res2, res3,res4,res5,res11, res12);


    var div = document.createElement("div");
    div.setAttribute("id", "form");
    div.innerHTML = `

            <table class="table table-bordered table-dark">
  <thead>
    <tr>
      
      <th scope="col">First name</th>
      <th scope="col">Last name</th>
      <th scope="col">address</th>
      <th scope="col">pincode</th>
      <th scope="col">gender</th>
      <th scope="col">food</th>
      <th scope="col">state</th>
      <th scope="col">country</th>
      

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">${res}</th>
      <td>${(res1)}</td>
      <td>${res2}</td>
      <td>${res3}</td>
      <td>${res4}</td>
      <td>${res5}</td>
      <td>${res11}</td>
      <td>${res12}</td>
      
    </tr>
  </tbody>
</table>

        
                
    
        </div>
    </div>
</div>`
    
    document.body.append(div)
  
  })
  










function label(tagname, attri, value, content) {
    var labe = document.createElement(tagname);
    labe.setAttribute(attri, value);
    labe.innerHTML = content;
    return labe;
}
function input(tag, att1, v1, att2, v2) {
    var input = document.createElement(tag)
    input.setAttribute(att1, v1);
    input.setAttribute(att2, v2);
    return input;
}

function radio(tag, att1, v1, att2, v2, att3, v3) {
    var rad = document.createElement(tag)
    rad.setAttribute(att1, v1);
    rad.setAttribute(att2, v2);
    rad.setAttribute(att3, v3);

    return rad;
}
function bre(br) {
    var b1 = document.createElement(br);
    return b1;
}
