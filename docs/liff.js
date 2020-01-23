liff.init({ liffId: '1653770270-Jk1N1OPe' })
  .then(() => {
    liff.getProfile()
      .then(profile => {
        document.getElementById('liff').innerText = JSON.stringify(profile)
        console.log(profile)
      })
      .catch((err) => { console.log('error', err) })
  })
  .catch((err, LiffError) => {
    // Error happens during initialization
    console.log(err.code, err.message)
    })
