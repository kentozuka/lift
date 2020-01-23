liff.init({ liffId: '1653770270-Jk1N1OPe' })
    .then(() => {
        if (accessToken) {
            liff.getProfile()
                .then(profile => {
                    const fullname = profile.displayName
                    const name = fullname.match(' ') ? fullname.split(' ')[0] : fullname
                    document.getElementById('username').innerText = name
                    document.getElementById('user-profile-id').src = profile.pictureUrl
                })
                .catch((err) => { console.log('error', err) })
        }
    })
    .catch((err) => {
        console.log(err.code, err.message)
    })
