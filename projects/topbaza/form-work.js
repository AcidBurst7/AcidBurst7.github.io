//Скрипт плавного открытия и закрытия блока
    $(document).ready(function() { 

      $("DIV#choosePlane").click(function() { 
      var town_from = $("input[name=town-from]").val();
      var town_to = $("input[name=town-to]").val();
      var passengers = $("select[name=passengers]").val();

      $.post("town_availability.php",{ user_name: town_from} ,function(data){
        if(data=='no') $("input[name=town-from]").addClass('formError');
        else {
                $("input[name=town-from]").removeClass('formError');
                $.post("town_availability2.php",{ user_name2: town_to} ,function(data){
                    if(data=='no') $("input[name=town-to]").addClass('formError');
                    else {
                      $("input[name=town-to]").removeClass('formError');
                      if(passengers == 0) $(".select-pass").addClass('formError');
                      else{
                        $(".select-pass").removeClass('formError');
                        $("DIV#choosePlane").fadeOut();
                        $("DIV#choose-planes p, DIV#choose-big-pic-planes").fadeIn();
                        $("DIV#comment").fadeIn();
                        $("DIV#contacts-user").fadeIn();
                      }
                    }
                });
              }
          });
      });

      $("DIV#addPlane").click(function() {
      var town_from = $("input[name=town-from]").val();
      var town_to = $("input[name=town-to]").val();
      var town_to2 = $("input[name=town-to-2]").val();
      var data = $("input[name=date]").val();
      var time = $("select[name=time]").val();
      var passengers = $("select[name=passengers]").val();

      $.post("town_availability.php",{ user_name: town_from} ,function(data){
        if(data=='no') $("input[name=town-from]").addClass('formError');
        else {
                $("input[name=town-from]").removeClass('formError');
                $.post("town_availability2.php",{ user_name2: town_to} ,function(data){
                    if(data=='no') $("input[name=town-to]").addClass('formError');
                    else {
                      $("input[name=town-to]").removeClass('formError');
                      $('DIV#plus-form').css('display','block');
                      $('DIV#plus-form DIV#select-plane-2 #country11').autocomplete('data.php?mode=sql', {width: 200,max: 5});
                      $('DIV#plus-form DIV#select-plane-to-2 #country22').autocomplete('data.php?mode=sql', {width: 200,max: 5});
              
                      $("#passengers-2").val(passengers);
                      $("input[name=town-from-2]").val(town_to);
                      $("input[name=town-to-2]").val(town_from);
                      $("DIV#addPlane").fadeOut();
                    }
                });
            }
        });
    });

    $("DIV#light-planes").click(function() {
        var passengers = $("select[name=passengers]").val(); 

        $("DIV#photoes-light-planes, DIV#pointer1").fadeIn();
        $("DIV#light-planes .title-one").css('background-color','#575757'); 

        $("DIV#photoes-middle-planes, DIV#middle-planes DIV#pointer2").fadeOut();
        $("DIV#photoes-busy-planes, DIV#busy-planes DIV#pointer3").fadeOut();
        $("DIV#photoes-avialiners, DIV#avialiners DIV#pointer4").fadeOut();
        $("DIV#middle-planes .title-one").css('background-color','#bbb'); 
        $("DIV#busy-planes .title-one").css('background-color','#bbb'); 
        $("DIV#avialiners .title-one").css('background-color','#bbb'); 
        return false; // не производить переход по ссылке
      }); 

     $("DIV#middle-planes").click(function() { 
        var passengers = $("select[name=passengers]").val(); 

        $("DIV#photoes-middle-planes, DIV#pointer2").fadeIn();
        $("DIV#middle-planes .title-one").css('background-color','#575757');

        $("DIV#photoes-light-planes, DIV#light-planes DIV#pointer1").fadeOut();
        $("DIV#photoes-busy-planes, DIV#busy-planes DIV#pointer3").fadeOut();
        $("DIV#photoes-avialiners, DIV#avialiners DIV#pointer4").fadeOut();
        
        $("DIV#light-planes .title-one").css('background-color','#bbb');
        $("DIV#busy-planes .title-one").css('background-color','#bbb');
        $("DIV#avialiners .title-one").css('background-color','#bbb');

        return false; // не производить переход по ссылке
      });

     $("DIV#busy-planes").click(function() { 
        var passengers = $("select[name=passengers]").val(); 

        $("DIV#photoes-busy-planes, DIV#pointer3").fadeIn();
        $("DIV#busy-planes .title-one").css('background-color','#575757'); 


        $("DIV#photoes-middle-planes, DIV#middle-planes DIV#pointer2").fadeOut();
        $("DIV#photoes-light-planes, DIV#light-planes DIV#pointer1").fadeOut();
        $("DIV#photoes-avialiners, DIV#avialiners DIV#pointer4").fadeOut();

        $("DIV#middle-planes .title-one").css('background-color','#bbb'); 
        $("DIV#light-planes .title-one").css('background-color','#bbb'); 
        $("DIV#avialiners .title-one").css('background-color','#bbb'); 
        return false; // не производить переход по ссылке
      });

     $("DIV#avialiners").click(function() { 
        var passengers = $("select[name=passengers]").val(); 

        $("DIV#photoes-avialiners, DIV#pointer4").fadeIn();
        $("DIV#avialiners .title-one").css('background-color','#575757'); 

        $("DIV#photoes-middle-planes, DIV#middle-planes DIV#pointer2").fadeOut();
        $("DIV#photoes-light-planes, DIV#light-planes DIV#pointer1").fadeOut();
        $("DIV#photoes-busy-planes, DIV#busy-planes DIV#pointer3").fadeOut();

        $("DIV#middle-planes .title-one").css('background-color','#bbb'); 
        $("DIV#light-planes .title-one").css('background-color','#bbb'); 
        $("DIV#busy-planes .title-one").css('background-color','#bbb'); 
        return false; // не производить переход по ссылке
      });

    $("DIV#addPlane-3").click(function() {
        $('DIV#plus-form3').css('display','block');      
        $('DIV#plus-form3 DIV#select-plane-3 #country33').autocomplete('data.php?mode=sql', {
              width: 200,
              max: 5
        });
        
        $('DIV#plus-form3 DIV#select-plane-to-3 #country44').autocomplete('data.php?mode=sql', {
              width: 200,
              max: 5
        });

        $("DIV#addPlane-3").fadeOut();
        $("DIV#addPlane-4").fadeIn();
      });

    $("DIV#addPlane-4").click(function() {
        $('DIV#plus-form4').css('display','block');      
        $('DIV#plus-form4 DIV#select-plane-4 #country55').autocomplete('data.php?mode=sql', {width: 200, max: 5});
        $('DIV#plus-form4 DIV#select-plane-to-4 #country66').autocomplete('data.php?mode=sql', { width: 200,max: 5});
        $("DIV#addPlane-4").fadeOut();
        $("DIV#deletePlane-4").fadeIn();
      });


     $("DIV#deletePlane").click(function() {
        $("DIV#plus-form").fadeOut();
        $("DIV#addPlane").fadeIn();
     });

     $("DIV#deletePlane-3").click(function() {
        $("DIV#plus-form3").fadeOut();
        $("DIV#addPlane-3").fadeIn();
        $("DIV#addPlane-4").fadeOut();
     });

     $("DIV#deletePlane-4").click(function() {
        $("DIV#plus-form4").fadeOut();
        $("DIV#addPlane-4").fadeIn();
        $("DIV#deletePlane-4").fadeOut();
     });

     

     $("#ajaxform").submit(function(){ // перехватываем все при событии отправки
        var form = $(this); // запишем форму, чтобы потом не было проблем с this
        var error = false; // предварительно ошибок нет
        
        /*form.find('input').each( function(){ // пробежим по каждому полю в форме
          if ($(this).val() == '') { // если находим пустое
              alert('Заполните поле "'+$(this).attr('placeholder')+'"!'); // говорим заполняй!
              error = true; // ошибка
            }
        });*/

        if (!error) { // если ошибки нет
            var data = form.serialize(); // подготавливаем данные
            $.ajax({ // инициализируем ajax запрос
               type: 'POST', // отправляем в POST формате, можно GET
               url: 'gogogo.php', // путь до обработчика, у нас он лежит в той же папке
               dataType: 'json', // ответ ждем в json формате
               data: data, // данные для отправки
           beforeSend: function(data) { // событие до отправки
                form.find('input[type="submit"]').attr('disabled', 'disabled'); // например, отключим кнопку, чтобы не жали по 100 раз
              },
           success: function(data){ // событие после удачного обращения к серверу и получения ответа
              if (data['error']) { // если обработчик вернул ошибку
                alert(data['error']); // покажем её текст
              } else { // если все прошло ок
                alert('Письмо отправлено! Запрос отправлен менеджеру.'); // пишем что все ок
                location.reload();
              }
             },
           error: function (xhr, ajaxOptions, thrownError) { // в случае неудачного завершения запроса к серверу
                alert(xhr.status); // покажем ответ сервера
                alert(thrownError); // и текст ошибки
             },
           complete: function(data) { // событие после любого исхода
                //form.find('input[type="submit"]').prop('disabled', false); // в любом случае включим кнопку обратно
             }
                      
           });
    }

    return false; // вырубаем стандартную отправку формы
  });

}); // end of ready()    }
