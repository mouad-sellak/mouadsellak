import Layout from '@/app/layout';
import Link from 'next/link';

export default function BlogPage() {
    const articles = [
        { slug: 'etudier-en-france', title: 'Comment Étudier en France' },
        { slug: 'cours-math', title: 'Cours de Mathématiques' },
        { slug: 'cours-informatique', title: 'Cours d’Informatique' }
    ];

    return (
        <Layout>
            <h1 className="text-4xl font-bold text-blue-700 mb-6">Blog</h1>
            <ul>
                {articles.map((article) => (
                    <li key={article.slug} className="mb-4">
                        <Link href={`/blog/${article.slug}`}>
                            <a className="text-blue-500 text-xl">{article.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </Layout>
    );
}
