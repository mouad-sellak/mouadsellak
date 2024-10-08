import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-blue-900 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white font-bold text-2xl">Mouad Sellak</h1>
                <ul className="flex space-x-4 text-white">
                    <li><Link href="/">Accueil</Link></li>
                    <li><Link href="/about">À propos</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/cours-informatique">Cours Info</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
}
