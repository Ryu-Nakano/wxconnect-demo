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

	const did = document.getElementById("deviceID").value;
	const eid = document.getElementById("eventID").value;
	
	var raw = JSON.stringify({
		"deviceID":"dev1001",
		"eventID":"event1001"
	});
	
//	var raw = '{"destination":"' + dt + '", "Lastname":"' + ln + '","Firstname":"' + fn + '", "Email":"' + ma + '", "Phone":"' + pn + '"}';
	var raw = '{"deviceID":"' + eid + '", "eventID":"' + eid + '"}';
	console.log(raw);
	
	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: raw,
		redirect: 'follow'
	};
	
	// リクエスト送信
	const response = await fetch("https://hooks-sandbox.imiconnect.io/events/A7E8RBA316", requestOptions);
	const links = await response.json();
	console.log(links);
	
//	alert('ビデオリンクを送信しました。')
	var btnArea = document.getElementById("btnSend");
	
	btnArea.innerHTML='異常検知を送信しました';
	
//	return links;
	return 0;
}

