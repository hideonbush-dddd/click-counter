function sendData() {
  const grade = document.getElementById("grade").value;
  const classNum = document.getElementById("class").value;
  const number = document.getElementById("number").value;
  const name = document.getElementById("name").value;
  const subject = document.getElementById("subject").value;
  const id = `${grade}-${classNum}-${number}`;

  const url = "https://script.google.com/macros/s/여기에_복사한_WebApp_URL/exec";

  fetch(`${url}?id=${id}&name=${name}&subject=${subject}&count=1`)
    .then(res => res.text())
    .then(data => {
      document.getElementById("result").innerText = "✅ 저장 완료: " + data;
    })
    .catch(err => {
      document.getElementById("result").innerText = "❌ 오류: " + err;
    });
}
