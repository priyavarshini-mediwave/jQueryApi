let dogs = [];
let dogsKeys = [];
let imgUrl = "";
function getAllDogsFromApi() {
  // https://dog.ceo/api/breeds/list/all
  const url = "https://dog.ceo/api/breeds/list/all";
  showLoading();
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
      hideLoading();
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
  showLoading();
  $.ajax(url, {
    method: "GET",
    success: function (resp) {
      console.log("Api request success");
      console.log(resp);
      let imgMesssage = resp;
      //console.log(imgMesssage.message)

      imgUrl = imgMesssage.message;
      console.log(imgUrl);
      displayName(dogBreed);
      displayImage(imgUrl);
      hideLoading();
      clearSelect();
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
let btnSubmit = $("#btnSubmit");
btnSubmit.click(function () {
  //alert("hi");
  const selectInput = $("#dogSelect");
  let dogType = selectInput.val();
  console.log(dogType);

  getRandomImageOfDog(dogType);
  clearSelect();
});

function displayImage(imgUrl) {
  const dogImage = $("#dogImage");
  //let imgUrl1 = imgUrl;
  dogImage.attr("src", imgUrl);
}
function showLoading() {
  const loadpara = $("#load-para");
  loadpara.show();
}
function hideLoading() {
  const loadpara = $("#load-para");
  loadpara.hide();
}
function clearSelect() {
  const selectInput = $("#dogSelect");
  selectInput.val("");
}
function displayName(dogBreed) {
  $("#dogName").remove();
  let dogName = $("<p>");
  dogName.attr("class", "dogName");
  dogName.attr("id", "dogName");
  dogName.text(dogBreed);
  const dogImage = $("#dogImage");
  dogName.insertBefore(dogImage);
}
