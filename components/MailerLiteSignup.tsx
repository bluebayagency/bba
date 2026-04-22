'use client'

import Script from 'next/script'

const MAILERLITE_CSS = `
@import url("https://assets.mlcdn.com/fonts.css?version=1776073");
.ml-form-embedSubmitLoad{display:inline-block;width:20px;height:20px}
.ml-form-embedSubmitLoad:after{content:" ";display:block;width:11px;height:11px;margin:1px;border-radius:50%;border:4px solid #fff;border-color:#ffffff #ffffff #ffffff transparent;animation:ml-form-embedSubmitLoad 1.2s linear infinite}
@keyframes ml-form-embedSubmitLoad{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}
#mlb2-38567926.ml-form-embedContainer{box-sizing:border-box;display:table;margin:0 auto;position:static;width:100%!important}
#mlb2-38567926.ml-form-embedContainer h4,#mlb2-38567926.ml-form-embedContainer p,#mlb2-38567926.ml-form-embedContainer span,#mlb2-38567926.ml-form-embedContainer button{text-transform:none!important;letter-spacing:normal!important}
#mlb2-38567926.ml-form-embedContainer .ml-form-embedWrapper{background-color:transparent;border-width:0;border-color:transparent;border-radius:0;border-style:solid;box-sizing:border-box;display:inline-block!important;margin:0;padding:0;position:relative}
#mlb2-38567926.ml-form-embedContainer .ml-form-embedWrapper.embedForm{max-width:100%;width:100%}
#mlb2-38567926.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody,#mlb2-38567926.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody{padding:0}
#mlb2-38567926.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent,#mlb2-38567926.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent{text-align:left;margin:0 0 16px 0}
#mlb2-38567926.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent h4,#mlb2-38567926.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent h4{color:#ffffff;font-family:'Open Sans',Arial,Helvetica,sans-serif;font-size:18px;font-weight:400;margin:0 0 6px 0;text-align:left;word-break:break-word}
#mlb2-38567926.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent p,#mlb2-38567926.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent p{color:rgba(255,255,255,0.4);font-family:'Open Sans',Arial,Helvetica,sans-serif;font-size:13px;font-weight:400;line-height:20px;margin:0;text-align:left}
#mlb2-38567926.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody form{margin:0;width:100%}
#mlb2-38567926.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-formContent{margin:0 0 12px 0;width:100%}
#mlb2-38567926.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow{margin:0;width:100%}
#mlb2-38567926.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input{background-color:#ffffff!important;color:#333333!important;border-color:#cccccc;border-radius:0!important;border-style:solid!important;border-width:1px!important;font-family:'Open Sans',Arial,Helvetica,sans-serif;font-size:14px!important;height:auto;line-height:21px!important;margin:0;padding:10px 12px!important;width:100%!important;box-sizing:border-box!important;max-width:100%!important}
#mlb2-38567926.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit{margin:8px 0 0 0;float:left;width:100%}
#mlb2-38567926.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button{background-color:#C4A49A!important;border:none!important;border-radius:0!important;box-shadow:none!important;color:#ffffff!important;cursor:pointer;font-family:'Open Sans',Arial,Helvetica,sans-serif!important;font-size:13px!important;font-weight:700!important;line-height:21px!important;height:auto;padding:10px!important;width:100%!important;box-sizing:border-box!important;letter-spacing:.08em;text-transform:uppercase}
#mlb2-38567926.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button.loading{display:none}
#mlb2-38567926.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button:hover{background-color:#b08f85!important}
.ml-error input,.ml-error textarea,.ml-error select{border-color:red!important}
.ml-error .label-description,.ml-error .label-description p,.ml-error label:first-child{color:#ff0000!important}
`

const FORM_HTML = `
<div class="ml-form-embedWrapper embedForm">
  <div class="ml-form-embedBody ml-form-embedBodyDefault row-form">
    <div class="ml-form-embedContent">
      <h4>Newsletter</h4>
      <p>Signup for news and special offers!</p>
    </div>
    <form class="ml-block-form" action="https://assets.mailerlite.com/jsonp/2153473/forms/182156023212016988/subscribe" data-code="" method="post" target="_blank">
      <div class="ml-form-formContent">
        <div class="ml-form-fieldRow ml-last-item">
          <div class="ml-field-group ml-field-email ml-validate-email ml-validate-required">
            <input aria-label="email" aria-required="true" type="email" class="form-control" data-inputmask="" name="fields[email]" placeholder="Email" autocomplete="email">
          </div>
        </div>
      </div>
      <input type="hidden" name="ml-submit" value="1">
      <div class="ml-form-embedSubmit">
        <button type="submit" class="primary">Subscribe</button>
        <button disabled="disabled" style="display:none;" type="button" class="loading">
          <div class="ml-form-embedSubmitLoad"></div>
          <span class="sr-only">Loading...</span>
        </button>
      </div>
      <input type="hidden" name="anticsrf" value="true">
    </form>
  </div>
  <div class="ml-form-successBody row-success" style="display:none">
    <div class="ml-form-successContent">
      <h4>Thank you!</h4>
      <p>You have successfully joined our subscriber list.</p>
    </div>
  </div>
</div>
`

export default function MailerLiteSignup() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: MAILERLITE_CSS }} />

      <div
        id="mlb2-38567926"
        className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-38567926"
        dangerouslySetInnerHTML={{ __html: FORM_HTML }}
      />

      <Script id="ml-success-38567926" strategy="afterInteractive">{`
        function ml_webform_success_38567926() {
          var $ = ml_jQuery || jQuery;
          $('.ml-subscribe-form-38567926 .row-success').show();
          $('.ml-subscribe-form-38567926 .row-form').hide();
        }
      `}</Script>
      <Script
        src="https://groot.mailerlite.com/js/w/webforms.min.js?v95037e5bac78f29ed026832ca21a7c7b"
        strategy="afterInteractive"
      />
      <Script strategy="afterInteractive">{`
        fetch("https://assets.mailerlite.com/jsonp/2153473/forms/182156023212016988/takel")
      `}</Script>
    </>
  )
}
