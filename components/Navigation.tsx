
import Link from 'next/link'

export const Nav = () => {

  return (
    <div className="fixed z-10 top-0 lef-0 w-screen">
      <ul className="flex border-b">
        <li className="-mb-px mr-1">
          <Link className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="/">Top</Link>
        </li>
        <li className="mr-1">
        <Link className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="/view/1">View1</Link>
        </li>
        <li className="mr-1">
        <Link className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="/view/2">View2</Link>
        </li>
        <li className="mr-1">
        <Link className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="/view/3">View3</Link>
        </li>
      </ul>
    </div>
  )
}