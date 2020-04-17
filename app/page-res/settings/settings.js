//$('#settings-select-theme').val(localStorage.getItem('OpenRevise2.selectedTheme'))
console.log('Current theme: ' + localStorage.getItem('OpenRevise2.selectedTheme'))

$('#settings-select-theme').val(localStorage.getItem('OpenRevise2.selectedTheme'))

$('#settings-select-theme').change(function () {
  localStorage.setItem('OpenRevise2.selectedTheme', this.value)
  console.log('Changing theme: ' + this.value)
  OpenReviseMaster.swapAppTheme(this.value)
})