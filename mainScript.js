(function(){
     
    // Часть инициализации
         const SelectorForShipsData = 1; // селектор выбора данных для слайдера кораблей
         const SelectorForCaptainsData = 2; // селектор выбора данных для слайдера капитанов
         const SelectorForOceansData = 3; // селектор выбора данных для слайдера океанов
         var ShipsData = [
           {
                name: "flagman",
                imageFileName: "liner.jpg",
                checked: true
           },
           {
                name: "Middle Class",
                imageFileName: "RioTagus.jpg",
                checked: false
           },
           {
                name: "Best Cheapest Offer",
                imageFileName: "diggedBoat.jpg",
                checked: false
           },
           {
                name: "Unsinkable",
                imageFileName: "lodka.jpg",
                checked: false
           },
           {
                name: "Luxury Vintage",
                imageFileName: "OldShipsNeverSink.jpg",
                checked: false
           },
           {
                 name: "Only for Vikings",
                 imageFileName: "woodenShip.jpg",
                 checked: false   
           }
        ];   
        var CaptainsData = [
          {
               name: "James Hook",
               imageFileName: "JamesHook.jpeg",
               checked: true
          },
          {
               name: "Black Beard",
               imageFileName: "BlackBeard.jpg",
               checked: false
          },
          {
               name: "Ahab",
               imageFileName: "CaptainAhab.jpg",
               checked: false
          },
          {
               name: "Jean Lafit",
               imageFileName: "JeanLafit.jpg",
               checked: false
          },
          {
               name: "John Silver",
               imageFileName: "JohnSilver.jpg",
               checked: false
          }
        ];

        var OceansData = [
          {
               name:"The Atlantic Ocean",
               imageFileName: "Atlantic.jpg",
               checked: true
          },
          {
               name:"The Pacific Ocean",
               imageFileName: "Pacific.jpg",
               checked: true
          },
          {
               name:"The Indian Ocean",
               imageFileName: "Indian.jpg",
               checked: true       
          },
          {
               name:"The Arctic Ocean",
               imageFileName: "Arctic.jpg",
               checked: true
          }
        ];

        var currentSliderShipsPosition = 1;
        var currentSliderCaptainsPosition = 1;
        var currentSliderOceansPosition = 1;
        var currentSlider = SelectorForShipsData;

        var SliderRender = function(currentSliderPosition, sliderSelector){
            var sliderImages = document.querySelectorAll(".main-cards img");
            var cardHeaders = document.querySelectorAll(".main-cards .card h3"); 
            var cardRadios = document.querySelectorAll(".main-cards .card input[type=radio]");
            var i = currentSliderPosition-1;
            switch(sliderSelector){
                 case SelectorForShipsData: 
                 var i = currentSliderPosition-1;
                 for(var img of sliderImages){
                    img.src = ShipsData[i].imageFileName;
                    i = ++i;     
                 };
                 
                 var i = currentSliderPosition-1;
                 for (var header of cardHeaders) {
                    header.textContent = ShipsData[i].name;
                    i=++i;
                 };
                 
                 var i = currentSliderPosition-1;
                 for(var radio of cardRadios){
                    radio.checked = ShipsData[i].checked;
                    i=++i;
                 };
                 var SliderButtonLeft = document.querySelector(".left-slider-button");
                 var SliderButtonRight= document.querySelector(".right-slider-button");
                 SliderButtonLeft.removeAttribute("disabled");
                 SliderButtonRight.removeAttribute("disabled");
                 if (currentSliderShipsPosition == 1) {
                         SliderButtonRight.setAttribute("disabled","")
                 }
                 else 
                 if (currentSliderShipsPosition == ShipsData.length-2) {
                         SliderButtonLeft.setAttribute("disabled","")
                 };
                 break;
                 case SelectorForCaptainsData:
                    var i = currentSliderPosition-1;
                    for(var img of sliderImages){
                         img.src = CaptainsData[i].imageFileName;
                         i = ++i;     
                    };
            
                    var i = currentSliderPosition-1;
                    for (var header of cardHeaders) {
                         header.textContent = CaptainsData[i].name;
                         i=++i;
                    };
            
                    var i = currentSliderPosition-1;
                    for(var radio of cardRadios){
                         radio.checked = CaptainsData[i].checked;
                         i=++i;
                    };
                    var SliderButtonLeft = document.querySelector(".left-slider-button");
                    var SliderButtonRight= document.querySelector(".right-slider-button");
                    SliderButtonLeft.removeAttribute("disabled");
                    SliderButtonRight.removeAttribute("disabled");
                    if (currentSliderCaptainsPosition == 1) {
                         SliderButtonRight.setAttribute("disabled","")
                    }
                    else 
                         if (currentSliderCaptainsPosition == CaptainsData.length-2) {
                              SliderButtonLeft.setAttribute("disabled","")
                         }; 
                    break;
                 case SelectorForOceansData:
                    var i = currentSliderPosition-1;
                    for(var img of sliderImages){
                       img.src = OceansData[i].imageFileName;
                       i = ++i;     
                    };
                    
                    var i = currentSliderPosition-1;
                    for (var header of cardHeaders) {
                       header.textContent = OceansData[i].name;
                       i=++i;
                    }
                    
                    var i = currentSliderPosition-1;
                    for(var radio of cardRadios){
                       radio.checked = OceansData[i].checked;
                       i=++i;
                    };
                    var SliderButtonLeft = document.querySelector(".left-slider-button");
                    var SliderButtonRight= document.querySelector(".right-slider-button");
                    SliderButtonLeft.removeAttribute("disabled");
                    SliderButtonRight.removeAttribute("disabled");
                    if (currentSliderOceansPosition == 1) {
                            SliderButtonRight.setAttribute("disabled","")
                    }
                    else 
                    if (currentSliderOceansPosition == OceansData.length-2) {
                            SliderButtonLeft.setAttribute("disabled","")
                    };
                 break;
            };
           
        }; 
        SliderRender(currentSliderShipsPosition,currentSlider);

        var SliderMoveRight = function(event){
          switch(currentSlider){
               case SelectorForShipsData:
                    if (currentSliderShipsPosition<ShipsData.length-2){
                         currentSliderShipsPosition = ++currentSliderShipsPosition;
                         SliderRender(currentSliderShipsPosition, currentSlider)
                    };
                    break;
               case SelectorForCaptainsData:
                    if (currentSliderCaptainsPosition<CaptainsData.length-2){
                         currentSliderCaptainsPosition = ++currentSliderCaptainsPosition;
                         SliderRender(currentSliderCaptainsPosition, currentSlider)
                    };     
                    break;
               case SelectorForOceansData:
                    if (currentSliderOceansPosition<OceansData.length-2){
                         currentSliderOceansPosition = ++currentSliderOceansPosition;
                         SliderRender(currentSliderOceansPosition, currentSlider)
                    };
                    break;

          };
        };
        var SliderMoveLeft = function(event){
          switch (currentSlider){
               case SelectorForShipsData:
                    if (currentSliderShipsPosition>1){
                         currentSliderShipsPostion = --currentSliderShipsPosition;
                         SliderRender(currentSliderShipsPosition, currentSlider)
                    };
                    break;
               case SelectorForCaptainsData:
                    if (currentSliderCaptainsPosition>1){
                         currentSliderCaptainsPostion = --currentSliderCaptainsPosition;
                         SliderRender(currentSliderCaptainsPosition, currentSlider)
                    };
                    break;
               case SelectorForOceansData:
                    if (currentSliderOceansPosition>1){
                         currentSliderOceansPostion = --currentSliderOceansPosition;
                         SliderRender(currentSliderOceansPosition, currentSlider)
                    };
                    break;
          };
          };

        var RadioButtonChange = function(event){
               var ThisRadio = event.currentTarget;
               var nameOfCard = ThisRadio.parentElement.parentElement.firstElementChild.textContent;
               switch (currentSlider){
                    case SelectorForShipsData:
                         for (var elem of ShipsData){
                              elem.checked = false;  
                         };
                         for(var elem of ShipsData){
                           if (elem.name == nameOfCard){
                                 elem.checked = true;    
                           };
                         };
                         document.querySelector(".ship-info span").textContent= nameOfCard;
                         break;
                    case SelectorForCaptainsData:
                         for (var elem of CaptainsData){
                              elem.checked = false;  
                         };
                         for(var elem of CaptainsData){
                           if (elem.name == nameOfCard){
                                 elem.checked = true;    
                           };
                         };
                         document.querySelector(".captain-info span").textContent= nameOfCard;
                         break;
                    case SelectorForOceansData:
                         for (var elem of OceansData){
                              elem.checked = false;  
                          };
                         for(var elem of OceansData){
                           if (elem.name == nameOfCard){
                                 elem.checked = true;    
                           };
                         };
                         document.querySelector(".ocean-info span").textContent= nameOfCard;
                         break;
               };
        };
        var CaptainMenuItemSwitch = function(event){
          var CaptainMenuItem =  document.querySelector('.captain-switch');
          if (!(CaptainMenuItem.classList.contains('link-active'))) {
               switch(currentSlider){
                    case SelectorForShipsData:
                              document.querySelector('.ship-switch').classList.remove('link-active');
                         break;
                    case SelectorForCaptainsData:
                              document.querySelector('.captain-switch').classList.remove('link-active');
                         break;
                    case SelectorForOceansData:               
                              document.querySelector('.ocean-switch').classList.remove('link-active');
                         break;
               };
               CaptainMenuItem.classList.add('link-active');
               currentSlider = SelectorForCaptainsData;
               SliderRender(currentSliderCaptainsPosition,currentSlider);
          };
        };

        var ShipMenuItemSwitch = function(event){
          var ShipMenuItem =  document.querySelector('.ship-switch');
          if (!(ShipMenuItem.classList.contains('link-active'))) {
               switch(currentSlider){
                    case SelectorForShipsData:
                              document.querySelector('.ship-switch').classList.remove('link-active');
                         break;
                    case SelectorForCaptainsData:
                              document.querySelector('.captain-switch').classList.remove('link-active');
                         break;
                    case SelectorForOceansData:               
                              document.querySelector('.ocean-switch').classList.remove('link-active');
                         break;
               };
               ShipMenuItem.classList.add('link-active');
               currentSlider = SelectorForShipsData;
               SliderRender(currentSliderShipsPosition,currentSlider);
          };
        };

        var OceanMenuItemSwitch = function(event){
          var OceanMenuItem =  document.querySelector('.ocean-switch');
          if (!(OceanMenuItem.classList.contains('link-active'))) {
               switch(currentSlider){
                    case SelectorForShipsData:
                              document.querySelector('.ship-switch').classList.remove('link-active');
                         break;
                    case SelectorForCaptainsData:
                              document.querySelector('.captain-switch').classList.remove('link-active');
                         break;
                    case SelectorForOceansData:               
                              document.querySelector('.ocean-switch').classList.remove('link-active');
                         break;
               };
               OceanMenuItem.classList.add('link-active');
               currentSlider = SelectorForOceansData;
               SliderRender(currentSliderOceansPosition,currentSlider);
          };
        };

        var ShowBurgerMenu = function(event){
              var thisButton = event.currentTarget; 
              if (thisButton.value=="open"){
                       document.querySelector(".burger-menu").classList.remove("small-device-hidden");
                       document.querySelector(".burger-cross").classList.remove("hidden")
                       document.querySelector(".burger-icon").classList.add("hidden");
                       thisButton.style.zIndex=2;
                       thisButton.value="close"
                    }else
                    {
                         document.querySelector(".burger-menu").classList.add("small-device-hidden");
                         document.querySelector(".burger-cross").classList.add("hidden")
                         document.querySelector(".burger-icon").classList.remove("hidden");
                         thisButton.style.zIndex=0;
                         thisButton.value="open"       
                    };              
        };

        var ShowFareWellMessage = function(){
               document.querySelector(".fare-well-message").classList.remove("not-opened");
        };

        var CloseFareWellMessage = function(){
               document.querySelector(".fare-well-message").classList.add("not-opened");
        };

    // adding event listeners
        var leftSliderButton = document.querySelector(".left-slider-button");
        var rightSliderButton = document.querySelector(".right-slider-button");
        leftSliderButton.addEventListener("click",SliderMoveRight);
        rightSliderButton.addEventListener("click",SliderMoveLeft);
        var RadioButtons = document.querySelectorAll(".main-cards .card input[type=radio]");
        for (var radio of RadioButtons){
               radio.addEventListener("change",RadioButtonChange);
        };
        var UpperMenuItems = document.querySelectorAll(".upper-menu-item");
        var i = 1;
        for (var UpperMenuItem of UpperMenuItems){
           var classObjects =[
               {
                    class:"ship-switch",
                    func: ShipMenuItemSwitch 
               },
               {
                    class: "captain-switch",
                    func: CaptainMenuItemSwitch
               },
               {
                    class: "ocean-switch",
                    func: OceanMenuItemSwitch
               }];
           for (var classObject of classObjects){
               if (UpperMenuItem.classList.contains(classObject.class)){
                    UpperMenuItem.addEventListener("click",classObject.func);
               };
           };
        }; 
        var BurgerButton = document.querySelector(".header-burger");
        BurgerButton.addEventListener('click',ShowBurgerMenu);
        var HeaderButton = document.querySelector(".header-btn");
        HeaderButton.addEventListener("click",ShowFareWellMessage);
        var CloseFareWellMessageButton = document.querySelector(".close-message-button");
        CloseFareWellMessageButton.addEventListener("click",CloseFareWellMessage);
    //
})();