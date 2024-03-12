var array = [
  {
    id: "1",
    name: "Parikh ankur",
    m_no: "9825785252",
    add: "Vadodara",
    amount: "51000",
  },
  {
    id: "2",
    name: "Patel Bhavin",
    m_no: "9825785432",
    add: "Surat",
    amount: "9000",
  },
  {
    id: "3",
    name: "Patel Kantilal",
    m_no: "9525785252",
    add: "Anand",
    amount: "2000",
  },
  {
    id: "4",
    name: "Patel Bhavnaben",
    m_no: "9885285252",
    add: "Nadiad",
    amount: "5500",
  },
  {
    id: "5",
    name: "Patel Ramanbhai",
    m_no: "9829585252",
    add: "Surat",
    amount: "1000",
  },
  {
    id: "6",
    name: "Nai Prafulchandr",
    m_no: "7825785252",
    add: "Nadiad",
    amount: "25000",
  },  
  {
    id: "7",
    name: "Patel Pinalkumar",
    m_no: "9025785252",
    add: "Vadodara",
    amount: "5000",
  },
  {
    id: "8",
    name: "Soni Navin",
    m_no: "7725785432",
    add: "Surat",
    amount: "20000",
  },
  {
    id: "9",
    name: "Patel Sejal",
    m_no: "8625785252",
    add: "Anand",
    amount: "8000",
  },
  {
    id: "10",
    name: "Chudashma Bipin",
    m_no: "7885285252",
    add: "Nadiad",
    amount: "50000",
  },
  {
    id: "11",
    name: "Barot Manish",
    m_no: "6829585252",
    add: "Surat",
    amount: "6000",
  },
  {
    id: "12",
    name: "Patel Jaydev",
    m_no: "8825785234",
    add: "Nadiad",
    amount: "25000",
  },
  {
    id: "13",
    name: "Jalak Davara",
    m_no: "9129585252",
    add: "Surat",
    amount: "5000",
  },
  {
    id: "14",
    name: "Deep Vanpariya",
    m_no: "9321257852",
    add: "Rajkot",
    amount: "2500000",
  },
  {
    id: "15",
    name: "Dhruv Patel",
    m_no: "6929585252",
    add: "Surat",
    amount: "80000",
  },
  {
    id: "16",
    name: "Khush Kotadiya",
    m_no: "8825785252",
    add: "Keshod",
    amount: "16000",
  },
  {
    id: "17",
    name: "Jay Padariya",
    m_no: "8529585252",
    add: "Rajkot",
    amount: "50000",
  },
  {
    id: "18",
    name: "Kishan Thummer",
    m_no: "7925785252",
    add: "Junagadh",
    amount: "89000",
  }
];

//Show table data
function showtable(curarray) {
  document.getElementById("mytable").innerHTML = 
  `<tr class = "bg-primary text-white fw-bold">
    <td>Id</td>
    <td>Name</td>
    <td>M_no</td>
    <td>Address</td>
    <td>Amount</td>
  </tr>`;

  //  for checking array is empty

  if (curarray == "") {
    document.getElementById(
      "error"
    ).innerHTML = `<span class = "text-danger">Not Found!</span>`;
  } else {
    document.getElementById("error").innerHTML = "";

    for (var i = 0; i < curarray.length; i++) {
      document.getElementById("mytable").innerHTML += `
        <tr>
            <td>${curarray[i].id}</td>
            <td>${curarray[i].name}</td>
            <td>${curarray[i].m_no}</td>
            <td>${curarray[i].add}</td>
            <td>${curarray[i].amount}</td>
        </tr>
        `;
    }
  }
}

//calling show table data method
showtable(array);

//take filtered data array

var newarray = [];
// for searching method

document.getElementById("search").addEventListener("keyup", function () {
  var search = this.value.toLowerCase();

  newarray = array.filter(function (val) {
    if (
      val.id.includes(search) //||
      // val.name.includes(search) ||
      // val.amount.includes(search) ||
      // val.add.includes(search)
    ) {
      var newobj = {
        id: val.id,
        name: val.name,
        m_no: val.m_no,
        add: val.add,
        amount: val.amount,
      };
      return newobj;
    }
  });
  showtable(newarray);
});