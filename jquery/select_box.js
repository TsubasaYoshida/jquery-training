$(function(){
  const selectBoxValue = $('.select-box-value')
  const selectBoxValueOption = selectBoxValue.find('option');

  $('.select-box-type').change(function(){
    const val = $(this).val();
    selectBoxValue.empty();
  });

});
