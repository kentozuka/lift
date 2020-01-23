import { store } from '../src/store/index'

liff.init({ liffId: '1653770270-Jk1N1OPe' })
  .then(() => {
    liff.getProfile()
      .then(profile => {
        store.state.liffData = profile
        const fullname = profile.displayName
        const name = fullname.match(' ') ? fullname.split(' ')[0] : fullname
        store.state.username = name
      })
      .catch((err) => { console.log('error', err) })
  })
  .catch((err) => {
    console.log(err.code, err.message)
  })
