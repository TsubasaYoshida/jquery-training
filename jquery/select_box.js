$(function(){
  const selectBoxValue = $('.select-box-value');
  const vegetables = [
    'にんじん',
    'はくさい',
    'じゃがいも'
  ];
  const fruits = [
    'りんご',
    'ばなな',
    'めろん'
  ];

  $('.select-box-type').change(function(){
    const foodType = $(this).val();
    selectBoxValue.empty();
    if (foodType === 'くだもの') {
      for (let fruit of fruits) {
        selectBoxValue.append($("<option>").val(fruit).text(fruit));
      }
    }
    if (foodType === 'やさい') {
      for (let vegetable of vegetables) {
        selectBoxValue.append($("<option>").val(vegetable).text(vegetable));
      }
    }
  });
});
