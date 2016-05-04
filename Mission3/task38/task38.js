window.onload = function(){
	createForm();
     loadData();
		};
function createForm(){
		var l = data.length;
		var tbody = document.getElementsByTagName('tbody')[0];
		var td = [];
		var tr = [];
		for (var i=0;i<data.length;i++){
			tr[i] = document.createElement('tr');
			
			for (var j=0;j<=4;j++){
				td[j] = document.createElement('td');
				tr[i].appendChild(td[j]);
			}

			tbody.appendChild(tr[i]);
		}


	}
	function loadData(){
		var trs = document.getElementsByTagName('tr');
		for (var i=1;i<trs.length;i++){
			var tds = trs[i].getElementsByTagName('td');
			tds[0].innerHTML = data[i-1]["姓名"];
			tds[1].innerHTML = data[i-1]["语文"];
			tds[2].innerHTML = data[i-1]["数学"];
			tds[3].innerHTML = data[i-1]["英语"];
			data[i-1]["总分"] = parseInt(data[i-1]["语文"])+parseInt(data[i-1]["数学"])+parseInt(data[i-1]["英语"]);
			tds[4].innerHTML = data[i-1]["总分"];
			}

		}


		function sort(e){
			var subject = e.innerHTML;
			var Score = [];
			for (var i=0;i<data.length;i++){
				Score[i] = parseInt(data[i][subject]);
			}

			for (var i=0;i<Score.length;i++){
				for (var j=i;j<Score.length;j++){
					if (Score[i]<Score[j]){

						var temp = data[i];
						data[i] = data[j];
						data[j] = temp;
						
						var temp1 = Score[i];
						Score[i]  = Score[j];
						Score[j]  = temp1;

					}
				}
			}

			loadData();
		}