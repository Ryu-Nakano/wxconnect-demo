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
	const email = document.getElementById("mail").value;
	const phone = document.getElementById("Phone").value;

// JSON Sample
//{
//    "CompanyName": "シスコシステムズ",
//    "CustomerName": "Ryu Nakano",
//    "Email": "rynakano@cisco.com",
//    "Phone": "+818034779718"
//}
	
	var raw = `{"CompanyName":"${comn}", "CustomerName":"${cusn}","Email":"${mail}", "Phone":"${phone}"}`;
	console.log(raw);
	
	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: raw,
		redirect: 'follow'
	};
	
	// リクエスト送信
	const response = await fetch("https://hooks.us.webexconnect.io/events/P3SXZA270B", requestOptions);
	const links = await response.json();
	console.log(links);
	
	var btnArea = document.getElementById("btnSend");
	btnArea.innerHTML='SMSを送信しました';
	
	return 0;
}

