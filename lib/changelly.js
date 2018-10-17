document.getElementById('changelly').innerHTML = `<link rel="stylesheet" href="https://changelly.com/widget.css" /> <a id="changellyButton" href="https://changelly.com/widget/v1?auth=email&from=ETH&to=ETC&merchant_id=5nyu40p1vkzlp7hr&address=&amount=.3&ref_id=5nyu40p1vkzlp7hr&color=348F50"
target="_blank"> <img class="changelly" src="https://changelly.com/pay_button_exchange.png" />
</a>
<div id="changellyModal">
<div class="changellyModal-content"> <span class="changellyModal-close">x</span> <iframe id="changellyIframe"
        src="https://changelly.com/widget/v1?auth=email&from=ETH&to=ETC&merchant_id=5nyu40p1vkzlp7hr&address=&amount=.3&ref_id=5nyu40p1vkzlp7hr&color=61c87a"
        width="600" height="500" class="changelly" scrolling="no" style="overflow-y: hidden; border: none">
        Can't load widget </iframe> </div>
<script type="text/javascript"> var changellyModal = document.getElementById('changellyModal'); var changellyButton = document.getElementById('changellyButton'); var changellyCloseButton = document.getElementsByClassName('changellyModal-close')[0]; changellyCloseButton.onclick = function () { changellyModal.style.display = 'none'; }; changellyButton.onclick = function widgetClick(e) { e.preventDefault(); changellyModal.style.display = 'block'; }; </script>
</div>`

var changellyModal = document.getElementById('changellyModal'); var changellyButton = document.getElementById('changellyButton'); var changellyCloseButton = document.getElementsByClassName('changellyModal-close')[0]; changellyCloseButton.onclick = function () { changellyModal.style.display = 'none'; }; changellyButton.onclick = function widgetClick(e) { e.preventDefault(); changellyModal.style.display = 'block'; }; 