	if (getCookie('login')) var login=getCookie('login')
	if (getCookie('mobile')) var mobile=getCookie('mobile')
	setTimeout('xconnect(\''+getCookie('login')+'\',\''+getCookie('mobile')+'\')',1)
	var op1=1
	var operand1=-1
	var op2=0
	var operand2=1
	var fr1='fr1'
	var fr2='fr2'
	var biggy = 'biggy'
	var pointer, ajax_req, page_url, xsum=1
	var mid 
	var running=0; 
	var u=0, ut, mr=0
	var preview_count = []
	var coming_soon = "Coming Soon!"
	var promptly="Please enter a password with which we will encrypt your photo!";
	var seperator = "|"
	var toClientID, to_clientid, to_user, to_mid, my_mid,from_user
	var to_login
	var err_img = "assets/avatars/10.png" 
	var err_img1 = 'assets/images/tie.jpg'
	var UserID
	var toLogin
	var frmLogin
	var terms
	var socket
	var host
	var port=7002
	var chatSuccess
	var now2
	var now1
	var now3 = 0
	var html = document.documentElement;
	var jChatWn
	var	msgContainer
	var	msgHeader
	var	msgBody
	var	msgInputBox
	var Server;
	var enter = '0'
	var msg=''
	var uOnline=''  	
	var to_user
	var oColor = 'grey';
	var winCount=25
	var openWin = []
	var ctr = 0
	var mid=getCookie('mid')
	var my_login=getCookie('login')
	var arr_login=[]
	var arr_mid=[]
	var arr_cid=[]
	var arr_ip=[]
	var cid=1
	var msg_out = ''
	var labCol 
	var cData
	var x_login
	var pic_err = 'assets/avatars/a7.png'
	var err_img = 'assets/avatars/a7.png'
	var msg_out
	var old_msg_out=''
	var msg_id 
	var msg_no=0
	var showWin=[]
	var posWin=25
	var actWin=0
	var txt_msg, msg, img_src, msg_attach, img_attach, div_attach, preview_count=[]
	var msg_evt
	var final_msg
	var t
	var stream = []
	var UserID
	var who, asked=[], asked2 = []
	var a = [], a2 = [], sent_to
	var xsum=1000
	var payload, msg_type, clientID, frmLogin, txtMsg		 
	var ctrx=0
	var img
	var fmx
	var fmy
	var a3=''
	var allowed="0";
	var out_img1
	var in_img1
	var btn1
	var webcam
	var running=0
	var video_camera
	var rc=1;
	var to_login
	var dx, dy, dz
	var toMID
	var UserID
	var who
	var x_msg
	var mb,UserID, str, i, ob,cls='www_box2 uo'
	var mob
	var to
	var files
	var myDropzone
	var fn
	var fn
	var from, m, n 
	var strR=''
	var m, n
	var nh=25
	var i=0
	var nd=[]
	var nt=[]
	var old_str
	var mb
	var vd
	var vid
	var vrooms = [ ]
	var mob
	var to
	var ext
	var files
	var myDropzone 
	var fn
	var lc
	var long_code
	var users=[]
	var mobiles=[]
	var j
	var ul 
	var type
	var xuser=[ ]
	var xhost=[ ]
	var x
	var domain='txt.am'
	var ttx
	var x=[],base
	var portIM=8888
	var t1=document.createElement('div')
	var t2=document.createElement('div')
	var wo=document.createElement('div')
	var windowObjectReference;
	var strWindowFeatures = "menubar=no,location=no,resizable=no,scrollbars=no,status=no,width=400,height=600";
	var logins=[]
	var mobiles=[]
	var usersOnline,uoHeader,sc,users=[];
	var cntR=0;
	var userData=[]
	var msg,data,type,stx=''
	var script
	var ls
	var x=[],base
	var bd
	var tmrIn
	var tmrOut
	var in_animate=false
	var out_animate=true
	
	function $$(objID) {
		return document.getElementById(objID)
	}
	//Load all JS libraries
	['https://txt.am/assets/js/jquery.js','https://terrawire.com/assets/js/xmalert.js','https://terrawire.com/assets/js/alerts.js','https://terrawire.com/assets/js/mpopup.js','https://terrawire.com/assets/js/bootstrap.js','https://terrawire.com/assets/js/dropzone.js','https://terrawire.com/assets/js/jquery-confirm.js'].forEach(function(src) {
		script = document.createElement('script');
		script.src = src;
		script.async = false;
		document.head.appendChild(script);
	});	

	//	Load All CSS files
	['https://gaysugardaddyfinder.com/assets/css/effects.css','https://txt.am/assets/css/magic.css','https://txt.am/assets/css/stream.css','https://gaysugardaddyfginder.com/assets/css/jquery-confirm.css'].forEach(function(src) {
		cb(src)
	});	
	
	function cb(src) {
		var l = document.createElement('link'); l.rel = 'stylesheet';
		l.href = src;
		var h = document.getElementsByTagName('head')[0]; h.parentNode.insertBefore(l, h);
	};

	function toggle_users() {
		$$('swo').style.cssText='font-size:12px!Important!'
		if ($$('swo').textContent=='SHOW WHOS ON') { 
			$$('swo').innerHTML='<span style="font-size:12px!Important">HIDE WHOS ON</span>'
			$$('iswo').src='https://terrawire.com/images/chevron-down.png'
			$('#whos_online').show()
		} else {
			$$('swo').innerHTML='<span style="font-size:12px!Important">SHOW WHOS ON</span>'
			$$('iswo').src='https://terrawire.com/images/chevron-right.png'
			$('#whos_online').hide()
		}
	}

	function msg() {
				mObj = [{	'msg'			: msg,
							'toUser'		: toUser, 
							'fromImg'		: fromImg,
							'fromUser'		: fromUser,
							'fromLongCode'	: fromLongCode}];			
	}
	
	function qs(name, url) {
		if (!url) {
		  url = window.location.href;
		}
		name = name.replace(/[\[\]]/g, "\\$&");
		var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
			results = regex.exec(url);
		if (!results) return null;
		if (!results[2]) return '';
		return decodeURIComponent(results[2].replace(/\+/g, " "));
	}

	function toggleUO() {
		if (document.getElementById('sc').style.display=='none') {
			document.getElementById('sc').style.display='block'
		} else {
			document.getElementById('sc').style.display='none'
		}
	}
	
	function whos() {
		socket.send(JSON.stringify({'type':'Q', 'data': 1}))
	}
	
	function user_on(login) {
		clearTimeout(ttx)
		if (getCookie('logged').indexOf(login)>=0) return false
		setCookie('logged',getCookie('logged') + '|' + login)
//		ntfy(login+ ' just signed in!')
	}
	
	function user_off(login) {
		ttx=setTimeout(function(){
//			ntfy(login+ ' just left')
		},1000)
	}	

	function addUser(userLogin,userMobile) {
		if (logins.indexOf(userLogin)<0) {
			logins.push(userLogin)
			mobiles.push(userMobile)
			userData=[]
		}
		for (var i=0; i < logins.length; i++) {
			userData[i] = ({'user': logins[i], 'mobile' : mobiles[i] })
		}
		$('#whos_online').html(buildOnlineList(userData))
	}
	
	function removeUser(userLogin,userMobile) {
	//	console.clear()
		console.log('BEFORE')
		console.log(logins)
		console.log(users)
		console.log(userData)
		logins.splice(logins.indexOf(userLogin),1)
		mobiles.splice(logins.indexOf(userLogin),1)
		userData=[]
		for (var i=0; i < logins.length; i++) {
			userData[i] = ({'user': logins[i], 'mobile' : mobiles[i] })
		}
		$('#whos_online').html(buildOnlineList(userData))
		console.log('AFTER')
		console.log(logins)
		console.log(users)
		console.log(userData)
	}
	var fromUser, last_msg=''
	function xconnect(a,b,c) {
		if (!a) var a = getCookie('login')
		if (!b) var b = getCookie('mobile')
		if (!c) var c = getCookie('img')
		var h = 'wss://txt.am:'+portIM+'/?login='+a+'&mobile='+b+'&source='+window.location.host+'&fromImg='+getCookie('img')
		console.log(h)
		socket = new WebSocket(h);
		socket.onerror = function(msg) {
			//location.reload()
		};
		socket.onopen = function(msg) {
			socket.send(JSON.stringify({'type':'Q'}))
		};
		socket.onmessage = function(ms) {
			msg=JSON.parse(ms.data)
			console.log(msg)
			data=msg.data
			type=msg.type
			console.log(type)
			if (type=='NEW_VIDEO') {
						notify_user(data.data)
						fromUser=data.fromUser
						$.confirm({
							theme: 'modern',
							title:'Imcoming Video call',
							content: 'NEW VIDEO IM REQUEST FROM '+ data.fromUser.toUpperCase(),
							buttons: {
								Accept: {
									text: 'Accept',
									btnClass: 'btn-blue',
									action: function(){
										location.href='channel.html?channel='+fromUser
									}
								},
								Reject: {
									text: 'Reject',
									btnClass: 'btn-red'
								}
							}
						});

						return				
				} else if (type=='NEW_CALL') {
						notify_user(data.data)
						fromUser=data.fromUser
						$.confirm({
							theme: 'modern',
							title:'Imcoming Video call',
							content: 'CALL FROM '+ data.fromUser.toUpperCase(),
							buttons: {
								Accept: {
									text: 'Accept',
									btnClass: 'btn-blue',
									action: function(){
										//SAME AS SMS URL
										location.href=''
									}
								},
								Reject: {
									text: 'Reject',
									btnClass: 'btn-red'
								}
							}
						});

						return				
				} else if (type=='VT') {
					if (last_msg !== data.msg) {
						in_msg=data.msg.split('|')[0]
						last_msg=in_msg
						console.log('INCOMING: ' + incoming)
						incoming(in_msg)
					}
				return				
			} else if (type=='NEW_MAIL') {
				notify_user(data.msg)
				return				
			} else if (type=='C') {
				if (login !== data.user) {
					user_on(data.user)
					addUser(data.user, data.mobile)
					if (document.getElementById('onlineTotalCountBalloon1')) document.getElementById('onlineTotalCountBalloon1').textContent=users.length
				}
			} else if (type=="D") {
				user_off(data.user)
				removeUser(data.user, data.mobile)
				users.splice(users.indexOf(data.user),1)
				$('#whos_online').html(buildOnlineList(users))
				if (document.getElementById('onlineTotalCountBalloon1')) document.getElementById('onlineTotalCountBalloon1').textContent=users.length
			} else if (type=="W") {
				user_login(msg.data)
			} else if (type=="Q") {
				users=data
				console.log(data)
				$('#whos_online').html('')
				$('#whos_online').html(buildOnlineList(data))
				if (document.getElementById('onlineTotalCountBalloon1')) document.getElementById('onlineTotalCountBalloon1').innerHTML=users.length
			} else if (type=="O") {
				users=data
				$('#whos_online').html('')
				bd=buildOnlineList(data)
				$('#whos_online').html()
				if ($$('w_o')) $$('w_o').innerHTML(bd)
				if (document.getElementById('onlineTotalCountBalloon1')) document.getElementById('onlineTotalCountBalloon1').textContent=users.length
			} else if ((type=='M')) {
				ntfy('New Message from ' + data.fromUser,0)
				data=(data[0]===undefined)?data:data[0];
				var fromLongCode=data.fromLongCode
				to_user=data.fromUser
				setCookie('chatting_with_login',to_user)
				var fromImg=data.fromImg
				UserID=to_user
				var txtMsg=data.msg
				if (msg.data.msg !==undefined) {
					if (msg.data.msg.type=='V'){

					}
				}
				if (openWin) {
					if (openWin.indexOf(to_user+'') < 0) {
						initMsg(to_user)
					}
				} else {
					if (document.getElementById('msgOuterBox'+to_user)) {
						document.getElementById('msgOuterBox'+to_user).style.display='block'
						showWin[to_user] = 'block'
					}	
				}

				if (txtMsg === undefined) return false
				txt_msg = document.createElement('div')
				txt_msg.innerHTML=txtMsg
				//Received a Text Message
				setCookie('chatting_with',to_user)
				var my_pic = "<img style=\"margin-right:0px;width:30px;border-radius:4px;border:4px solid white;box-shadow: 0 0 1px #000\" class=\"www_box\" src=\""+fromImg+"\">"
				var ini_msg = "<div style='margin:5px;border-bottom:0px solid skyblue;width:190px;font-family:Ubuntu Condensed;font-size:16px;background:none;color:#000;text-align:left'><table border=0 style='width:190px;background:none' cellspacing=0 cellpadding=0><tr><td align=left style='width:40px;max-width:40px;padding:0;margin:0'>"
				var pre_msg = "</td><td align=left style='background:none;text-align:left;padding-left:10px;word-wrap:break-word'>"
				var end_msg = "</td></tr></table></div>"
				var ele = document.createElement("div")
				mb = document.getElementById('msgBody' + UserID)
				ele.innerHTML = ini_msg + my_pic + pre_msg + txt_msg.innerHTML + end_msg
				mb.appendChild(ele)
				mb.scrollTop = mb.scrollHeight;
			}
			repaint()				
		}
	}

	function notify_user(msg) {
		setTimeout('getMail()',1)
		$$('notifyUser').style.display='block'
		$$('notifyUser').innerHTML=msg
		setTimeout(function(){
			$$('notifyUser').innerHTML=''
			$$('notifyUser').style.display='none'
		},10000)
	}

	function getMail() {
		console.log('https://gaysugardaddyfinder.com/x_view_message.php?xid='+qs('xid'))
		var request = $.ajax({
			url: 'https://gaysugardaddyfinder.com/x_view_message.php?xid='+qs('xid'),
			type: "GET",
			dataType: "html",
			cache: false,
			success: function(msg) {
				if ($$('inbox')) {
					$$('inbox').innerHTML=msg
					$('html, body').animate({scrollTop:$(document).height()}, 'slow');
					setTimeout('getMail()',1000)

				}
			}
		})
	}
	var msgInAIDQ=[]
	var msgInTextQ=[]
	var msgPlayedQ=[]
	var aid=guid()
	//if (volumeControl) volumeControl.setVolume(0)
	function incoming(txt) {
		if ($$('inData').innerHTML.indexOf('STRONGLY RECOMMENDED')>0) $$('inData').innerHTML=''
		setTimeout(function(){
			txt2Vox(txt)
		},1)
			msgInTextQ.push(txt)
			msgInAIDQ.push(aid)
		if ($$('inData').innerHTML.length>100) {
			$$('inData').innerHTML=txt
		} else {
			$$('inData').innerHTML=$$('inData').innerHTML+txt+". "
		}
		return txt
	}
	var aid
	var adata=[]
	var txt1
	var audio_file
	function txt2Vox(txt1) {
		var request = $.ajax({
			url: 'https://lushtalk.com/audio/index.php?lang_text='+txt1+'&lang_code='+getCookie('x_from')+'&aid='+getCookie('login') + '-' + guid()+'&lang_name='+getCookie('x_from_lang'), 
			type: "GET",
			dataType: "html",
			cache: false,
			success: function(msg) {
				adata=JSON.parse(msg)
				var audio=new Audio()
				audio.src=adata.file
				aid=adata.aid
				audio_file='/media2/audio_file_store/' + aid + '.mp3'
				//if (volumeControl) volumeControl.setVolume(1)
				audio.play()
				audio.onended = function() {
					//if (volumeControl) volumeControl.setVolume(0)
					msgPlayedQ.push(adata.file)
					var ptr=msgInAIDQ.indexOf(aid)
					msgInTextQ.splice(ptr,1)
					msgInAIDQ.splice(ptr,1)
						request = $.ajax({
						url: 'https://lushtalk.com/audio/clean.php?aid='+aid+'&from='+getCookie('chatting_with_login')+'&to='+getCookie('login')+'&lang='+getCookie('x_from')+'&text='+txt1+'&translation='+audio_file, 
						type: "GET",
						dataType: "html",
						cache: false
					})
				};
			}
		})
	}

	var bg='lavenderblush'
	function buildOnlineList(urs) {
		users=urs
		var ul=document.createElement('div')
		for (var k=0;k<urs.length;k++) {
			var li=document.createElement('div')
			// alert(urs[k].user)
			if (logins) {
				if (logins.indexOf(urs[k].user)<0) {
					logins.push(urs[k].user)
					mobiles.push(urs[k].mobile)
				}
			} else {
				logins.push(urs[k].user)
				mobiles.push(urs[k].mobile)
			}
			userData[k] = ({'user': logins[k], 'mobile' : mobiles[k] })
			li.id=urs[k].user
			li.style='vertical-align:middle;cursor:hand;cursor:pointer;height:30px;padding-left:5px;margin:0;background:transparent;font-size:12px!Important;font-family:Open Sans;background:'+bg
			var ss='<table><tr><td><span style="font-size:0.8em!Important;font-family:Open Sans!Important;color:#000!Important"><img src="https://terrawire.com/images/a43.png" style="border-radius:25px;width:25px;margin-top:2px" onclick="javascript:initMsg(\''+users+'\',\''+users[k].mobile+'\')"></span></td>'
			ss=ss+'<td style="min-width:100px;max-width:100px"><span style="margin-left:5px;margin:10px;margin-top:2px;font-size:14px!Important;font-family:Open Sans!Important;color:#000!Important" onclick="javascript:initMsg(\''+users[k].user+'\',\''+users[k].mobile+'\')">'+users[k].user.substring(0,10).toUpperCase()+'</span></td>'
			ss=ss+'<td><span style="" onclick="javascript:initMsg(\''+users[k].user+'\',\''+users[k].mobile+'\')"><span style="border-radius:2px;padding:5px;font-size:10px;background:cyan" class="www_box2">IM</span></span></td>'
			ss=ss+'<td><span style="" onclick="javascript:initVideo(\''+users[k].user+'\',\''+users[k].mobile+'\')"><span style="border-radius:2px;padding:5px;font-size:10px;background:#333;color:#fff" class="www_box2">VIDEO</span></span></td>'
			ss=ss+'<td><span style="" onclick="javascript:initMsg(\''+users[k].user+'\',\''+users[k].mobile+'\')"><span style="border-radius:2px;padding:5px;font-size:10px;background:red;color:#fff" class="www_box2">SMS</span></span></td></tr></table>'
			li.innerHTML=ss
			ul.append(li)
			bg=(bg=='lavenderblush')?'lightcyan':'#f0f0f0'
		}
		return ul
	}

	var jMsg
	function msg_send_sms(to_user) {
		initMsg(from_user)
		var request = $.ajax({
			url: 'https://smsgone.com:7799/sms/'+to_user+'/'+from_user, 
			type: "GET",
			dataType: "html",
			cache: false,
			success: function(msg) {
				
			}
			
		})
	}

	function voice(to,from,txt) {
		if (!cnf) var cnf='SMS Sent'
		var url = 'https://sugardaddydays.com/voice/call.php?to=' + to + '&from=' + from + '&message=' +  txt + '&message_type=INDEX_NOTIFY_CODE'
		var request = $.ajax({
			url: url, 
			type: "GET",
			dataType: "jsonp",
			cache: false,
			success: function(msg) {
			}
		})
	}	

	function sms(mobile,to_mobile) {
		var url = 'https://txt.am/gateway/sms.php?to=' + to_mobile + '&from=19256669444&msg='+getCookie('login')+' has invited you to a Video Chat. Click below to join the call\r\n\1\r\n\1https://txt.am:9001/stream/channel.html\?login='+getCookie('login')
		console.log(url)
		var request = $.ajax({
			url: url, 
			type: "GET",
			dataType: "jsonp",
			cache: false,
			success: function(msg) {
				
			}
		})
	}	

	function isNumber(n) {
	  return !isNaN(parseFloat(n)) && isFinite(n);
	}
	
			setTimeout('ww()',100);
			function ww() {
				setCookie('w_w',window_width())
			}
			var rc,posWin,actWin=0
	
	function setUser(to_user) {
		setCookie('chatting_with_login', to_user)
	}
	function initSMS(toLogin) {
		setCookie('chatting_with_login', toLogin)
		$('#sms_holder').show()
		$('#jModal').show()
		
	}
	function cancel_demo_sms(toLogin) {
		$('#sms_holder').hide()
		$('#jModal').hide()
		$('#j_modal_text').val('')
		
	}
	function initVideo(toLogin, toMobile) {
		setCookie('chatting_with_login', toLogin)
		setCookie('chatting_with_mobile', toMobile)
		video_call(toLogin)
	}
	function initPhoto(toLogin, toMobile) {
		setCookie('chatting_with_login', toLogin)
		setCookie('chatting_with_mobile', toMobile)
		photo_call(toLogin)
	}
	var mmx, mmy, mmt, mmh
	function initMsg(toLogin, toMobile) {
			var tw='100%'
			var th=30
			var mw='100%'
		setCookie('chatting_with_login', toLogin)
		setCookie('chatting_with_mobile', toMobile)
		to_user=toLogin
		UserID=to_user
		to_login=toLogin
		var w_h=screen_dimensions()[1] - 180
		var w_w=screen_dimensions()[0] - 20
		if ((openWin) && (openWin.indexOf('' + UserID) < 0)) {
			if (toLogin) showWin[UserID] = 'block'
			x_login=my_login
			jChatWn = document.createElement('div')
			var noOpen = 'msgBody' + UserID + ''
			openWin[ctr] = '' + UserID
			jChatWn.id = 'msgOuterBox' + UserID
			html.appendChild(jChatWn)
			if (getCookie('isMobile')=='mobile') {
				jChatWn.className = "www_box2 msgOuterCont"
				jChatWn.style.maxWidth='100%'
				jChatWn.style.width='100%!Important'
				jChatWn.style.minHeight='100%'
				jChatWn.style.height='100%'
				jChatWn.style.margin='20px!Important'
				mmx='100%'
				mmy='100%'
				mmt='100%'
				mmh='70px'
			} else {
				jChatWn.className = "www_box2 msgOuterCont"
				jChatWn.style.maxWidth='300px'
				jChatWn.style.width='300px!Important'
				jChatWn.style.maxHeight='500px'
				jChatWn.style.minHeight=w_h+'px'
				jChatWn.style.margin='20px!Important'
				mmx='300px'
				mmy='500px'
				mmt='100%'
				mmh='70px'				
			}
			posWin=0
			if (rc == '1')	{
				jChatWn.style.cssText = 'position:absolute;z-index:9999999999999999999999999999999;max-width:'+mmx+';width:'+mmx+';height:'+mmy+';bottom:0px;right:' + posWin
				rc=0;
			} else {
				jChatWn.style.cssText = 'position:absolute;z-index:9999999999999999999999999999999;max-width:'+mmx+';width:'+mmx+';height:'+mmy+';bottom:0px;right:' + posWin
				rc=1;
			}
			jChatWn.innerHTML = 	'<div id="msgContainer" style="overflow:hidden;width:'+mmx+';max-width:'+mmx+';height:100%!Important;border-radius:2px" onclick="setUser(\'' + to_user + '\');">' +
										'<div class="msgHeader" style="width:100%;max-width:100%;height:35px;padding-bottom:10px">' +
											'<div class="row">' +
												'<div class="col-xs-16" style="font-family:Open Sans Condensed;overflow:hidden">' +
														'<table border=0 style="width:100%;background:url(images/xxx_black.jpg);height:50px;background-size:cover">'+
															'<tr>'+
																'<td></td><td><a href="javascript:video_call(\''+to_user+'\')"><img src="assets/images/vcx.png" style="width:25px;margin-left:25px"></a></td>' +
																'<td style="color:#fff; text-transform: uppercase;">' + to_user + '</td>'+
																'<td><img src="images/exit.png" onclick="close_chat(\''+to_user+'\')" style="width:20px;height:20px;padding-right:0;margin=left:10px"></td>'+
																'</tr>'+
														'</table>'+
												'</div>' +
											'</div>' +
										'</div>' +
										'<div id="msgBody' + to_user + '" class="msgBody" style="width:100%;height:100%!Important;overflow:hidden;max-height:100%!Important;color:'+oColor+'"></div>' +
										'<div id=\'dz1\' name=\'dz1\' class=\'dropzone dropzone-previews needsclick dz-clickable\' style=\'display:none;border:none;position:absolute;bottom:0\'></div>'+
										
										'<div id="im_footer' + to_user + '" style="max-width:'+mmx+';width:100%">' +
											'<div onmouseover="this.style.cursor=\'crosshair\'" style="z-index:9999999999999999999999999999999999999;margin:0;width:'+mmt+';position:absolute;bottom:0;border:1px solid silver;padding-top:10px;height:' + 1.5*th + 'px;padding-left:35px;background:#fff;text-shadow:1px 1px 1px #fff;" id="txt' + to_user + '" contentEditable="true"></div>' +	
											'<img src="https://sugardaddydays.com/assets/images/pclip.png" id="pclip'+to_user+'" onclick="javascript:show_attach()" style="position:absolute;width:30px;bottom:10px;z-index:999999999999999;cursor:hand;cursor:pointer">' +
										'<img src="https://sugardaddydays.com/assets/x_green.png" id="btnSend'+to_user+'" onclick="javascript:msg_send()" style="display:none;position:absolute;width:100px;bottom:2px;right:2px;z-index:999999999999999;cursor:hand;cursor:pointer">' +
										'</div>' +
									'</div>'									
			document.getElementById('txt'+to_user).style.width = '100%'
			document.getElementById('txt'+to_user).style.fontFamily='Open Sans Condensed'
			document.getElementById('txt'+to_user).style.fontSize='16px'
			document.getElementById('txt'+to_user).className='www_box2'
			
			document.getElementById(noOpen).innerHTML = ' '
			document.getElementById(noOpen).style.zIndex = '10000'
			jChatWn.style.display="block"
			ctr++
			actWin++
		} else  {
			if (document.getElementById('msgOuterBox'+to_user)) {
				if (document.getElementById('msgOuterBox'+to_user).style.display=='none') {
					document.getElementById('msgOuterBox'+to_user).style.display='block'
					actWin++
				}
			}		
		}
		repaint()
	}
	function close_chat(obj) {
		document.getElementById('msgOuterBox'+obj).style.display='none'
		posWin=posWin - 240
		var index=openWin.indexOf(obj)
		openWin.splice(index,1)
		showWin[obj]
		ctr--
		actWin--				
		
		repaint()
	}
	function repaint() {
		
		if (openWin) {
		posWin=10
		for (var n=0;n<openWin.length;n++) {
			if (showWin[openWin[n]] == 'block') {
		
				if (document.getElementById('msgOuterBox'+openWin[n])) document.getElementById('msgOuterBox'+openWin[n]).style.right = posWin+'px'
				posWin=posWin + 240
			}
		}
		}
	}

	function deduct() {
		document.getElementById('cr').textContent = 160 - document.getElementById('message_text').textContent.length*1
		if ((160 - document.getElementById('message_text').textContent.length*1)<1) {
			document.getElementById('message_text').contentEditable='false'
			document.getElementById('message_text').textContent=mc
		} else {
			mc=document.getElementById('message_text').textContent
		}
	}
	function generateRandomString(j){
		if (!j) j=16
		var op=''
		var arr=new Array('a','b','c','d','e','f','i','j','k','m','n','p','q','r','s','t','u','v','w','x','y','z',0,1,2,3,4,5,6,7,8,9,0,0,1,2,3,4,5,6,7,8,9,0)
		for (k=0;k<j;k++) {
			var inx=randomIntFromInterval(0,arr.length-1)
			op += arr[inx]
		}
		return op;
	}
	function guid() {
	  function s4() {
		return Math.floor((1 + Math.random()) * 0x10000)
		  .toString(16)
		  .substring(1);
	  }
	  return s4() + '-' + s4();
	}
			
	function qs(name, url) {
		if (!url) {
		  url = window.location.href;
		}
		name = name.replace(/[\[\]]/g, "\\$&");
		var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
			results = regex.exec(url);
		if (!results) return null;
		if (!results[2]) return '';
		return decodeURIComponent(results[2].replace(/\+/g, " "));
	}

	function video_call(to_login) {
		setCookie('to', getCookie('chatting_with_login'))
		if (!getCookie('chatting_with_login')) setCookie('chatting_with_login', to_login)
		sms(getCookie('chatting_with_login'),getCookie('login'))
		setCookie("accepted_users", to_user)
		setCookie('user_input_h', to_user + '|' + 'mobile' + '|' + '15')

		var vmsg={		'type':	'V',
						'cont':	'<table><tr rowspan=2><td><img src="https://txt.am/phone_calling.gif"></td></tr><tr><td colspan=2>Incoming video Call from ' + getCookie('login') + '</td></tr><tr><td><a href="https://txt.am:9001/video/video.html?to='+getCookie('login')+'&from='+getCookie('chatting_with')+'" class="btn btn primary">Accept</a></td><td><input class="btn btn red" value="Decline"></td></tr></table>'
				}
								
		to_user=getCookie("chatting_with_login")
		objData={		'toUser'		: 	getCookie('chatting_with_login'),
						'fromUser' 		: 	getCookie('login'),
						'fromImg' 		: 	getCookie('img'),
						'msg' 			: 	vmsg,
						'fromLongCode'	:	getCookie('long_code')
				}
		jMsg=JSON.stringify({'type':'M','data': objData})
		console.log(jMsg)
		if (socket.readyState==1) {
			try {
					socket.send(jMsg)
				}
			catch (e){
				if (iErr < 10) {
				//	setTimeout('restart_chat()',500)
					iErr++;
				} else {
					alert('I tried 10 times and I give up. Ok to refresh the page?')
				}
			}
		} else {
			if (socket.readyState==0) {
				if (iErr < 10) {
			//		setTimeout('restart_chat()',500)
					iErr++;
				} else {
					alert('I tried 10 times and I give up. Ok to refresh the page?')
				}
			}
		}	
		//Now, we generate a link to send to the user we want to invite - so that they can click this link and join the video call directly, without having to deal with any confirmations etc.
		//We can bypass confirmations by setting the value of 'active' cookie to equal the login name of the member who they are inviting to the video call
		location.href='channel.html?channel='+getCookie('login')+'&action=1'
	}			

	function init_video() {
		if (socket.readyState==1) {
			try {
					socket.send(jMsg)
				}
			catch (e){
				if (iErr < 10) {
				//	setTimeout('restart_chat()',500)
					iErr++;
				} else {
					alert('I tried 10 times and I give up. Ok to refresh the page?')
				}
			}
		} else {
			if (socket.readyState==0) {
				if (iErr < 10) {
			//		setTimeout('restart_chat()',500)
					iErr++;
				} else {
					alert('I tried 10 times and I give up. Ok to refresh the page?')
				}
			}
		}	
		//Now, we generate a link to send to the user we want to invite - so that they can click this link and join the video call directly, without having to deal with any confirmations etc.
		//We can bypass confirmations by setting the value of 'active' cookie to equal the login name of the member who they are inviting to the video call
		location.href='channel.html?channel='+getCookie('login')+'&init=1'
	}			
			var myDropzone
			Dropzone.autoDiscover=false
			function show_attach() {
					$('#dz1').show()
					setCookie('attach_id',guid())
					var url="https://gaysugardaddyfinder.com/upload.php"
					if (!myDropzone) {
						myDropzone = new Dropzone("div#dz1", { 
							url: url,
							maxFilesize: 5000
						});
					}
					myDropzone.on("addedfile", function(file) {
						//$('.dz-details').hide()
						files++
						if (file.type.indexOf('png')>=0) ext='png'
						if (file.type.indexOf('jpg')>=0) ext='jpg'
						if (file.type.indexOf('gif')>=0) ext='gif'
						if (file.type.indexOf('tif')>=0) ext='tif'
						if (file.type.indexOf('bmp')>=0) ext='bmp'
						if (file.type.indexOf('psd')>=0) ext='psd'
						if (file.type.indexOf('eps')>=0) ext='eps' 
						if (file.type.indexOf('jpeg')>=0) ext='jpg'
						if((file.type=='video/x-ms-wmv')||(file.type=='video/avi')) {
							alert('Only .mpg .mpeg and .mp4 files allowed for now')
							return false
						} else {
							files++
						}
					});
					myDropzone.on("totaluploadprogress", function(progress) {
						
					})
					
					myDropzone.on("complete", function(file) {
					var smem=document.getElementById('dz1').textContent
					smem.className='www_box www_box5'
					document.getElementById('dz1').textContent=''
					$('#dz1').hide()
					var mb = document.getElementById('msgBody' + getCookie('chatting_with_login') + '')
					setCookie('chatting_with_login',to_user)
					var my_pic = "<img onerror='this.src=\"http://sugardaddydays.com/assets/no_data.png\"' style=\"margin-right:0px;width:35px;border-radius:4px;border:4px solid white;box-shadow: 0 0 1px #000\" class=\"www_box\" src=\""+getCookie('img')+"\">"
					var ini_msg = "<div style='margin:5px;border-bottom:0px solid skyblue;width:100%;font-family:Economica;font-size:16px;background:none;color:#000;text-align:left'><table border=0 style='width:225px;max-width:225px;background:none' cellspacing=0 cellpadding=0><tr><td align=left style='width:40px;max-width:40px;padding:0;margin:0'>"
					var pre_msg = "</td><td align=left style='background:none;text-align:left;padding-left:10px;word-wrap:break-word'>"
					var end_msg = "</td></tr></table></div>"
					var ele = document.createElement("div")
					var ms='You have a new photo message!     https://gaysugardaddyfginder.com/w/'+getCookie('attach_id') + '.' + file.name.split('.')[1]
					setCookie('sms_message',ms)
					initPhoto(getCookie('chatting_with_login'), getCookie('chatting_with_mobile'))
						if (file.name!=fn) {
							ext=file.name.split('.')[1]
							if((ext=='mp4')||(ext=='wmv')) {
								var link = '<video src=\'https://gaysugardaddyfginder.com/w/' + getCookie('attach_id') + '.mp4' + '\' style=\'width:100px;\' autoplay loop></video>'
							} else {
								var link = '<img  src=\'https://gaysugardaddyfginder.com/w/' + getCookie('attach_id') + '.' + ext + '\' style=\'width:100px;border:10px solid white;border-bottom:30px solid white\' class=\'www_box2 www_box5\'>'
							}
							var db=document.createElement('div')
							db.innerHTML = ini_msg + my_pic + pre_msg + link + end_msg
							db.innerHTML = link
							mb.appendChild(db)
							db=''
							mb.style.width='225px'

							setCookie("accepted_users", to_user)
							fn=file.name
							setCookie('user_input_h', to_user + '|' + 'mobile' + '|' + '15')

							
							to_user=getCookie("chatting_with_login")
							objData={		'toUser'		: 	getCookie('chatting_with_login'),
											'fromUser' 		: 	getCookie('login'),
											'fromImg' 		: 	getCookie('img'),
											'msg' 			: 	link,
											'fromLongCode'	:	getCookie('long_code') 
									}
							jMsg=JSON.stringify({'type':'M','data': objData})
							
							if (socket.readyState==1) {
								try {
										socket.send(jMsg)
									}
								catch (e){
									if (iErr < 10) {
										setTimeout('restart_chat()',500)
										iErr++;
									} else {
										alert('I tried 10 times and I give up. Ok to refresh the page?')
									}
								}
							} else {
								if (socket.readyState==0) {
									if (iErr < 10) {
										setTimeout('restart_chat()',500)
										iErr++;
									} else {
										alert('I tried 10 times and I give up. Ok to refresh the page?')
									}
								}
							}					

							
						}	
					});
					$("div#dz1").click()
			}			
			$(document).keyup(function(e) {
				if ((e.target) && (e.target.textContent !='')) {
						if ( e.keyCode == 13 ) {
							e.preventDefault()
							to_user=getCookie("chatting_with_login")
							objData = {	msg					: 	e.target.textContent,
										toUser				: 	getCookie("chatting_with_login"),
										fromImg				: 	getCookie('img'),
										fromUser			: 	my_login,
										fromLongCode		: 	getCookie('long_code')
							}
							jMsg=JSON.stringify({'type':'M','data': objData})
							if (socket.readyState==1) {
								try {
									socket.send(jMsg)
								} catch (e){
									if (iErr < 10) {
										setTimeout('restart_chat()',500)
										iErr++;
									} else {
										alert('I tried 10 times and I give up. Ok to refresh the page?')
									}
								}
							} else {
								if (iErr < 10) {
									setTimeout('restart_chat()',500)
									iErr++;
								} else {
									alert('I tried 10 times and I give up. Ok to refresh the page?')
								}
							}
							var mb = document.getElementById('msgBody' + getCookie('chatting_with_login') + '')
							var my_pic = "<img  onerror='this.src=\"http://sugardaddydays.com/assets/no_data.png\"'  style=\"margin-right:0px;width:35px;border-radius:4px;border:4px solid white;box-shadow: 0 0 1px #000\" class=\"www_box\" src=\""+getCookie('img')+"\">"
							var ini_msg = "<div style='margin:5px;border-bottom:0px solid skyblue;width:'+mmx+';font-family:Open Sans Condensed;font-size:16px;background:none;color:#000;text-align:left'><table border=0 style='width:225px;max-width:225px;background:none' cellspacing=0 cellpadding=0><tr><td align=left style='width:40px;max-width:40px;padding:0;margin:0'>"						
							var pre_msg = "</td><td align=left style='background:none;text-align:left;padding-left:10px;word-wrap:break-word'>"
							var end_msg = "</td></tr></table></div>"
							var ele = document.createElement("div")
					
							mb.innerHTML += ini_msg + my_pic + pre_msg + e.target.textContent + end_msg
							e.target.textContent=''
							e.target.style.fontSize='16px'
							mb.style.width='225px'
							mb.style.maxHeight='300px'
							setCookie("accepted_users", to_user)
						}
					}
				});

	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	var vb=''

	function randomIntFromInterval(min,max) {
		return Math.floor(Math.random()*(max-min+1)+min);
	}

	function generateRandomString(j){
		if (!j) j=16
		var op=''
		var arr=new Array('a','b','c','d','e','f','i','j','k','m','n','p','q','r','s','t','u','v','w','x','y','z',0,1,2,3,4,5,6,7,8,9,0,0,1,2,3,4,5,6,7,8,9,0)
		for (k=0;k<j;k++) {
			var inx=randomIntFromInterval(0,arr.length-1)
			op += arr[inx]
		}
		return op;
	}
	var wl = window.location.href;
	var mob = (window.location.href.indexOf('file://')>=0);

	function setCookie(cname,cvalue)	{
		if (mob===true) {
			window.localStorage.setItem(cname, cvalue);
		} else {
			var d = new Date(); 
			d.setTime(d.getTime()+(1*24*60*60*1000)); 
			var expires = "expires="+d.toGMTString(); 
			document.cookie = cname + "=" + cvalue + "; " + expires; 
		}
	} 

	function getCookie(cname)	{ 
		if (mob===true) {
			var cvalue = window.localStorage.getItem(cname);
			return cvalue
		} else {
			var name = cname + "="; 
			var ca = document.cookie.split(';'); 
			for(var i=0; i<ca.length; i++) { 
			  var c = ca[i].trim(); 
			  if (c.indexOf(name)==0) return c.substring(name.length,c.length); 
			} 
			return ""; 
		}
	} 

	function format_sms(objSMS) {
		return ' (' + objSMS.substr(1,3) + ') ' + objSMS.substr(4,3) + '-' + objSMS.substr(7,4)
	}

	function sms_to_login(to,from,txt) {
		if (!type_sms) type_sms=''
		var cnf='SMS Sent'
		var url = 'http://txt.am/gateway/sms.php?to=' + to + '&from=' + from + '&message=' +  txt + '&type_sms='+type_sms
		var request = $.ajax({
			url: url, 
			type: "GET",
			dataType: "jsonp",
			cache: false,
			success: function(msg) {
				ntfy(cnf)
			}
		})
	}	
	
	function screen_dimensions() {
		var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
		return new Array(w, h)
	}
	
	var winH, winW

	function window_height() {
		if (document.body) {
		 winH = document.body.offsetHeight;
		}

		if (document.compatMode=='CSS1Compat' &&
			document.documentElement &&
			document.documentElement.offsetHeight ) {
			winH = document.documentElement.offsetHeight;
			return winH
		}

		if (window.innerHeight && window.innerHeight) {
			 winH = window.innerHeight;
			 return winH;
		}
	}		
		
	function window_width() {
		if (document.body) {
		 winW = document.body.offsetWidth;
		}

		if (document.compatMode=='CSS1Compat' &&
			document.documentElement &&
			document.documentElement.offsetWidth ) {
			winW = document.documentElement.offsetWidth;
			return winW
		}

		if (window.innerWidth && window.innerWidth) {
			 winW = window.innerWidth;
			 return winW;
		}
	}		
					
	function ntfy(str,title) {
		$('#title2').show()
		$('#title2').html(str)
		$$('title2').className='magictime puffIn'
		setTimeout(function(){
			$$('title2').className='magictime puffOut'
			setTimeout(function(){
				$('#title2').hide()
			},1000)
		},3000)
	}
	function qs(name, url) {
		if (!url) {
		  url = window.location.href;
		}
		name = name.replace(/[\[\]]/g, "\\$&");
		var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
			results = regex.exec(url);
		if (!results) return null;
		if (!results[2]) return '';
		return decodeURIComponent(results[2].replace(/\+/g, " "));
	}

	function user_login(x) {
		if (qs('login')=='complete') {
				$('body').xmalert({ 
				x: 'right',
				y: 'top',
				xOffset: 30,
				yOffset: 30,
				alertSpacing: 40,
				lifetime: 6000,
				fadeDelay: 0.3,
				template: 'item',
				title: '<b>Login Successful</b>',
				timestamp: x,
				imgSrc: 'favicon.png'
			});
		}
	}
	
	function clearCookie(cname) {
		var d = new Date();
		d.setTime(d.getTime());
		var expires = "expires="+d.toGMTString()-1;
		document.cookie = cname + "=" + "" + "; " + expires;
		var d = new Date();
		d.setDate(d.getDate() - 1);
		var expires = ";expires="+d;
		var name=cname;
		//alert(name);
		var value="";
		document.cookie = name + "=" + value + expires + "; path=/";   			
	}	

	
	function newMailNotify(from_img,from_login) {
		var str='<table><tr><td><img src="'+from_img+'" style="width:40px;border-radius:50px"></td><td><h4 style=";margin-left:5px;font-family:Open Sans; font-weight:300!Important;color:#333;font-size:20px">You have new mail from ' + from_login + '. <a href="inbox">Read?</a></td></tr></table>'
		ntfy(str,'blank')
	}		
	var xType=[]
	var nd=[]
	var nt=[]
	var nh=0
	var i = 0
	var old_str=''
	var imgType=[]
	var xType=[]
	function ntfy(str,type,xCol,xbg) {
		var tp=type
		if (type=="modal") {
			var mld=document.createElement("div")
			mld.id="f_modal"
			mld.style.cssText='position:fixed;width:100%;height:100%left:0;right:0;top:0;bottom:0;background:#000;opacity:0.8;z-index:999999999999999999'
			html.appendChild(mld)
			mld.style.display='block'
		}
		if (!type) type='0'
		if(!xCol) xCol='#fff'
		if(!xbg) xbg='#000'
		if (str != old_str) {
			if (type=='fail') type=5
			if (type=='failure') type=5
			if (type=='error') type=5
			if (type=='done') type=4
			if (type=='success') type=4
			if (type=='succeed') type=4
			if (type=='exit') type=10
			if (type=='info') type=11
			if (type=='modal') type=4
			xType[i]=type
			imgType[i]='assets/images/'+xType[i]+'.gif'
			imgType[0]='assets/images/010.png'
			nd[i]=document.createElement("div")
			nt[i]=document.createElement("div")
			if (tp=="modal") {
				nd[i].style.cssText="box-shadow:0 0 100px RGBA(0,0,0,0.6), 0 0 150px RGBA(25,20,100,0.3) inset;font-family:Open Sans; font-weight:300;padding:20px;display:none;right:0;left:0;margin:auto;top:0;;z-index:999999999999999999999999999999999;background:"+xCol+";width:300px;height:100px;position:absolute;border-radius:4px;opacity:1"
			} else {
				nd[i].style.cssText="box-shadow:0 0 100px RGBA(0,0,0,0.6), 0 0 150px;font-family:Open Sans; font-weight:300;padding:20px;display:none;right:0;left:0;margin:auto;top:0;;z-index:999999999999999999999999999999999;background:"+xCol+";width:300px;height:60px;position:absolute;border-radius:4px;opacity:1"
			}
			nd[i].style.background=xCol
			nd[i].style.top=nh+'px'
			nd[i].style.display='block'
			if (tp=="modal") {
				nd[i].innerHTML='<table cellspacing=5 cellpadding=0 style="background:none"><tr><td><img src="https://sugardaddydays.com/assets/images/in_yes.png" style="width:50px;height:50px;margin-top:-12px"></td><td><div id="notify_txt1" style="top:7px;position:absolute;font-size:16px;color:'+xbg+';margin:5px;padding-bottom:15px;font-family:Open Sans; font-weight:300">'+str+'</div></td></tr></table>'
			} else if (tp=="blank") {
				nd[i].innerHTML='<table cellspacing=5 cellpadding=0 style="background:none"><tr><td><div id="notify_txt1" style="top:3px;position:absolute;font-size:15px;color:'+xbg+';margin:5px;padding-bottom:10px;font-family:Open Sans; font-weight:300;margin-left:-15px">'+str+'</div></td></tr></table>'											
			} else {
				nd[i].innerHTML='<table cellspacing=5 cellpadding=0 style="background:none"><tr><td><img src="https://sugardaddydays.com/'+imgType[i]+'" style="width:25px;height:25px;margin-top:-5px"></td><td><div id="notify_txt1" style="top:5px;position:absolute;font-size:16px;color:'+xbg+';margin:5px;padding-bottom:12px;font-family:Open Sans; font-weight:300">'+str+'</div></td></tr></table>'					
			}
			nd[i].appendChild(nt[i])
			if (tp=="modal") {
				html.appendChild(nd[i])
				setTimeout('hide_ntfy('+i+')',5000)
			} else if (tp=="blank") {
				html.appendChild(nd[i])
				setTimeout('hide_ntfy('+i+')',20000)
			} else {
				html.appendChild(nd[i])
				setTimeout('hide_ntfy('+i+')',5000)
			}
			nh=nh+50 
			i++
		}
		old_str=str
	}
			
	function hide_ntfy(i) {
		nh=0
		nd[i].style.display='none'
		nt[i].innerHTML=''
	}	
				