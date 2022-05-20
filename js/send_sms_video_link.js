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
	
	var raw = JSON.stringify({
		"destination":"+14402079228",
		"Lastname":"Nakano",
		"Firstname":"Ryu",
		"Email":"email@gmail.com",
		"Phone":"09012345678"
	});
	
	var raw = '{"destination":"' + dt + '", "Lastname":"' + ln + '","Firstname":"' + fn + '", "Email":"' + ma + '", "Phone":"' + pn + '"}';
	console.log(raw);
	
	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: raw,
		redirect: 'follow'
	};
	
	// リクエスト送信
//	const response = await fetch("https://hooks-us.imiconnect.io/events/LXQRGKL38D", requestOptions);
//	const links = await response.json();
//	console.log(links);
	
//	alert('ビデオリンクを送信しました。')
	var retArea = document.getElementById("retArea");
	var btnArea = document.getElementById("btnSend");
	
	retArea.innerHTML='ビデオリンクを送信しました。';
	btnArea.innerHTML='ビデオリンクを送信しました。';
	
//	return links;
	return 0;
}

