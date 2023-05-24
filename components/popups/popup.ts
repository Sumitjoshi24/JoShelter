declare var Promise: any;
const dataController = (function () {
    let backup: any[] = [];
  
    // Function to load data from JSON file
    const loadData = async () => {
      try {
        const response = await fetch("../../data.json");
        backup = await response.json();
      } catch (error) {
        console.error("Failed to load data:", error);
      }
    };
  
    // Call the loadData function to fetch data from JSON file
    loadData();
  
    return {
      petDetail: function (position: number) {
        return {
          name: backup[position].name,
          breed: backup[position].breed,
          information: backup[position].information,
          age: backup[position].age,
          lifeSpan: backup[position].lifeSpan,
          height: backup[position].height,
          gender: backup[position].gender,
        };
      },
    };
  })();
  
  var UIController = (function () {
    var DOMStrings = {
      ourPetContainer: ".our_pet_content_container",
      place: "#our_pet_content",
      crossButton: ".cross_button",
      body: "body",
      popup: "#popup",
      knowMoreButton: ".pets button",
      popupContainer: ".popup_container",
      showPopup: "show_popup",
  
      petImageClass: ".petimage img",
      petNameClass: ".pet_detail h4",
      petBreedClass: ".pet_detail h6",
      petinformationClass: ".pet_detail p",
      petULClass: ".pet_detail ul li span ~ span",
    };
  
    var updateUI = function (data: any) {
        (document.querySelector(DOMStrings.petImageClass) as HTMLImageElement).src = data.image;
        document.querySelector(DOMStrings.petNameClass)!.textContent = data.name;
      document.querySelector(DOMStrings.petBreedClass)!.textContent = data.breed;
      document.querySelector(DOMStrings.petinformationClass)!.textContent =
        data.information;
      document.querySelectorAll(DOMStrings.petULClass)[0].textContent = data.age;
      document.querySelectorAll(DOMStrings.petULClass)[1].textContent =
        data.lifeSpan;
      document.querySelectorAll(DOMStrings.petULClass)[2].textContent =
        data.height;
      document.querySelectorAll(DOMStrings.petULClass)[3].textContent =
        data.gender;
    };
  
    /*UIController Return*/
  
    return {
      getDomStr: function () {
        return {
          petContainer: DOMStrings.ourPetContainer,
          place: DOMStrings.place,
          crossButton: DOMStrings.crossButton,
          body: DOMStrings.body,
          popup: DOMStrings.popup,
          knowMoreBtn: DOMStrings.knowMoreButton,
          pupupContainer: DOMStrings.popupContainer,
          showPopup: DOMStrings.showPopup,
        };
      },
      deployHtml: function (targetData: any) {
        updateUI(targetData);
      },
    };
  })();
  
  var controller = (function (dataCtrl: any, UICtrl: any) {
    /*variable for scroll axis to sx(scrollx), sy(scrolly)*/
  
    var sx: number, sy: number;
  
    var DOM = UICtrl.getDomStr();
    /*var petStoredData = dataCtrl.backupData();*/
    var mainData: any = {};
    var newMain: any = {};
  
    var boot = function () {
      document
        .querySelector(DOM.petContainer)
        .addEventListener("click", getTargetData);
  
      document
        .querySelector(DOM.crossButton)
        .addEventListener("click", removePopup);
      /*document.querySelector("#popup").addEventListener("click", removePopup);*/
  
      /* grey space click */
      window.addEventListener("click", greyAreaClick);
    };
  
    var getTargetData = function (event: any) {
      var existID = event.target.parentNode.id;
  
      if (
        existID !== DOM.place &&
        event.srcElement.textContent ===
          document.querySelector(DOM.knowMoreBtn).textContent
      ) {
        var id = event.target.parentNode.id;
        var image = event.target.parentNode.childNodes[1].childNodes[1].src;
  
        mergeObject(id, image);
  
        document.querySelector(DOM.popup)!.style.visibility = "visible";
        document
          .querySelector(DOM.pupupContainer)!
          .classList.toggle(DOM.showPopup);
  
        // stop scroll
        stopScroll("enable");
      }
    };
  
    var removePopup = function (event?: any) {
      document.querySelector(DOM.popup)!.style.visibility = "hidden";
      document
        .querySelector(DOM.pupupContainer)!
        .classList.toggle(DOM.showPopup);
  
      stopScroll("disable");
    };
  
    /* grey space click */
  
    var greyAreaClick = function (event: any) {
      if (event.target === document.querySelector(DOM.popup)) {
        removePopup();
      }
    };
  
    var mergeObject = function (petId: any, petImage: any) {
      mainData.id = petId;
      mainData.image = petImage;
      newMain = { ...mainData, ...dataCtrl.petDetail(petId) };
  
      /* send it to uiController */
      UICtrl.deployHtml(newMain);
    };
  
    /* stopscroll function */
  
    var stopScroll = function (checkStat: string) {
      sx = scrollX;
      sy = scrollY;
      checkStat === "enable"
        ? window.addEventListener("scroll", noscroll)
        : window.removeEventListener("scroll", noscroll);
    };
  
    var noscroll = function () {
      window.scroll(sx, sy);
    };
  
    /*Controller Return*/
  
    return {
      bootOnLoad: function () {
        boot();
      },
    };
  })(dataController, UIController);
  
  controller.bootOnLoad();
  