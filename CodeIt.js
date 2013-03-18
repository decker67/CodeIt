
( function main( $ ) {

    $( '#qrcode_input' ).live( 'pagebeforeshow', function() {
        var headerHeight = $( '#header' ).height();
        var footerHeight = $( '#footer' ).height();
        var footerTop = $( '#footer' ).offset().top;
        var height = ( footerTop - ( headerHeight + footerHeight ) );
        $( '#content' ).height( height );
    } );


   $( '#qrcode_output' ).live( 'pagebeforeshow', function() {
      //center img in page
      $( '#qrcode img' ).css( { 'margin': '0 auto' } );
   } );

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

