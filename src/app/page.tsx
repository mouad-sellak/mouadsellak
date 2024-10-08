import Layout from './layout';

export default function HomePage() {
  return (
    <Layout>
      <section>
        <h1 className="text-5xl font-bold text-blue-700 mb-4">Bienvenue à Mouad Academy</h1>
        <p className="text-lg">Apprenez linformatique, la langue arabe, et les mathématiques avec un expert.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="p-6 border rounded-lg">
            <h2 className="text-xl font-bold">Cours de Mathématiques</h2>
            <p>Des cours pour tous les niveaux avec une pédagogie adaptée.</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h2 className="text-xl font-bold">Cours dInformatique</h2>
            <p>Apprenez à coder avec des technologies modernes comme React et Python.</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h2 className="text-xl font-bold">Étudier en France</h2>
            <p>Découvrez comment étudier en France grâce à mes tutoriels vidéo.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
