
const firebaseConfig = {
  apiKey: "AIzaSyAIVABHBKR80O5l3U1-aT4uU2f4iMx-BLQ",
  authDomain: "my-population-f4f62.firebaseapp.com",
  databaseURL: "https://my-population-f4f62-default-rtdb.firebaseio.com",
  projectId: "my-population-f4f62",
  storageBucket: "my-population-f4f62.appspot.com",
  messagingSenderId: "1062139962840",
  appId: "1:1062139962840:web:9122126a51be774847bead",
  measurementId: "G-J5VE0Y10MR"
};

firebase.initializeApp(firebaseConfig);

const resultsform = firebase.database().ref('My Population');

document.getElementById('form-input').addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();
  let firstName = getElementById('first-name')
  let lastName = getElementById('last-name')
  let dateOfBirth = getElementById('date-of-birth')
  let motherName = getElementById('mother-name')
  let fatherName = getElementById('father-name')

  saveDataToFireBase(firstName, lastName, dateOfBirth, motherName, fatherName);
  if (saveDataToFireBase) {
    alert("Data saved successfully!");
    document.getElementById('form-input').reset();
  }
//   document.getElementById('resultsform').reset()
}

const saveDataToFireBase = (firstName, lastName, dateOfBirth, motherName, fatherName) => {
  // Create a new data object
  const newInputeData = {
    firstName,
    lastName,
    dateOfBirth,
    motherName,
    fatherName,
  };

  // Push the data object to the database
  resultsform.push(newInputeData);
};

const getElementById = (id) => {
  return document.getElementById(id).value;
};