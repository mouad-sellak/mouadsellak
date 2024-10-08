import Layout from '@/app/layout';
import { useRouter } from 'next/router';

export default function ArticlePage() {
    const router = useRouter();
    const { slug } = router.query;

    return (
        <Layout>
            <h1 className="text-4xl font-bold text-blue-700 mb-6">{slug?.toString().replace('-', ' ')}</h1>
            <p>Ceci est le contenu de l article {slug}.</p>
        </Layout>
    );
}
