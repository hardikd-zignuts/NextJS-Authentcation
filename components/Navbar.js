import Link from 'next/link';
import { useSession, signIn, signOut } from "next-auth/react"

function Navbar() {
    const { data, status } = useSession()
    return (
        <nav className='header '>
            <h1 className='logo'>
                NextAuth
            </h1>
            <ul className="main-nav loaded">
                <li>
                    <Link href='/'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href='/dashboard'>
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link href='/blog'>
                        Blog
                    </Link>
                </li>
                {
                    (status === 'unauthenticated' && data === null) &&
                    <li>
                        <Link href='/api/auh/signin' onClick={() => {
                            signIn()
                        }}>
                            Sign in
                        </Link>
                    </li>
                }
                {
                    (status === 'authenticated' && data) &&
                    <li>
                        <Link href='/api/auth/signout' onClick={() => {
                            signOut()
                        }}>
                            Sign out
                        </Link>
                    </li>
                }
            </ul>
        </nav >
    )
}

export default Navbar