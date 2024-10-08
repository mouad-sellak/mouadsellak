import Layout from './layout';

export default function ContactPage() {
    return (
        <Layout>
            <h1 className="text-4xl font-bold text-blue-700 mb-6">Contactez-moi</h1>
            <form className="space-y-4">
                <div>
                    <label className="block">Nom</label>
                    <input type="text" className="w-full p-2 border rounded" />
                </div>
                <div>
                    <label className="block">Email</label>
                    <input type="email" className="w-full p-2 border rounded" />
                </div>
                <div>
                    <label className="block">Message</label>
                    <textarea className="w-full p-2 border rounded"></textarea>
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">Envoyer</button>
            </form>
        </Layout>
    );
}
