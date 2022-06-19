import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <div className='container-header'>
        <Link href='/' passHref>
          <h2>nocto.dev</h2>
        </Link>
      </div>
    </header>
  )
}