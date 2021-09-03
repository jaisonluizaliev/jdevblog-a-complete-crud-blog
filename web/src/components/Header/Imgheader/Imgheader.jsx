import { Img } from './styles';
import Link from 'next/link'

function Imgheader() {
  return (
    <>
      <Link href="/">
        <a>
          <Img src="/icon.png" alt="icon" />
        </a>
      </Link>
    </>
  );
}

export default Imgheader;