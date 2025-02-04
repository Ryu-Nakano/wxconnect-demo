// 変数定義
// なし

const MAX_ROW=10;
const NOTIFY_MINUTES=5;
var time=[];
var company=[];
var cname=[];
var sales=[];
var tel=[];

/*-----------------------------------------------------------*/
/* sendRequest 
/*-----------------------------------------------------------*/
// 引数（IN）
//  bodyText:問い合わせ内容
// 戻り値（OUT）
//  作成リンク情報
/*-----------------------------------------------------------*/
async function sendRequest(rowid) {
	
	// リクエスト作成
	var myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");

	// 内容を更新
	updateRec();

	const txt= document.getElementById('context').value;
	console.log(txt);

	let rowidx = rowid.replace('_','');
	console.log(rowidx);
	
	var raw = `{"time":"${time[rowidx]}", "company":"${company[rowidx]}","cname":"${cname[rowidx]}", "sales":"${sales[rowidx]}", "tel":"${tel[rowidx]}", "text":"${txt}"}`;
	console.log(raw);
	
	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: raw,
		redirect: 'follow'
	};
	
	// リクエスト送信
	const response = await fetch("https://hooks.au.webexconnect.io/events/F5ER23BOKX", requestOptions);
	
	const links = await response.json();
	console.log(links);
	console.log('通知を送信いたしました。')
	
	return links;
}


var notifySMS = function(){
	//現在時刻の取得(UnixTime)
	let d = new Date();
	console.log(d.getTime());
	// 条件を一致させるために、0秒のUnixTimeの取得が必要
	let nowUT = new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes(), 0, 0);
	console.log(nowUT.getTime());

	//時間配列をUnixTimeへ変換
	for (i=1; i <= MAX_ROW; i++) {
		console.log(time[i]);
		let timeUT = new Date(d.getFullYear(), d.getMonth(), d.getDate(), time[i].slice(0,2), time[i].slice(3,5),0,0);
		console.log(timeUT.getTime());
		//時間のチェック
		if (nowUT/1000 + NOTIFY_MINUTES*60 == timeUT/1000){
			//sendRequest(rowid)を実行
			console.log(`$[i} のレコードを実行`);
			sendRequest("_" + i);
		}
	}
}

var updateRec = function(){
	for (i=1; i <= MAX_ROW; i++) {
		time[i] =  document.getElementById(`time_${i}`).value;
		company[i] =  document.getElementById(`company_${i}`).value;
		cname[i] =  document.getElementById(`name_${i}`).value;
		sales[i] =  document.getElementById(`sales_${i}`).value;
		tel[i] =  document.getElementById(`tel_${i}`).value;
	}
	console.log(time, company, cname, sales, tel);
}
setInterval(notifySMS, 60000);
//setInterval(notifySMS, 30000);
