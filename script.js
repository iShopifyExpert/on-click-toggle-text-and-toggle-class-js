<script type="text/javascript">
  $(document).ready(function() {
    $('.stock-button').click(function(){
      $(this).text(($(this).text() == 'Out of Stock') ? 'In Stock' : 'Out of Stock');
      $(this).toggleClass('instock outofstock');
      if ($(this).text() == 'All In Stock') {
        
      } else if ($(this).text() == 'All Out of Stock') {
        
      }
    });
  });
</script>
