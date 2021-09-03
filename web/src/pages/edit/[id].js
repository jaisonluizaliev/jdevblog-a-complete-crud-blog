import { useRouter } from 'next/router'
import PagesEdit from '../../screen/PagesEdit/PagesEdit'


const ShowUnique = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <PagesEdit eid={Number.parseInt(id, 10)} />
  )
}

export default ShowUnique