//jQuery.ajax (copied from code along)



$(function(){
  'use strict';
  var gameWatcher;
//  var sa = '//localhost:3000';
  var sa = 'https://young-citadel-2431.herokuapp.com';

  $('#register').on('click', function(e){
    $.ajax(sa + '/register', {  // variable sa with '/register' tacked on
      contentType: 'application/json',  // to send as JSON, must specify content type
      processData: false,
      data: JSON.stringify({    // takes the object and turns it to JSON
        credentials: {
          email: $('#email').val(),
          password: $('#password').val(),
          password_confirmation: $('#password').val(),  // not really checking
        }                                               // to save time
      }),
      dataType: 'json',
      method: 'POST'
    }).done(function(data, textStatus, jqxhr){
      $('#result').val(JSON.stringify(data));
    }).fail(function(jqxhr, textStatus, errorThrown){
      $('#result').val('registration failed');
    });
  });

  $('#login').on('click', function(e){
    $.ajax(sa + '/login', {
      contentType: 'application/json',  // to send as JSON, must specify content type
      processData: false,
      data: JSON.stringify({    // takes the object and turns it to JSON
        credentials: {
          email: $('#email').val(),
          password: $('#password').val(),
        }
      }),
      dataType: 'json',
      method: 'POST'
    }).done(function(data, textStatus, jqxhr){
      $('#token').val(data.token);
    }).fail(function(jqxhr, textStatus, errorThrown){
      $('#result').val('login failed');
    });
  });

  $('#list').on('click', function(e){
    $.ajax(sa + '/games', {
      dataType: 'json',
      method: 'GET',
      headers: {
        Authorization: 'Token token=' + $('#token').val()   // if have valid token, can see list of games
      }
    }).done(function(data, textStatus, jqxhr){
      $('#result').val(JSON.stringify(data));
    }).fail(function(jqxhr, textStatus, errorThrown){
      $('#result').val('list failed');
    });
  });

  $('#create').on('click', function(e){
    $.ajax(sa + '/games', {
      contentType: 'application/json',  // to send as JSON, must specify content type
      processData: false,
      data: JSON.stringify({}),
      dataType: 'json',
      method: 'POST',
      headers: {
        Authorization: 'Token token=' + $('#token').val()   // if have valid token, can see list of games
      }
    }).done(function(data, textStatus, jqxhr){
      $('#result').val(JSON.stringify(data));
    }).fail(function(jqxhr, textStatus, errorThrown){
      $('#result').val('create failed');
    });
  });

  $('#show').on('click', function(e){
    $.ajax(sa + '/games/'+ $('#id').val(), {  // results in '/games/id' gives
      dataType: 'json',                       // particular game with id....
      method: 'GET',
      headers: {
        Authorization: 'Token token=' + $('#token').val()   // if have valid token, can see list of games
      }
    }).done(function(data, textStatus, jqxhr){
      $('#result').val(JSON.stringify(data));
    }).fail(function(jqxhr, textStatus, errorThrown){
      $('#result').val('show failed');
    });
  });

$('#join').on('click', function(e){
    $.ajax(sa + '/games/'+ $('#id').val(), {  // results in '/games/id' gives
      contentType: 'application/json',  // to send as JSON, must specify content type
      processData: false,
      data: JSON.stringify({}),
      dataType: 'json',
      method: 'PATCH',
      headers: {
        Authorization: 'Token token=' + $('#token').val()   // if valid token, can see list of games
      }
    }).done(function(data, textStatus, jqxhr){
      $('#result').val(JSON.stringify(data));
    }).fail(function(jqxhr, textStatus, errorThrown){
      $('#result').val('join failed');
    });
  });

  $('#move').on('click', function(e){
    $.ajax(sa + '/games/'+ $('#id').val(), {  // results in '/games/id' gives
      contentType: 'application/json',  // to send as JSON, must specify content type
      processData: false,
      data: JSON.stringify({
        game: {
          cell: {
           index: +$('#index').val(),   //unary+ makes string a number
            value: $('#value').val()
          }
        }
      }),
      dataType: 'json',
      method: 'PATCH',
      headers: {
        Authorization: 'Token token=' + $('#token').val()   // if valid token, can see list of games
      }
    }).done(function(data, textStatus, jqxhr){
      $('#result').val(JSON.stringify(data));
    }).fail(function(jqxhr, textStatus, errorThrown){
      $('#result').val('move failed');
    });
  });

  $('#watch').on('click', function() {
    gameWatcher = resourceWatcher(sa + '/games/'+ $('#id').val() + '/watch', {
      Authorization: 'Token token=' + $('#token').val()
    });
    gameWatcher.on('change', function(data) {
      var parsedData = JSON.parse(data);
      // heroku routers report this as a 503
      // if (data.timeout) { // not an error
      //   gameWatcher.close();
      //   return console.warn(data.timeout);
      // }
      var gameData = parsedData.game;
      var cell = gameData.cell;
      $('#index').val(cell.index);
      $('#value').val(cell.value);
    });
    gameWatcher.on('error', function(e) {
      console.error('an error has occured with the stream' , e);
    });
  });

});


