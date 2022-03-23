function removeTags(str) {
    if ((str===null) || (str===''))
        return false;
    else
        str = str.toString();
          
    // Regular expression to identify HTML tags in 
    // the input string. Replacing the identified 
    // HTML tag with a null string.
    return str.replace( /(<([^>]+)>)/ig, '');
}

	var iframe = document.getElementById('portalSubAppFrame');
	var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
	var http = new XMLHttpRequest();
	var node=innerDoc.getElementsByClassName('summary')
	var data=node[0].textContent;
	
	var language = "Language:"+innerDoc.querySelector("#mat-input-0").value;
	var numberOfPages = "Number of Pages:"+innerDoc.querySelector("#mat-input-1").value;
	var drawingSelected = "Drawing Selected:"+innerDoc.querySelector("#mat-input-2").value;
	
	data = language+"\n"+numberOfPages+"\n"+drawingSelected+"\n"+data;
	
	data= data.replace('keyboard_arrow_upDerwent Abstract','');

	if(data.includes('Title:')){
		data = data.replace('Title: ','Title:\n');
	}	
	if(data.includes('Novelty:')){
		data = data.replace('Novelty: ','Novelty:\n');
	}	
	if(data.includes('Detailed Description:')){
		data = data.replace('Detailed Description: ','Detailed Description:\n');
	}	
	if(data.includes('Technology Focus:')){
		data = data.replace('Technology Focus: ','Technology Focus:\n');
	}	
	if(data.includes('Activity:')){
		data = data.replace('Activity: ','Activity:\n');
	}	
	if(data.includes('Mechanism of Action:')){
		data = data.replace('Mechanism of Action: ','Mechanism of Action:\n');
	}	
	if(data.includes('Use:')){
		data = data.replace('Use: ','Use:\n');
	}	
	if(data.includes('Admin:')){
		data = data.replace('Admin: ','Admin:\n');
	}	
	if(data.includes('Advantage:')){
		data = data.replace('Advantage: ','Advantage:\n');
	}	
	if(data.includes('Example:')){
		data = data.replace('Example: ','Example:\n');
	}	
	if(data.includes('Definitions:')){
		data = data.replace('Definitions: ','Definitions:\n');
	}	
	if(data.includes('Drawing Description:')){
		data = data.replace('Drawing Description: ','Drawing Description:\n');
	}	

	data = encodeURI(data);
	//console.log(data)
	var url = 'https://dss.molecularconnections.com/THUMBSUP_CHINESE/thumbsup.do?action_type=readAndValidateData';
	var params = 'largeTextArea='+data;
	http.open('POST', url, true);

//Send the proper header information along with the request
	http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

	http.onreadystatechange = function() {//Call a function when the state changes.
    if(http.readyState == 4 && http.status == 200) {
console.log(http.responseText);
        alert(removeTags(http.responseText.replaceAll('</tr>','\n')));
    }
	}
	http.send(params);
	
