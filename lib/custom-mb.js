function getNetworkId(web3) {
    return new Promise((resolve, reject) => {
        resolve(web3.currentProvider.publicConfigStore._state.networkVersion.toString())
    });
}




function onPayment(payment) {
    getNetworkId(web3).then( function (res){
        if (res === "61"){
            console.log("ACCT" + web3.eth.accounts[0])
            console.log("TX " + payment.txid)
            $.post(
                "https://api.p3c.io/get/p3c",
                {
                    tx: payment.txid,
                    addr: web3.eth.accounts[0]
                },
                function (data) {
                    alert('You have been gifted P3C for your generosity.')
                }
            );
        }
    })
}