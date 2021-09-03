import { useRouter } from 'next/router'
import PagesShow from '../../screen/PagesShow/PagesShow'


const ShowUnique = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <PagesShow pid={id}/>
  )
}

export default ShowUnique