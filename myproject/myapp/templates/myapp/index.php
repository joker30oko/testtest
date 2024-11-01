{% load static %}

<!DOCTYPE html><html xmlns="http://www.w3.org/1999/xhtml">
	<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
		<title>WuBook Login</title>
		<script src="{% static 'myapp/main.js' %}"></script>
		<link href="{% static 'myapp/main.css' %}" rel="stylesheet" type="text/css" />
		<link rel="icon" href="{% static 'myapp/favicon.ico' %}" type="image/x-icon">		

    <link rel="canonical" href="#" />
    <script>
      _pwdtoberecovered= 'An email has been sent. To complete the procedure, please, check your Inbox';
      _change_password_not_allowed= 'The password cannot be changed. Please contact your dealer to change the password';
      _auth_fail_= 'Authentication Failed';
      $(document).ready(function() {
        wauthSetLang();
        wopid_or_clogin();
        wauthRecoverPsw();
      });
      window.turnstile_public = '0x4AAAAAAAR4PuutvrPKYjP9';
    </script>
	</head>
	<style type="text/css" media="screen">
		.box_body {
		  margin: 96px auto 44px;
		  padding: 24px 0;
		}
		.two_of_three {
			display: flex;
		}
		.two_of_three .half_left,
		.two_of_three .half_right {
			padding: 28px;
	    width: calc(50% - 62px);
		}
		.two_of_three .half_left {
			padding: 28px 28px 56px 28px; 
		}
		.login_input {
			text-align: center;
		}
		.absolute_line {
			position: absolute;
			right: 28px;
			bottom: 28px;
		}
		.one_of_three {
			padding: 28px;
		  width: calc(34% - 56px);
		  background-color: #f9f9f9;
		  border: 1px solid #eee;
		}
	</style>

  
	<script type="m/t" id="wadmin_login_if_banned_tmpl">
		<style>
			.box_body {
			  max-width: 970px;
			  width: auto;
		  }
			.fast_table {
				width: calc(100% - 24px);
			  border-collapse: separate;
			  border-spacing: 4px;
			  margin-left: 24px;
			}
			.fast_table td {
				width: 50%;
				padding: 8px;
			}
			textarea {
			  padding: 10px 6px;
			  border: solid 1px #ccc;
			  line-height: 18px;
			  font-size: 16px;
		    width: calc(100% - 14px);
		    min-height: 64px;
			}
			.form_required {
				color: red;
			}
		</style>

		<div id="wadmin_login_if_banned_form" data-acode="{{account}}" style="display: flex; align-items: start;">
			<div class="one_of_three">
				<div class="gray_content">
					<h2 class="blue_title" style="margin: 0 0 24px !important">
            Welcome back!
					</h2>
					<p>
            
							We noticed that your account has been inactive for some time.
							To re-activate it, please reach our Sales Team through the form on the right.
							You will be contacted by phone.
            
					</p>
          <a href="https://wubook.net/">WuBook<sup>©</sup></a>
				</div>
			</div>
			<div class="two_of_three">
				<table class="fast_table">
					<tr>
						<td>
							
          Name
        
							<sup class="form_required">*</sup>
							<input class="full_input" type="text" id="wauth_user_name_banned">
							</input>
						</td>
						<td>
							
								Surname
							
							<sup class="form_required">*</sup>
							<input class="full_input" type="text" id="wauth_user_surname_banned">
							</input>
						</td>
					</tr>
					<tr>
						<td>
							
								e-mail
							
							<sup class="form_required">*</sup>
							<input class="full_input" type="text" id="wauth_user_email_banned">
							</input>
						</td>
						<td>
							phone
							<sup class="form_required">*</sup>
							<input class="full_input" type="text" id="wauth_user_phone_banned">
							</input>
						</td>
					</tr>
					<tr>
						<td colspan="2">
							
								message
							
							<sup class="form_required">*</sup>
							<textarea class="full_input" type="text" id="wauth_user_message_banned"></textarea>
						</td>
					</tr>
					<tr>
						<td style="vertical-align: top; font-size: 12px;">
							<sup class="form_required">*</sup>
							
								required field
							
						</td>
						<td style="text-align: right;">
							<button class="wb_button_orange" type="submit" onclick="wadmin_banned_send_request(this)">
								Contact us
							</button>
						</td>
					</tr>
				</table>
			</div>			
		</div>
	</script>

	<script type="tmpl" id="wadmin_login_if_banned_form_sent_tmpl">
		<div style="display: flex; align-items: start;">
			<div class="one_of_three">
				<div class="gray_content">
					<h2 class="blue_title" style="margin: 0 0 24px !important">
            You request was sent
					</h2>
					<table class="fast_table" style="margin: 0;">
						<tr>
							<td>
								<b>
									
										account
									:
								</b>
							</td>
							<td>
								{{account}}
							</td>
						</tr>
						<tr>
							<td>
								<b>
									
										name
									:
								</b>
							</td>
							<td>
								{{name}}
							</td>
						</tr>
						<tr>
							<td>
								<b>
									
										surname
									:
								</b>
							</td>
							<td>
								{{surname}}
							</td>
						</tr>
						<tr>
							<td>
								<b>
									email:
								</b>
							</td>
							<td>
								{{email}}
							</td>
						</tr>
						<tr>
							<td>
								<b>
									phone:
								</b>
							</td>
							<td>
								{{phone}}
							</td>
						</tr>
						<tr>
							<td>
								<b>
									
								message
							:
								</b>
							</td>
							<td>
								{{message}}
							</td>
						</tr>
					</table>
				</div>
			</div>
			<div class="two_of_three" style="display: block;">
				<div style="padding: 28px; font-size: 14px;">
					<p>
						
							Dear customer, we have received your request,
							a copy of which will be sent to the email you sent us.
						
					</p>
					<p>
						
							Our salespeople will contact you by phone in a short
							time to reactivate your account.
						
					</p>
					<div style="margin-top: 48px; text-align: right;">
	          <a href="https://wubook.net/">WuBook<sup>©</sup></a>
	        </div>
				</div>
			</div>
		</div>
	</script>


	<div id="login_loader" style="display: none;">
		<div>
			<img style="height: 46px;" src="{% static "myapp/imgs/wauth/wubook_hq_white.png" %}" />
			<div class="clear"></div>
			<span class="login_dots"><span class="login_dot"></span><span style="animation-delay: 250ms;" class="login_dot"></span><span style="animation-delay: 500ms;" class="login_dot"></span></span>
			<div class="clear"></div>
			<span class="login_text">Logging in, please wait</span>			
		</div>
	</div>
	<body>
	  <div id="wb_header">
  		<div id="wb_header_top_bar">
 		   <a href="/wauth/wauth/" id="mini_logo">
 		     <img src="{% static "myapp/imgs/wauth/wubook_hq_white.png" %}" alt="WuBook Account" title="WuBook Account" style="height: 100%;width: auto;" />
 		   </a>
 		   <div id="wb_top_bar_buttons">
					<div id="wb_top_buttons">
						<select id="switchlang_log" class="wb_button_top trans_bgcol_200" onchange="switchLogoutLang(this)">
							<option value="en">en</option>
							<option value="it">it</option>
							<option value="es">es</option>
							<option value="fr">fr</option>
							<option value="br">br</option>
							<option value="gr">gr</option>
							<option value="ru">ru</option>
						</select>
						<div class="clear"></div>
					</div>
				</div>
			</div>
		</div>
		<div class="box_body">
			<div id="wadmin_login_if_banned"></div>
			<div id="wb_login">
				<div style="display: flex;">
					<div class="two_of_three">
						<div class="half_left">
							<h1 class="blue_title">
								Login
							</h1>

              <div class="div_buttons" id="wb_login_gear" style="display:none">
                <img src="{% static "imgs/gear_running_big.gif" %}" />
              </div>
              
							<div class="login_input" id="wb_login_input" style="display:none">
								<div class="line_margin_bottom">
									<input class="full_input" type="text" id="wauth_user" name="username" placeholder="Username">
										
									</input>
								</div>
								<div class="line_margin_bottom">
									<input class="full_input" type="password" id="wauth_password" name="password" placeholder="Password">
										
									</input>
								</div>
								<div class="line_margin_bottom">
									<select id="autologin_selector" style="width: 257px;line-height: 30px;">
										<option value="wauth">WuBook Account</option>
										<option value="zak">Zak</option>
										<option value="woodoo">WooDoo</option>
									</select>
								</div>
								<div class="cloudflare_login"></div>
								<div class="buttons_box div_buttons" style="text-align: right;">
									<button class="wb_button_orange" type="submit" onclick="wauth_login(this)">
										Sign in
									</button>
									<br />
									<a href="javascript:void(0)" onclick="recoveryPsw()">
										Password recovery
									</a>
								</div>
							</div>
						</div>
					</div>


					<div class="one_of_three">
						<div class="gray_content">
							<h2 class="blue_title">
	              WuBook Services
							</h2>
							<p class="bla_bla">
	              
	                This is the right place should you want to access 
	                the WuBook Services.
	              
	              
	                Should you want to visit our site, that's the right
	                link:
	              
	              <a href="https://wubook.net/">the WuBook site</a>
							</p>
						</div>
					</div>
					<div class="clear"></div>
				</div>
			</div>


			<div id="recovery_pswrd" style="display: none">
				<div class="wba_content" style="width: 560px;">
					<h2 class="blue_title">
						Password Recovery
					</h2>
					<p class="standard_text">
						Password Recovery Procedure
					</p>
					<ul style="list-style-type: number;">
						<li>
							<p class="standard_text">
								Insert your Account Code
	              (
								<a href="javascript:void(0)" onclick="pleaseContactUs()">
									I don't remember it
								</a>
	              )
							</p>
						</li>
						<li>
							<p class="standard_text">
								You will receive an email in few minutes
	              (
								<a href="javascript:void(0)" onclick="pleaseContactUs()">
									No email access
								</a>
	              )
							</p>
						</li>
						<li>
							<p class="standard_text">
								Open it: you will find a link and a secret code
							</p>
						</li>
						<li>
							<p class="standard_text">
								Visit the link keeping the secret code in mind
							</p>
						</li>
					</ul>
					<b class="standard_text" style="margin-bottom: 12px;">
						From the step 1, you have an hour. Than, the procedure will be cancelled
					</b>
					<div class="line_margin_bottom">
						<label>
							<p class="standard_text">
								Specify your account code:
							</p>
							<input type="text" id="wauth_recovery_acode" />
						</label>
						<button class="wb_button_blue" type="submit" onclick="wauthRecoveryPwd(this)">
							Send email
						</button>
						<img src="{% static "myapp/imgs/default/load.gif" %}" style="display: none;" class="load" />
					</div>
				</div>
			</div>
			<div id="message_mail_sent" style="display: none; text-align: center;">
				<p class="standard_text">
					Thank you.
					<br />
					If the account code specified is valid, you will receive a mail in few seconds
				</p>
			</div>
			<div id="please_contact_us" style="display: none;">
				<div class="wba_content">
					<p class="information_box" style="width: 50%; margin: 40px auto; padding: 20px; font-size: 16px; text-align: center;">
						Please, contact us at the following address:
						<br />
	          <b>h<span>el</span>p<span>@wu</span><span></span>book<span>.</span>net</b>
						<br />
						We will help you as soon as possible.
					</p>
					<div class="buttons_box">
						<button type="submit" class="wb_button_dgray" onclick="backRecovery()">
							Back
						</button>
					</div>
				</div>
			</div>
	    <img src="{% static "myapp/imgs/load.png" %}" style="display:none" />
	  </div>
	</body>
	<footer id="wb_footer" style="display:none">
		<div class="line_margin_bottom">
			<p style="margin: 4px 0;">
				<a href="https://wubook.net">WuBook </a>
				is an italian company located in Fano <span class="vert_line">|</span> Via Nolfi n.56 (61032, PU) - Italy<span class="vert_line">|</span> Vat number: 02340220413, REA: PS-173884
			</p>
		</div>
	</footer>
</html>