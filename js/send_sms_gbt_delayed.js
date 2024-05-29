// 変数定義
// なし


/*-----------------------------------------------------------*/
/* sendRequest 
/*-----------------------------------------------------------*/
// 引数（IN）
//  無し
// 戻り値（OUT）
//  0 (固定)
/*-----------------------------------------------------------*/
async function sendRequest() {
	
	// リクエスト作成
	var myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");

	const comn = document.getElementById("companyName").value;
	const cusn = document.getElementById("customerName").value;
	const em = document.getElementById("mail").value;
	const ph = document.getElementById("phone").value;
	const msg = 'いつもお世話になっております。\\n 明日、お客様の帰りの飛行機(ラスベガス発、ロサンゼルス着)便が、天候不順により遅延する可能性があるという情報を受け取りました。ロサンゼルスでの乗り継ぎが間に合わなくなる可能性がありますので、ご留意下さい。\\n Thank you very much for your continued support. \\n 	We have received information that your return flight (from Las Vegas to Los Angeles) may be delayed tomorrow due to inclement weather. Please be advised that you may not be able to make your connection in Los Angeles in time.';
// JSON Sample
//{
//    "CompanyName": "シスコシステムズ",
//    "CustomerName": "Ryu Nakano",
//    "Email": "rynakano@cisco.com",
//    "Phone": "+818034779718"
//}
	
	var raw = `{"CompanyName":"${comn}","CustomerName":"${cusn}","Email":"${em}", "Phone":"${ph}", "TextMsg":"${msg}" }`;
	console.log(raw);
	
	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: raw,
		redirect: 'follow'
	};
	
	// リクエスト送信
	const response = await fetch("https://hooks.us.webexconnect.io/events/B4UXX0ELT3", requestOptions);
	const restxt = await response.json();
	console.log(restxt);
	
	var btnArea = document.getElementById("btnSend");
	btnArea.innerHTML='SMSを送信しました';
	
	return 0;
}
