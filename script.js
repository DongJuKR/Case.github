// 필수 입력값이 입력됐는지 id 값을 확인하는 스크립트
function submitForm() {
    
  let resultFlag = false;

  var inputValue1 = document.getElementById("00NIR000009MV5P").value;
  var inputValue3 = document.getElementById("00NIR000009MV5e").value;
  var inputValue4 = document.getElementById("00NIR000009MV5j").value;
  var inputValue5 = document.getElementById("subject").value;
  
  if (!inputValue1 || !inputValue3 || !inputValue4 || !inputValue5) {
    alert("필수 입력 값이 비어 있습니다. 입력 값을 확인해주세요.");
    return resultFlag;
  } else {
    document.getElementById("myForm").submit();
  }
}