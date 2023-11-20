// 変数定義
// なし


/*-----------------------------------------------------------*/
/* sendRequest 
/*-----------------------------------------------------------*/
// 引数（IN）
//  bodyText:問い合わせ内容
// 戻り値（OUT）
//  作成リンク情報
/*-----------------------------------------------------------*/
async function sendRequest(bodyText) {
	
	// リクエスト作成
	var myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");

	const dt = document.getElementById("destination").value;

	const fn = document.getElementById("firstname").value;
	const ln = document.getElementById("lastname").value;
	const ma = document.getElementById("mail").value;
	const pn = document.getElementById("tell").value;

	const tm = 'クレジットカード (XXXX-XXXX-XXXX-XXXX)にて、新経路の店舗利用がありました。ご本人の利用かどうかを確認する為、05031292645 におかけください。';

//	var raw = JSON.stringify({
//		"destination":"+14402079228",
//		"Lastname":"Nakano",
//		"Firstname":"Ryu",
//		"Email":"email@gmail.com",
//		"Phone":"09012345678"
//	});
	
//	var raw = '{"destination":"' + dt + '", "Lastname":"' + ln + '","Firstname":"' + fn + '", "Email":"' + ma + '", "Phone":"' + pn + '"}';
	var raw = '{"destination":"' + dt + '", "Lastname":"' + ln + '","Firstname":"' + fn + '", "Email":"' + ma + '", "Phone":"' + pn + '","TextMsg":"' + tm + '"}';
	console.log(raw);
	
	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: raw,
		redirect: 'follow'
	};
	
	// リクエスト送信
	const response = await fetch("https://hooks.au.webexconnect.io/events/UEV8XDNCX2", requestOptions);
	const links = await response.json();
	console.log(links);
	
	var btnArea = document.getElementById("btnSend");
	
	btnArea.innerHTML='SMSを送信しました';
	
	return 0;
}

