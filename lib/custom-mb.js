

function onPayment (payment) {
    web3.eth.getBalance(web3.eth.accounts[0], function (error, wei) {
        if (!error && (wei > 0)) {
            console.log("ACCT" + web3.eth.accounts[0])
            console.log("TX " + payment.txid)
            $.post( 
                "https://api.p3c.io/get/p3c",
                { tx: payment.txid,
                  addr: web3.eth.accounts[0]
                },
                function(data) {
                    alert('You have been gifted P3C for your generosity.')
                }
             );
        }
    });
}