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

	const fn = document.getElementById("firstname").value;
	const ln = document.getElementById("lastname").value;
	const ma = document.getElementById("email").value;
	const pn = document.getElementById("telephone").value;
	const ad = document.getElementById("address").value;
	
	
	var raw = JSON.stringify({
		"Lastname":"Nakano",
		"Firstname":"Ryu",
		"Email":"email@gmail.com",
		"Phone":"09012345678",
		"Address":"Sydney"
	});
	
	var raw = '{"Lastname":"' + ln + '","Firstname":"' + fn + '", "Email":"' + ma + '", "Phone":"' + pn + '", "Address":"' + ad +'"}';
	console.log(raw);
	
	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: raw,
		redirect: 'follow'
	};
	
	// リクエスト送信
	// Email
	const response = await fetch("https://hooks.us.webexconnect.io/events/GB5NG5A0WF", requestOptions);
	
	const links = await response.json();
	console.log(links);
	
	alert('問い合わせ内容を送信いたしました。')
	
	return links;
}

