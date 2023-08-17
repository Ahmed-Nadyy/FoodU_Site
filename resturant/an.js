function getSelectedOption() {
    var selectedOption = document.querySelector('input[name="option"]:checked');
    console.log(selectedOption);
  }

  function changedisplay(){


    var rest=document.querySelector('input[name="option"]:checked').value;

    if(rest=="الكل"){
        document.getElementById("moods").style.display="block";
        document.getElementById("rezo").style.display="block";
        document.getElementById("cook").style.display="block";
        document.getElementById("dekka").style.display="block";
        document.getElementById("baba").style.display="block";
        document.getElementById("betzza").style.display="block";
        document.getElementById("door").style.display="block";
        document.getElementById("botch").style.display="block";
        document.getElementById("banfeno").style.display="block";
        document.getElementById("caste").style.display="block";
        document.getElementById("markato").style.display="block";
        

    }
 else if(rest=="التوصيل للمنزل"){

        document.getElementById("moods").style.display="block";
        document.getElementById("rezo").style.display="block";
        document.getElementById("cook").style.display="block";
        document.getElementById("dekka").style.display="block";
        document.getElementById("baba").style.display="block";
        document.getElementById("betzza").style.display="none";
        document.getElementById("door").style.display="none";
        document.getElementById("botch").style.display="none";
        document.getElementById("banfeno").style.display="none";
        document.getElementById("caste").style.display="none";
        document.getElementById("markato").style.display="none";
        
        

    }

   
    else if(rest=="المفتوح حاليا"){

        document.getElementById("moods").style.display="block";
        document.getElementById("rezo").style.display="block";
        document.getElementById("cook").style.display="block";
        document.getElementById("dekka").style.display="block";
        document.getElementById("baba").style.display="block";
        document.getElementById("betzza").style.display="none";
        document.getElementById("door").style.display="block";
        document.getElementById("botch").style.display="none";
        document.getElementById("banfeno").style.display="none";
        document.getElementById("caste").style.display="block";
        document.getElementById("markato").style.display="block";
    }

    else if(rest=="الدفع اونلاين"){

        document.getElementById("moods").style.display="block";
        document.getElementById("rezo").style.display="block";
        document.getElementById("cook").style.display="block";
        document.getElementById("dekka").style.display="none";
        document.getElementById("baba").style.display="block";
        document.getElementById("betzza").style.display="none";
        document.getElementById("door").style.display="block";
        document.getElementById("botch").style.display="none";
        document.getElementById("banfeno").style.display="none";
        document.getElementById("caste").style.display="block";
        document.getElementById("markato").style.display="block";
    }

    
    else if(rest=="بيتزات"){

        document.getElementById("moods").style.display="none";
        document.getElementById("rezo").style.display="none";
        document.getElementById("cook").style.display="block";
        document.getElementById("dekka").style.display="none";
        document.getElementById("baba").style.display="none";
        document.getElementById("betzza").style.display="block";
        document.getElementById("door").style.display="block";
        document.getElementById("botch").style.display="none";
        document.getElementById("banfeno").style.display="block";
        document.getElementById("caste").style.display="block";
        document.getElementById("markato").style.display="none";
    }


    else if(rest=="Fast Food"){

        document.getElementById("moods").style.display="none";
        document.getElementById("rezo").style.display="none";
        document.getElementById("cook").style.display="block";
        document.getElementById("dekka").style.display="block";
        document.getElementById("baba").style.display="none";
        document.getElementById("betzza").style.display="block";
        document.getElementById("door").style.display="block";
        document.getElementById("botch").style.display="none";
        document.getElementById("banfeno").style.display="block";
        document.getElementById("caste").style.display="block";
        document.getElementById("markato").style.display="none";
    }

    else if(rest=="شاورما سورى"){

        document.getElementById("moods").style.display="none";
        document.getElementById("rezo").style.display="none";
        document.getElementById("cook").style.display="none";
        document.getElementById("dekka").style.display="block";
        document.getElementById("baba").style.display="none";
        document.getElementById("betzza").style.display="none";
        document.getElementById("door").style.display="block";
        document.getElementById("botch").style.display="block";
        document.getElementById("banfeno").style.display="block";
        document.getElementById("caste").style.display="none";
        document.getElementById("markato").style.display="none";
    }

    else if(rest=="وجبات كاملة"){

        document.getElementById("moods").style.display="block";
        document.getElementById("rezo").style.display="none";
        document.getElementById("cook").style.display="block";
        document.getElementById("dekka").style.display="block";
        document.getElementById("baba").style.display="block";
        document.getElementById("betzza").style.display="none";
        document.getElementById("door").style.display="block";
        document.getElementById("botch").style.display="block";
        document.getElementById("banfeno").style.display="block";
        document.getElementById("caste").style.display="none";
        document.getElementById("markato").style.display="none";
    }



  }