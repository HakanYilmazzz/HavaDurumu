var city = (localStorage.city || "Şehir seçiniz");
document.getElementById("city").value=city;
document.getElementById("save").onclick = function () {
	var result = document.createElement("p");
	result.id = "result";
	if(/.*[\u4e00-\u9fa5]+.*$/.test(document.getElementById("city").value)){
		result.innerText = "Şehir seçiniz";
		result.style.color = "#D0104C";
	}else{
		result.innerText = "Başarılı!";
		result.style.color = "#00AA90";
		localStorage.city = document.getElementById("city").value;
	}
	var save = document.getElementById("save");
	(document.getElementsByTagName("body"))[0].replaceChild(result,save);
	setTimeout(function() {
		(document.getElementsByTagName('body'))[0].replaceChild(save,document.getElementById("result"));
	},1500);
}