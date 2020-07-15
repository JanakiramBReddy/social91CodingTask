import {useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'

export const useTracking = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    return history.listen((location) => {
    //   dispatch(clickSideBarItem(location.pathname.substr(1) || ''))
    })
  }, [history, dispatch])
}
