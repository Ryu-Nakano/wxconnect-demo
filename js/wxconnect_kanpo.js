// �ϐ���`
// �Ȃ�


/*-----------------------------------------------------------*/
/* sendRequest 
/*-----------------------------------------------------------*/
// �����iIN�j
//  bodyText:�₢���킹���e
// �߂�l�iOUT�j
//  �쐬�����N���
/*-----------------------------------------------------------*/
async function sendRequest(bodyText) {
	
	// ���N�G�X�g�쐬
	var myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");

	const fn = document.getElementById("firstname").value;
	const ln = document.getElementById("lastname").value;
	const ma = document.getElementById("email").value;
	const pn = document.getElementById("telephone").value;
	
	var raw = JSON.stringify({
		"destination":"+14402079228",
		"Lastname":"Nakano",
		"Firstname":"Ryu",
		"Email":"email@gmail.com",
		"Phone":"09012345678"
	});
	
	var raw = '{"destination":"+15162001844", "Lastname":"' + ln + '","Firstname":"' + fn + '", "Email":"' + ma + '", "Phone":"' + pn + '"}';
	console.log(raw);
	
	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: raw,
		redirect: 'follow'
	};
	
	// ���N�G�X�g���M
	const response = await fetch("https://hooks-us.imiconnect.io/events/MOQL45SKB2", requestOptions);
	const links = await response.json();
	console.log(links);
	
	alert('�₢���킹���e�𑗐M�������܂����B')
	
	return links;
}

