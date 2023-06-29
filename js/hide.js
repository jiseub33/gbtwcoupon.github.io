// Get all the elements with the "element" class
var elements = document.querySelectorAll(".available");

// Loop over the elements and check the hide date
elements.forEach(function(element) {
  var hideDate = new Date(element.dataset.hideDate);
  // 1. 현재 시간(Locale)
const curr = new Date();
console.log("현재시간(Locale) : " + curr + '<br>');   // 현재시간(Locale) : Tue May 31 2022 09:00:30

// 2. UTC 시간 계산
const utc = 
      curr.getTime() + 
      (curr.getTimezoneOffset() * 60 * 1000);
      
// 3. UTC to KST (UTC + 9시간)
const KR_TIME_DIFF = 9 * 60 * 60 * 1000;  //한국 시간(KST)은 UTC시간보다 9시간 더 빠르므로 9시간을 밀리초 단위로 변환.
const kr_curr = new Date(utc + (KR_TIME_DIFF));  //UTC 시간을 한국 시간으로 변환하기 위해 utc 밀리초 값에 9시간을 더함.

console.log("한국시간 : " + kr_curr); // 한국시간 : Tue May 31 2022 09:00:30 GMT+0900 (한국 표준시)
  if (curr >= hideDate) {
    element.classList.remove("available");
    element.classList.add("unavailable");
  }
});