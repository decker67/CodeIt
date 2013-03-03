

( function main( $ ) {

   //handle click on generate qr-code
   $( '#show_code' ).delegate( '', 'click', function( event ) {
      event.stopPropagation();
      $( '#qrcode').empty();
      var qrcode = new QRCode( 'qrcode', {
         text: $( '#text' ).val(),
         width: 256,
         height: 256,
         colorDark : "#000000",
         colorLight : "#ffffff",
         correctLevel : QRCode.CorrectLevel.H
      } );
   } );

   //handle click on print
   $( '#print' ).delegate( '', 'click', function( event ) {
      event.stopPropagation();
      window.print();
   } );




} )( $ );

