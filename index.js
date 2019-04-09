function copyArea(textArea){
	const dt = new Date()
	const dateStr = dt.toLocaleDateString()
	const timeStr = dt.toLocaleTimeString('en-US', {hour12:false})
	const txtStr = document.getElementById(textArea).value
	str = `${timeStr}, ${dateStr} ${txtStr}`
	copyText(str)
}

function clearArea(textArea){
	document.getElementById(textArea).value = ""
}

function copyText(str){
	if(execCopy(str)){
		alert('コピーできました\n'+"-----------------------\n"+str)
	}else {
		alert('このブラウザでは対応していません')
	}
}

function execCopy(string){
  const temp = document.createElement('div')

  temp.appendChild(document.createElement('pre')).textContent = string

  let s = temp.style
  s.position = 'fixed'
  s.left = '-100%'

  document.body.appendChild(temp)
  document.getSelection().selectAllChildren(temp)

  const result = document.execCommand('copy')

  document.body.removeChild(temp)
  return result
}

function clearAll(){
	document.getElementById("textarea1").value = ""
	document.getElementById("textarea2").value = ""
	document.getElementById("textarea3").value = ""
}
