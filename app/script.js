let dogs = [];
let dogsKeys = [];
function getAllDogsFromApi() {
  // https://dog.ceo/api/breeds/list/all
  const url = "https://dog.ceo/api/breeds/list/all";
  $.ajax(url, {
    method: "GET",
    success: function (resp) {
      console.log("Api request success");
      console.log(resp);
      dogs = resp;
      console.log("hello");
      //console.log(Object.keys(dogs.message));
      dogsKeys = Object.keys(dogs.message);
      //console.log(dogsKeys);
      appendtodogSelect(dogsKeys);
    },

    error: function () {
      console.log("Api request error");
    },
    complete: function () {
      console.log("API request completed");
    },
  });
}

function getRandomImageOfDog(dogBreed) {
  // https://dog.ceo/api/breed/affenpinscher/images/random
  const url = `https://dog.ceo/api/breed/${dogBreed}/images/random`;
  $.ajax(url, {
    method: "GET",
    success: function (resp) {
      console.log("Api request success");
      console.log(resp);
    },
    error: function () {
      console.log("Api request error");
    },
  });
}
let num = 1;
function appendtodogSelect(dogsKeys) {
  for (i of dogsKeys) {
    let dogOption = $("<option>");
    // dogOption.attr({ 'html': i });
    // dogOption.attr({ 'value': i });
    // dogOption.attr({ 'text': i });
    // dogOption.attr({ 'id': `dogOption${num}` });
    // num++;
    // console.log(dogOption);
    const dogSelect = $("#dogSelect");
    //$('#select1').append(new Option(optionText, optionValue))
    dogSelect.append(new Option(i, i));
  }
}
getAllDogsFromApi();
let btnSubmit=